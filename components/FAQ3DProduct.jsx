
"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Float, ContactShadows } from "@react-three/drei"
import { useRef, useMemo } from "react"
import * as THREE from 'three'

function GameController() {
    const group = useRef()

    // Animate rotation and floating
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20, 0.1)
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 20, 0.1)
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 4) / 40, 0.1)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-1 + Math.sin(t)) / 5, 0.1)
        }
    })

    // Texture for controller surface with COBENO Tech text
    const surfaceTexture = useMemo(() => {
        if (typeof document === 'undefined') return null;
        const canvas = document.createElement('canvas');
        canvas.width = 512;
        canvas.height = 256;
        const ctx = canvas.getContext('2d');

        // Gradient background
        const grd = ctx.createLinearGradient(0, 0, 512, 256);
        grd.addColorStop(0, "#4f46e5");
        grd.addColorStop(1, "#9333ea");
        ctx.fillStyle = grd;
        ctx.fillRect(0, 0, 512, 256);

        // Text: COBENO Tech
        ctx.fillStyle = "white";
        ctx.font = "bold 40px Arial";
        ctx.fillText("COBENO", 50, 80);
        ctx.font = "25px Arial";
        ctx.fillText("Tech", 50, 130);

        // Optional button marks
        ctx.fillStyle = "rgba(255,255,255,0.3)";
        for (let i = 0; i < 4; i++) {
            ctx.beginPath();
            ctx.arc(400, 50 + i * 50, 15, 0, Math.PI * 2);
            ctx.fill();
        }

        return new THREE.CanvasTexture(canvas);
    }, []);

    return (
        <group ref={group} dispose={null}>
            {/* Controller body */}
            <mesh>
                <boxGeometry args={[3, 1, 1]} />
                <meshStandardMaterial color="#0f766e" metalness={0.7} roughness={0.3} />
            </mesh>

            {/* Surface panel */}
            <mesh position={[0, 0.2, 0.51]}>
                <planeGeometry args={[2.5, 0.5]} />
                {surfaceTexture ? (
                    <meshBasicMaterial map={surfaceTexture} />
                ) : (
                    <meshStandardMaterial color="#06b6d4" />
                )}
            </mesh>

            {/* Analog sticks */}
            <mesh position={[-0.7, -0.2, 0.51]}>
                <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                <meshStandardMaterial color="#4f46e5" />
            </mesh>
            <mesh position={[0.7, -0.2, 0.51]}>
                <cylinderGeometry args={[0.15, 0.15, 0.1, 32]} />
                <meshStandardMaterial color="#9333ea" />
            </mesh>
        </group>
    )
}

export default function FAQ3DProduct() {
    return (
        <div className="w-full h-[500px] sm:h-[600px] lg:h-[700px]">
            <Canvas camera={{ position: [0, 0, 8], fov: 50 }} dpr={[1, 2]}>
                {/* Lighting */}
                <ambientLight intensity={1.2} />
                <directionalLight position={[10, 10, 5]} intensity={1.8} color="#4f46e5" />
                <directionalLight position={[-10, 10, -5]} intensity={1} color="#9333ea" />
                <spotLight position={[0, 10, 0]} intensity={0.8} angle={0.5} penumbra={1} color="#0f766e" />

                {/* Floating Controller */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <GameController />
                </Float>

                <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
                <OrbitControls enableZoom={false} enablePan={false} />
            </Canvas>
        </div>
    )
}
