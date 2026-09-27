import { lazy, Suspense, useEffect, useState } from "react";
import { useReducedMotion } from "../../hooks/useReducedMotion";
import { useWebGLSupport } from "../../hooks/useWebGLSupport";
import { HeroFallback } from "./HeroFallback";
import { CanvasErrorBoundary } from "./CanvasErrorBoundary";

// Code-split: the three.js / r3f bundle is only fetched when this chunk mounts.
const HeroCanvas = lazy(() => import("./HeroCanvas"));

export function HeroScene() {
  const reducedMotion = useReducedMotion();
  const webglSupported = useWebGLSupport();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Defer mounting the heavy canvas until just after the hero itself has
    // painted, so it never blocks first paint or interaction.
    const id = window.requestAnimationFrame(() => setReady(true));
    return () => window.cancelAnimationFrame(id);
  }, []);

  const shouldRenderCanvas = ready && webglSupported && !reducedMotion;

  if (!shouldRenderCanvas) {
    return <HeroFallback allowMotion={!reducedMotion} />;
  }

  return (
    <CanvasErrorBoundary fallback={<HeroFallback allowMotion={!reducedMotion} />}>
      <Suspense fallback={<HeroFallback allowMotion={false} />}>
        <HeroCanvas />
      </Suspense>
    </CanvasErrorBoundary>
  );
}
