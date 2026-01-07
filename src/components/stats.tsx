"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "85+", label: "Projects Completed" },
  { value: "50+", label: "Expert Team Members" },
  { value: "15+", label: "Years Experience" },
  { value: "140+", label: "Happy Clients" },
  { value: "600k+", label: "Sq Ft Fabricated" },
];

export default function Stats() {
  return (
    <section className="w-full bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building Success on a Foundation of Trust
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl font-bold text-[var(--color-primary)] lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
