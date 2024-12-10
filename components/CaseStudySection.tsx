"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const caseStudies = [
  {
    title: "Global Tech Enterprise",
    category: "Digital Transformation",
    description: "Revolutionized operations with AI-powered analytics, resulting in 40% efficiency increase.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60"
  },
  {
    title: "Healthcare Innovation",
    category: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure, improving patient care delivery by 60%.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=60"
  }
];

export default function CaseStudySection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Case Studies</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore how we've helped organizations achieve their digital transformation goals
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="overflow-hidden group cursor-pointer">
                <div className="h-64 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-muted-foreground mb-2">{study.category}</div>
                  <CardTitle className="flex items-center justify-between">
                    {study.title}
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{study.description}</p>
                  <Button variant="outline" size="sm">Read Case Study</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}