"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Octahedron, Box, Icosahedron } from "@react-three/drei";
import * as THREE from "three";

interface GeometricShapeProps {
  position: [number, number, number];
  scale?: number;
  rotationSpeed?: number;
  color?: string;
}

const createFloatingShape = (ShapeComponent: typeof Octahedron | typeof Box | typeof Icosahedron) => {
  return function FloatingShape({ position, scale = 1, rotationSpeed = 1, color = "#4338ca" }: GeometricShapeProps) {
    const mesh = useRef<THREE.Mesh>(null);
    const initialPosition = useRef(position);
    const time = useRef(Math.random() * 100);

    useFrame((state, delta) => {
      if (!mesh.current) return;
      
      time.current += delta;
      
      // Smooth rotation
      mesh.current.rotation.x += delta * 0.2 * rotationSpeed;
      mesh.current.rotation.y += delta * 0.3 * rotationSpeed;
      
      // Smooth floating movement
      mesh.current.position.y = initialPosition.current[1] + 
        Math.sin(time.current * 0.8) * 0.3;
      mesh.current.position.x = initialPosition.current[0] + 
        Math.cos(time.current * 0.5) * 0.2;
    });

    return (
      <ShapeComponent ref={mesh} position={position} scale={scale} args={[1, 0]}>
        <meshStandardMaterial 
          color={color} 
          wireframe 
          transparent
          opacity={0.8}
          side={THREE.DoubleSide}
        />
      </ShapeComponent>
    );
  };
};

export const FloatingOctahedron = createFloatingShape(Octahedron);
export const FloatingCube = createFloatingShape(Box);
export const FloatingIcosahedron = createFloatingShape(Icosahedron);