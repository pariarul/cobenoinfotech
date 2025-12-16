"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, ContactShadows } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from 'three'

function LaptopModel() {
    const group = useRef()

    // Animate the laptop's rotation
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 10 + 0.25, 0.1)
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 10, 0.1)
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 20, 0.1)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t)) / 5, 0.1)
        }
    })

    // Create the screen texture once
    const screenTexture = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 340;
        const ctx = canvas.getContext('2d');
        // Gradient background
        const grd = ctx.createLinearGradient(0, 0, 512, 512);
        grd.addColorStop(0, "#4f46e5"); // Indigo
        grd.addColorStop(1, "#9333ea"); // Purple
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 512, 340);
        // Text
        ctx.fillStyle = "white";
        ctx.font = "bold 40px Arial";
        ctx.fillText("COBENO", 40, 80);
        ctx.font = "20px Arial";
        ctx.fillText("Tech Solutions", 40, 115);
        // Code lines
        ctx.fillStyle = "rgba(255,255,255,0.2)";
        ctx.fillRect(40, 160, 300, 10);
        ctx.fillRect(40, 180, 250, 10);
        ctx.fillRect(40, 200, 280, 10);

        return new THREE.CanvasTexture(canvas);
    }, []);

    return (
        <group ref={group} dispose={null}>
            {/* Laptop Base */}
            <group position={[0, -0.5, 0]}>
                <mesh position={[0, 0, 0]}>
                    <boxGeometry args={[3.2, 0.15, 2.2]} />
                    <meshStandardMaterial color="#2d2d2d" metalness={0.7} roughness={0.3} />
                </mesh>
                {/* Keyboard Area */}
                <mesh position={[0, 0.08, 0.2]} rotation={[-0.05, 0, 0]}>
                    <planeGeometry args={[2.8, 1.2]} />
                    <meshStandardMaterial color="#1a1a1a" roughness={0.8} />
                </mesh>
                {/* Touchpad */}
                <mesh position={[0, 0.08, 0.9]} rotation={[-0.05, 0, 0]}>
                    <planeGeometry args={[0.8, 0.6]} />
                    <meshStandardMaterial color="#333" roughness={0.4} />
                </mesh>
            </group>

            {/* Laptop Screen (Hinged) */}
            <group position={[0, -0.45, -1]} rotation={[-0.4, 0, 0]}>
                {/* Lid Back */}
                <mesh position={[0, 1.1, 0]}>
                    <boxGeometry args={[3.2, 2.2, 0.1]} />
                    <meshStandardMaterial color="#2d2d2d" metalness={0.7} roughness={0.3} />
                </mesh>
                {/* Bezels */}
                <mesh position={[0, 1.1, 0.06]}>
                    <planeGeometry args={[3.1, 2.1]} />
                    <meshStandardMaterial color="#000" />
                </mesh>
                {/* Screen Display Content */}
                <mesh position={[0, 1.1, 0.07]}>
                    <planeGeometry args={[3, 2]} />
                    {screenTexture ? (
                        <meshBasicMaterial map={screenTexture} />
                    ) : (
                        <meshBasicMaterial color="#4f46e5" />
                    )}
                </mesh>
            </group>
        </group>
    )
}

export default function Hero3DProduct() {
    return (
        <div className="w-full h-[500px]">
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
                {/* Simple Lighting Setup - No Environment/Suspense needed */}
                <ambientLight intensity={1.5} />
                <directionalLight position={[10, 10, 5]} intensity={2} />
                <directionalLight position={[-10, 10, -5]} intensity={1} color="#4f46e5" />
                <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />

                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <LaptopModel />
                </Float>
                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />

                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}








