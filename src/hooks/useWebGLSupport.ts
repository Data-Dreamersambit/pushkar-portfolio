import { useState } from "react";

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl2") ||
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");
    return !!gl;
  } catch {
    return false;
  }
}

export function useWebGLSupport(): boolean {
  // Lazy initializer runs once on the client, synchronously — no need for a
  // separate effect (this is a client-only SPA, so there's no SSR mismatch).
  const [supported] = useState(detectWebGL);
  return supported;
}
