"use client";

import { Environment } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

type Pointer = { x: number; y: number };

function Mark({ pointer, accent, foreground }: { pointer: Pointer; accent: string; foreground: string }) {
  const group = useRef<THREE.Group>(null);

  const material = useMemo(
    () =>
      new THREE.MeshStandardMaterial({
        color: foreground,
        roughness: 0.2,
        metalness: 0.8
      }),
    [foreground]
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.22;
    group.current.rotation.x = THREE.MathUtils.damp(group.current.rotation.x, pointer.y * 0.3, 6, delta);
    group.current.rotation.z = THREE.MathUtils.damp(group.current.rotation.z, -pointer.x * 0.3, 6, delta);
  });

  return (
    <group ref={group}>
      <mesh material={material}>
        <torusKnotGeometry args={[1.1, 0.22, 180, 20]} />
      </mesh>
      <mesh rotation={[0.3, 0, 0]}>
        <torusGeometry args={[1.55, 0.03, 32, 128]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.45} />
      </mesh>
    </group>
  );
}

export function LogoCanvas({ pointer }: { pointer: Pointer }) {
  const [accent, setAccent] = useState("white");
  const [foreground, setForeground] = useState("white");

  useEffect(() => {
    const style = getComputedStyle(document.documentElement);
    setAccent(style.getPropertyValue("--color-accent").trim() || "white");
    setForeground(style.getPropertyValue("--color-fg").trim() || "white");
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 4.2], fov: 45 }} dpr={[1, 2]}>
      <ambientLight intensity={0.25} color={foreground} />
      <directionalLight position={[3, 2, 4]} intensity={1.1} color={foreground} />
      <pointLight position={[-2, -1, 2]} intensity={1.1} color={accent} />
      <Mark pointer={pointer} accent={accent} foreground={foreground} />
      <Environment preset="city" />
    </Canvas>
  );
}
