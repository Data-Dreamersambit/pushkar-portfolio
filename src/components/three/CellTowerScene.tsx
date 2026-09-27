import { useMemo, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const SIGNAL = "#3ddc97";
const SIGNAL_STRONG = "#63f0b0";

// Nodes positioned around the tower — devices / neighbouring small cells.
const NODES: [number, number, number][] = [
  [-2.6, 0.9, 0.4],
  [2.3, 1.3, -0.6],
  [-1.6, -0.2, -2.1],
  [2.6, -0.4, 1.6],
  [0.2, 1.9, 2.4],
  [-0.6, -1.0, 2.0],
];

// Which nodes connect to which (indices), beyond every node connecting to the tower top.
const NODE_LINKS: [number, number][] = [
  [0, 2],
  [1, 3],
  [4, 5],
];

const TOWER_TOP: [number, number, number] = [0, 1.7, 0];

function Tower() {
  return (
    <group>
      {/* Mast */}
      <mesh position={[0, -0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.12, 3.4, 6]} />
        <meshStandardMaterial color="#243347" roughness={0.6} metalness={0.3} />
      </mesh>
      {/* Cross braces */}
      {[-0.9, -0.3, 0.3].map((y, i) => (
        <mesh key={i} position={[0, y, 0]} rotation={[0, (i * Math.PI) / 4, 0]}>
          <boxGeometry args={[0.9, 0.04, 0.04]} />
          <meshStandardMaterial color="#2c3b50" />
        </mesh>
      ))}
      {/* Antenna panels at top, arranged radially */}
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * 0.28, 1.55, Math.sin(angle) * 0.28]}
            rotation={[0, -angle, 0]}
          >
            <boxGeometry args={[0.08, 0.5, 0.16]} />
            <meshStandardMaterial color="#182230" emissive={SIGNAL} emissiveIntensity={0.15} />
          </mesh>
        );
      })}
    </group>
  );
}

function SignalRings() {
  const group = useRef<THREE.Group>(null);
  const ringCount = 4;
  const rings = useMemo(
    () =>
      Array.from({ length: ringCount }, (_, i) => ({
        phase: i / ringCount,
        ref: { current: null as THREE.Mesh | null },
      })),
    []
  );

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    rings.forEach((ring) => {
      const mesh = ring.ref.current;
      if (!mesh) return;
      const cycle = ((t * 0.28 + ring.phase) % 1) + 0.0001;
      const scale = 0.4 + cycle * 3.2;
      mesh.scale.setScalar(scale);
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = Math.max(0, 0.55 * (1 - cycle));
    });
  });

  return (
    <group ref={group} position={TOWER_TOP} rotation={[-Math.PI / 2, 0, 0]}>
      {rings.map((ring, i) => (
        <mesh key={i} ref={(m) => (ring.ref.current = m)}>
          <ringGeometry args={[0.98, 1, 48]} />
          <meshBasicMaterial color={SIGNAL} transparent opacity={0} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </group>
  );
}

function NodeMesh() {
  const linkPairs = useMemo(() => {
    const towerLinks = NODES.map((n) => [TOWER_TOP, n] as [typeof TOWER_TOP, typeof n]);
    const crossLinks = NODE_LINKS.map(
      ([a, b]) => [NODES[a], NODES[b]] as [typeof TOWER_TOP, typeof TOWER_TOP]
    );
    return [...towerLinks, ...crossLinks];
  }, []);

  return (
    <group>
      {NODES.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.07, 12, 12]} />
          <meshStandardMaterial color={SIGNAL_STRONG} emissive={SIGNAL} emissiveIntensity={0.6} />
        </mesh>
      ))}
      {linkPairs.map((pts, i) => (
        <Line key={i} points={pts} color="#2c3b50" lineWidth={1} transparent opacity={0.7} />
      ))}
      <DataPackets links={linkPairs} />
    </group>
  );
}

function DataPackets({ links }: { links: [THREE.Vector3Tuple | number[], THREE.Vector3Tuple | number[]][] }) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    links.forEach((link, i) => {
      const mesh = refs.current[i];
      if (!mesh) return;
      const speed = 0.35 + (i % 3) * 0.08;
      const progress = (t * speed + i * 0.37) % 1;
      const [a, b] = link;
      mesh.position.set(
        a[0] + (b[0] - a[0]) * progress,
        a[1] + (b[1] - a[1]) * progress,
        a[2] + (b[2] - a[2]) * progress
      );
      const material = mesh.material as THREE.MeshBasicMaterial;
      material.opacity = Math.sin(progress * Math.PI); // fade in/out along the path
    });
  });

  return (
    <>
      {links.map((_, i) => (
        <mesh key={i} ref={(m) => (refs.current[i] = m)}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshBasicMaterial color={SIGNAL_STRONG} transparent opacity={0} />
        </mesh>
      ))}
    </>
  );
}

function Rig() {
  const { camera, pointer } = useThree();
  const target = useRef(new THREE.Vector3(0, 0.3, 6));

  useFrame(() => {
    target.current.x = pointer.x * 0.6;
    target.current.y = 0.3 + pointer.y * 0.35;
    camera.position.lerp(new THREE.Vector3(target.current.x, target.current.y, 6), 0.04);
    camera.lookAt(0, 0.3, 0);
  });

  return null;
}

export function CellTowerScene({ idleRotate = true }: { idleRotate?: boolean }) {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (idleRotate && group.current) {
      group.current.rotation.y += delta * 0.08;
    }
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[3, 4, 4]} intensity={30} color={SIGNAL} />
      <pointLight position={[-4, -2, -3]} intensity={10} color="#4a6fa5" />
      <Rig />
      <group ref={group}>
        <Tower />
        <SignalRings />
        <NodeMesh />
      </group>
    </>
  );
}
