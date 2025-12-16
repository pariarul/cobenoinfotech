"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function TVModel() {
  const group = useRef();

  // Animate rotation and floating
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (group.current) {
      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 2) / 20,
        0.1
      );
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 4) / 20,
        0.1
      );
      group.current.rotation.z = THREE.MathUtils.lerp(
        group.current.rotation.z,
        Math.sin(t / 4) / 40,
        0.1
      );
      group.current.position.y = THREE.MathUtils.lerp(
        group.current.position.y,
        (-1 + Math.sin(t)) / 5,
        0.1
      );
    }
  });

  // Screen texture
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    // Gradient background
    const grd = ctx.createLinearGradient(0, 0, 1024, 600);
    grd.addColorStop(0, "#4f46e5");
    grd.addColorStop(1, "#9333ea");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1024, 600);

    // Text on screen
    ctx.fillStyle = "white";
    ctx.font = "bold 60px Arial";
    ctx.fillText("COBENO", 50, 100);
    ctx.font = "30px Arial";
    ctx.fillText("Tech Solutions", 50, 150);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group ref={group} dispose={null}>
      {/* TV Body */}
      <mesh>
        <boxGeometry args={[3.2, 1.8, 0.15]} />
        <meshStandardMaterial color="#1f2937" metalness={0.5} roughness={0.3} />
      </mesh>

      {/* TV Screen */}
      <mesh position={[0, 0, 0.08]}>
        <planeGeometry args={[3, 1.7]} />
        {screenTexture ? (
          <meshBasicMaterial map={screenTexture} />
        ) : (
          <meshStandardMaterial color="#4f46e5" />
        )}
      </mesh>
    </group>
  );
}

export default function About3DTV() {
  return (
    <div className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px]">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 45 }}
        dpr={[1, 2]}
        style={{ width: "100%", height: "100%" }}
      >
        {/* Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[10, 10, 5]} intensity={2} />
        <directionalLight position={[-10, 10, -5]} intensity={1} color="#4f46e5" />
        <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />

        {/* Floating TV */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <TVModel />
        </Float>

        {/* Shadows */}
        <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
}
