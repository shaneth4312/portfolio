"use client";

import { useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.onChange((latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : ""
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">SP</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Services</Button>
            <Button variant="ghost">Projects</Button>
            <Button variant="ghost">Contact</Button>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Button>Contact Me</Button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}