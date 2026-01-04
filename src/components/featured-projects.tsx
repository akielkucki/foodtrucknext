'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const projects = [
  {
    title: "20ft Food Truck",
    image: "/project-1.jpg",
    description: "This 20ft food truck is built for high-volume performance without compromise. Each unit is manufactured using precision-calibrated machinery and repeatable production processes that ensure exceptional build quality from frame to finish. Consistent welds, exact measurements, and carefully controlled assembly deliver a durable, professional-grade workspace designed to perform reliably in demanding environments. This truck reflects our commitment to precision efficiency, and long-term value."
  },
  {
    title: "6x12 Food Trailer",
    image: "/project-2.jpg",
    description: "This 6x12 food trailer offers compact versatility with the same uncompromising standards as our larger builds. Using advanced fabrication equipment and precision tooling, every trailer is constructed with exacting accuracy and consistent quality control. The result is a clean, durable, and highly functional unit that maximizes space while maintaining structural integrity and professional craftsmanship. Small in size, but built with full-scale precision."
  }
];

export default function FeaturedProjects() {
  return (
    <section className="w-full bg-slate-50 px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Projects
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Precision-engineered mobile kitchens built for performance
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-100"
            >
              <div className="aspect-[16/10] w-full relative overflow-hidden bg-slate-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-8">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">
                  {project.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
