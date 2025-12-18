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