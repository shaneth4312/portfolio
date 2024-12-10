"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Plane } from "@react-three/drei";
import * as THREE from "three";

function TrianglePlane() {
  const meshRef = useRef<THREE.Mesh>(null);
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Custom shader for the geometric pattern
  const shader = {
    vertexShader: `
      varying vec2 vUv;
      varying float vElevation;
      
      void main() {
        vUv = uv;
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;
      }
    `,
    fragmentShader: `
      uniform float uTime;
      varying vec2 vUv;
      
      void main() {
        float pattern = step(0.5, fract(vUv.x * 10.0 + sin(vUv.y * 10.0 + uTime * 0.5) * 0.2));
        pattern *= step(0.5, fract(vUv.y * 10.0 + cos(vUv.x * 10.0 + uTime * 0.5) * 0.2));
        
        vec3 color1 = vec3(0.1, 0.3, 0.8);
        vec3 color2 = vec3(0.2, 0.5, 0.9);
        vec3 finalColor = mix(color1, color2, pattern);
        
        gl_FragColor = vec4(finalColor, 0.5);
      }
    `,
  };

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <Plane args={[20, 20, 32, 32]} position={[0, 0, -5]}>
      <shaderMaterial
        ref={materialRef}
        vertexShader={shader.vertexShader}
        fragmentShader={shader.fragmentShader}
        uniforms={{
          uTime: { value: 0 },
        }}
        transparent
        side={THREE.DoubleSide}
      />
    </Plane>
  );
}

export default function LowPolyBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        gl={{ 
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <TrianglePlane />
      </Canvas>
    </div>
  );
}