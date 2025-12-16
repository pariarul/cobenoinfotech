"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float, ContactShadows } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import { MessageCircle, Phone, Mail } from "lucide-react";

// 3D TV Model
function MonitorWithMouse() {
  const group = useRef();
  const mouseRef = useRef();

  // Subtle desktop-style motion (no floating)
  useFrame((state) => {
    const t = state.clock.getElapsedTime();

    if (group.current) {
      group.current.rotation.y = THREE.MathUtils.lerp(
        group.current.rotation.y,
        Math.sin(t / 3) * 0.04,
        0.05
      );

      group.current.rotation.x = THREE.MathUtils.lerp(
        group.current.rotation.x,
        Math.cos(t / 4) * 0.02,
        0.05
      );
    }

    // Mouse tiny movement
    if (mouseRef.current) {
      mouseRef.current.position.x =
        1.6 + Math.sin(t * 1.5) * 0.05;
    }
  });

  // Screen texture
  const screenTexture = useMemo(() => {
    if (typeof document === "undefined") return null;

    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 600;
    const ctx = canvas.getContext("2d");

    const grd = ctx.createLinearGradient(0, 0, 1024, 600);
    grd.addColorStop(0, "#4f46e5");
    grd.addColorStop(1, "#9333ea");
    ctx.fillStyle = grd;
    ctx.fillRect(0, 0, 1024, 600);

    ctx.fillStyle = "white";
    ctx.font = "bold 64px Arial";
    ctx.fillText("COBENO", 60, 120);
    ctx.font = "30px Arial";
    ctx.fillText("Infotech Solutions", 60, 170);

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <group ref={group} position={[0, -0.8, 0]}>
      
      {/* MONITOR FRAME */}
      <mesh>
        <boxGeometry args={[3.4, 2, 0.15]} />
        <meshStandardMaterial
          color="#0f172a"
          metalness={0.6}
          roughness={0.3}
        />
      </mesh>

      {/* SCREEN */}
      <mesh position={[0, 0, 0.085]}>
        <planeGeometry args={[3.1, 1.75]} />
        {screenTexture ? (
          <meshBasicMaterial map={screenTexture} />
        ) : (
          <meshStandardMaterial color="#4f46e5" />
        )}
      </mesh>

      {/* STAND NECK */}
      <mesh position={[0, -1.2, 0]}>
        <boxGeometry args={[0.25, 0.8, 0.2]} />
        <meshStandardMaterial color="#1f2937" />
      </mesh>

      {/* STAND BASE */}
      <mesh position={[0, -1.7, 0.1]}>
        <boxGeometry args={[1.4, 0.15, 0.8]} />
        <meshStandardMaterial color="#111827" />
      </mesh>

      {/* MOUSE */}
      <mesh ref={mouseRef} position={[1.6, -1.75, 0.4]}>
        <boxGeometry args={[0.35, 0.15, 0.55]} />
        <meshStandardMaterial
          color="#1f2937"
          metalness={0.4}
          roughness={0.4}
        />
      </mesh>

    </group>
  );
}

// Main Section
export default function CallToAction() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-neutral-900 " id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: 3D TV */}
        <div className="w-full h-[400px] sm:h-[500px] lg:h-[700px] flex items-center justify-center relative">
          <Canvas camera={{ position: [0, 0, 6], fov: 45 }} dpr={[1, 2]}>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <directionalLight position={[-10, 10, -5]} intensity={1} color="#9333ea" />
            <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} />

            <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
              <MonitorWithMouse />
            </Float>

            <ContactShadows position={[0, -2, 0]} opacity={0.5} scale={10} blur={2} far={4} />
            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 to-transparent rounded-full blur-2xl -z-10" />
        </div>

        {/* Right: Contact CTA */}
        <div className="text-center lg:text-left">
          <h2 className="text-blue-600 dark:text-blue-400 font-semibold uppercase text-sm mb-2">
            Contact Us
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Still have questions?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md">
            Our team is happy to help you with course details, pricing, or project requirements.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <a
              href="tel:+919361430865"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-700 transition"
            >
              <Phone size={18} />
              Call Us
            </a>

            <a
              href="mailto:cobenoinfotech@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-gray-300 dark:border-white/20 text-gray-900 dark:text-white font-semibold hover:bg-red-500 hover:text-white transition"
            >
              <Mail size={18} />
              Email Us
            </a>

            <a
              href="https://wa.me/919361430865?text=Hi%20Cobenoinfotech%2C%20I%20would%20like%20to%20know%20more%20about%20your%20training%20and%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border   bg-green-500 text-green-600 text-white font-semibold hover:bg-green-600 dark:hover:bg-green-900/10 transition"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 dark:text-gray-400">
            ⚡ We usually respond within 24 hours
          </p>
        </div>
      </div>
    </section>
  );
}
