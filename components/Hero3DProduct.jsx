"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, ContactShadows } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from "three"

/* ---------------- Laptop Model ---------------- */
function LaptopModel() {
  const group = useRef()

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (!group.current) return

    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      Math.cos(t / 2) / 14 + 0.12,
      0.06
    )
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      Math.sin(t / 4) / 14,
      0.06
    )
  })

  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null

    const canvas = document.createElement("canvas")
    canvas.width = 512
    canvas.height = 340
    const ctx = canvas.getContext("2d")

    const g = ctx.createLinearGradient(0, 0, 512, 512)
    g.addColorStop(0, "#4f46e5")
    g.addColorStop(1, "#9333ea")
    ctx.fillStyle = g
    ctx.fillRect(0, 0, 512, 340)

    ctx.fillStyle = "#fff"
    ctx.font = "bold 40px Arial"
    ctx.fillText("COBENO", 40, 80)
    ctx.font = "20px Arial"
    ctx.fillText("Infotech Solutions", 40, 115)

    return new THREE.CanvasTexture(canvas)
  }, [])

  return (
    <group ref={group}>
      {/* ========= BASE ========= */}
      <group position={[0, -0.42, 0]}>
        <mesh>
          <boxGeometry args={[3.2, 0.2, 2.2]} />
          <meshStandardMaterial
            color="#2d2d2d"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Keyboard */}
        <mesh position={[0, 0.12, 0.12]} rotation={[-0.05, 0, 0]}>
          <boxGeometry args={[2.8, 0.02, 1.2]} />
          <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
        </mesh>

        {/* Touchpad */}
        <mesh position={[0, 0.13, 0.82]} rotation={[-0.05, 0, 0]}>
          <boxGeometry args={[0.8, 0.015, 0.55]} />
          <meshStandardMaterial color="#333" roughness={0.4} />
        </mesh>
      </group>

      {/* ========= SCREEN (NO GAP) ========= */}
      <group
        position={[0, 0.53, -0.98]}   // pulled closer
        rotation={[-0.47, 0, 0]}     // hinge angle
      >
        {/* Screen back */}
        <mesh>
          <boxGeometry args={[3.2, 2.2, 0.12]} />
          <meshStandardMaterial
            color="#2d2d2d"
            metalness={0.7}
            roughness={0.3}
          />
        </mesh>

        {/* Bezel */}
        <mesh position={[0, 0, 0.065]}>
          <planeGeometry args={[3.05, 2.05]} />
          <meshStandardMaterial color="#000" />
        </mesh>

        {/* Screen */}
        <mesh position={[0, 0, 0.07]}>
          <planeGeometry args={[3, 2]} />
          <meshBasicMaterial map={screenTexture} />
        </mesh>
      </group>
    </group>
  )
}

/* ---------------- Hero Section ---------------- */
export default function Hero3DProduct() {
  return (
    <div className="w-full h-[500px]">
      <Canvas
        camera={{ position: [0, 1.5, 6], fov: 45 }}
        onCreated={({ camera }) => camera.lookAt(0, 0, 0)}
        dpr={[1, 2]}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[8, 10, 5]} intensity={2} />
        <directionalLight
          position={[-8, 6, -5]}
          intensity={1}
          color="#4f46e5"
        />

        <Float speed={1.3} floatIntensity={0.22} rotationIntensity={0.25}>
          <LaptopModel />
        </Float>

        <ContactShadows
          position={[0, -1.45, 0]}
          opacity={0.4}
          scale={10}
          blur={2.5}
          far={4}
        />

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
