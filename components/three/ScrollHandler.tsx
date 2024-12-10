"use client";

import { useScroll } from "framer-motion";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export function useScrollAnimation(group: React.RefObject<THREE.Group>) {
  const { scrollYProgress } = useScroll();
  const initialRotation = useRef({ x: 0, y: 0 });
  const lastScroll = useRef(0);
  const smoothScroll = useRef(0);

  useFrame((state, delta) => {
    if (!group.current) return;
    
    const scroll = scrollYProgress.get();
    // Smooth scroll value
    smoothScroll.current += (scroll - smoothScroll.current) * (delta * 2);
    
    // Smooth rotation based on scroll
    group.current.rotation.x = smoothScroll.current * Math.PI * 0.25 + 
      Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
    group.current.rotation.y = smoothScroll.current * Math.PI * 0.5 + 
      Math.cos(state.clock.getElapsedTime() * 0.5) * 0.05;
    
    // Smoother parallax effect
    const targetZ = smoothScroll.current * -8;
    const targetY = smoothScroll.current * -4;
    group.current.position.z += (targetZ - group.current.position.z) * (delta * 2);
    group.current.position.y += (targetY - group.current.position.y) * (delta * 2);
    
    // Smoother scale effect
    const targetScale = 1 + smoothScroll.current * 0.2;
    group.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), delta * 2);
    
    lastScroll.current = scroll;
  });
}