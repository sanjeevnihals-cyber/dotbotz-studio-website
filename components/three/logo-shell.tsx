"use client";

import { LogoCanvas } from "@/components/three/logo-canvas";

export default function LogoShell({ pointer }: { pointer: { x: number; y: number } }) {
  return <LogoCanvas pointer={pointer} />;
}
