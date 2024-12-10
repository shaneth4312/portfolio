"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden py-20">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-xl font-semibold text-primary mb-2">Hi, I'm Sarah Parker 👋</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-600">
              Full Stack Developer
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
              I craft exceptional digital experiences with modern technologies. 
              Specializing in React, Node.js, and cloud architecture with 5+ years 
              of experience building scalable applications.
            </p>
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="gap-2">
                View Projects <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline">
                Download CV
              </Button>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Github className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-600/20 rounded-3xl -rotate-6"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-indigo-600/20 rounded-3xl rotate-6"></div>
              <div className="relative rounded-2xl overflow-hidden border border-border/50 bg-card">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=60"
                  alt="Sarah Parker"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border border-border/50 p-4 rounded-xl shadow-lg"
            >
              <div className="flex gap-4 items-center">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <p className="text-sm font-medium">Available for new projects</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}