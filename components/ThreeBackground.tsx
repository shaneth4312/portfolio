"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, Suspense } from "react";
import * as THREE from "three";
import { FloatingOctahedron, FloatingCube, FloatingIcosahedron } from "./three/GeometricShapes";
import { useScrollAnimation } from "./three/ScrollHandler";
import { AdaptiveDpr, AdaptiveEvents, Preload } from "@react-three/drei";

function Scene() {
  const groupRef = useRef<THREE.Group>(null);
  useScrollAnimation(groupRef);

  return (
    <group ref={groupRef}>
      {/* Left Side */}
      <FloatingOctahedron position={[-8, 2, -2]} scale={2} rotationSpeed={0.8} />
      <FloatingCube position={[-6, -3, -4]} scale={1.5} rotationSpeed={1.2} />
      <FloatingIcosahedron position={[-4, 4, -3]} scale={1.8} rotationSpeed={1} />
      
      {/* Center */}
      <FloatingCube position={[0, 0, -5]} scale={2.2} rotationSpeed={0.9} color="#a5b4fc" />
      <FloatingOctahedron position={[0, -4, -3]} scale={1.7} rotationSpeed={1.1} color="#818cf8" />
      <FloatingIcosahedron position={[0, 5, -4]} scale={1.9} rotationSpeed={1.3} color="#6366f1" />
      
      {/* Right Side */}
      <FloatingOctahedron position={[8, 3, -2]} scale={2} rotationSpeed={0.7} />
      <FloatingCube position={[6, -2, -3]} scale={1.5} rotationSpeed={1.4} />
      <FloatingIcosahedron position={[4, 1, -4]} scale={1.8} rotationSpeed={1.2} />
      
      {/* Additional Background Elements */}
      <FloatingCube position={[-10, -5, -6]} scale={1.2} rotationSpeed={0.6} color="#c7d2fe" />
      <FloatingIcosahedron position={[10, -4, -6]} scale={1.2} rotationSpeed={0.8} color="#c7d2fe" />
    </group>
  );
}

export default function ThreeBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        dpr={[1, 2]}
        camera={{ 
          position: [0, 0, 15], 
          fov: 75,
          near: 0.1,
          far: 1000
        }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} />
          <Scene />
          <Preload all />
          <AdaptiveDpr pixelated />
          <AdaptiveEvents />
        </Suspense>
      </Canvas>
    </div>
  );
}