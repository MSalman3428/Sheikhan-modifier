"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";

// Floating ambient particles or subtle background glow mesh to replace the stage platform
function AmbientAtmosphere({ accentColor }: { accentColor: string }) {
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((state, delta) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.05;
    }
  });

  // Create subtle floating particles in 3D space
  const count = 60;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 10;
    positions[i + 1] = (Math.random() - 0.5) * 4;
    positions[i + 2] = (Math.random() - 0.5) * 10;
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color={accentColor}
        transparent
        opacity={0.6}
      />
    </points>
  );
}

export default function ThreeCanvas({ accentColor }: { accentColor: string }) {
  return (
    <div className="w-full h-[400px] sm:h-[500px] relative">
      <Canvas
        camera={{ position: [0, 1, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Ambient & Colored Accent Lighting */}
        <ambientLight intensity={1.5} />
        <directionalLight position={[5, 8, 5]} intensity={2.5} />
        <pointLight position={[0, -2, 0]} color={accentColor} intensity={4} distance={12} />

        {/* Ambient 3D Particle Atmosphere (Podium Stage Removed) */}
        <AmbientAtmosphere accentColor={accentColor} />

        {/* Interactive Subtle Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 3}
          rotateSpeed={0.4}
        />
      </Canvas>
    </div>
  );
}