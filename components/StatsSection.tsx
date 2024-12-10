"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const stats = [
  { value: 250, label: "Clients Worldwide", suffix: "+" },
  { value: 95, label: "Success Rate", suffix: "%" },
  { value: 10, label: "Years Experience", suffix: "+" },
  { value: 500, label: "Projects Completed", suffix: "+" },
];

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.5, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {inView && (
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    suffix={stat.suffix}
                  />
                )}
              </div>
              <div className="text-lg text-primary-foreground/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}