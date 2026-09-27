import { Canvas } from "@react-three/fiber";
import { CellTowerScene } from "./CellTowerScene";

export default function HeroCanvas() {
  return (
    <Canvas
      dpr={[1, 2]}
      camera={{ position: [0, 0.3, 6], fov: 42 }}
      gl={{ antialias: true, powerPreference: "high-performance" }}
      onCreated={({ gl }) => gl.setClearColor(0x000000, 0)}
    >
      <CellTowerScene />
    </Canvas>
  );
}
