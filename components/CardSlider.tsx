"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

const cards = [
  {
    title: "Digital Transformation",
    description: "Modernize your business with cutting-edge technology solutions.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Cloud Solutions",
    description: "Scale your infrastructure with secure and reliable cloud services.",
    image: "https://images.unsplash.com/photo-1484417894907-623942c8ee29?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "AI Integration",
    description: "Leverage artificial intelligence to automate and optimize processes.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
  },
  {
    title: "Information Achitecture",
    description: "Leverage artificial intelligence to automate and optimize processes.",
    image: "https://images.unsplash.com/photo-1552582305-6b778426ab60?w=800&auto=format&fit=crop&q=60",
  },
];

export default function CardSlider() {
  return (
    <section className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-muted-foreground">Discover how we can help transform your business</p>
        </motion.div>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {cards.map((card, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full">
                  <CardHeader>
                    <div className="h-48 rounded-t-lg overflow-hidden mb-4">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle>{card.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{card.description}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}