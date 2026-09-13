"use client";

import { Suspense, useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Icosahedron, Float, Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function Sun() {
  const meshRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.12;
      meshRef.current.rotation.x += delta * 0.03;
    }
    if (innerRef.current) {
      innerRef.current.rotation.y -= delta * 0.2;
    }
    if (meshRef.current) {
      const t = state.clock.getElapsedTime();
      meshRef.current.position.y = Math.sin(t * 0.6) * 0.15;
    }
  });

  return (
    <group>
      <Icosahedron ref={meshRef} args={[1.6, 1]}>
        <meshStandardMaterial
          color="#F4B942"
          emissive="#B8562F"
          emissiveIntensity={0.6}
          flatShading
          roughness={0.35}
          metalness={0.1}
        />
      </Icosahedron>
      <Icosahedron ref={innerRef} args={[1.05, 0]}>
        <meshStandardMaterial
          color="#FCD9A6"
          emissive="#F4B942"
          emissiveIntensity={0.9}
          flatShading
          roughness={0.2}
        />
      </Icosahedron>
    </group>
  );
}

function Stardust() {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(280 * 3);
    for (let i = 0; i < 280; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 12;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 2;
    }
    return arr;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) ref.current.rotation.y += delta * 0.015;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F6F1E7"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

export default function SunScene() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.35} color="#4A3B6B" />
        <pointLight position={[3, 2, 4]} intensity={2.2} color="#F4B942" />
        <pointLight position={[-4, -2, -2]} intensity={0.8} color="#211A38" />
        <Suspense fallback={null}>
          <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.8}>
            <Sun />
          </Float>
          <Stardust />
        </Suspense>
      </Canvas>
    </div>
  );
}
