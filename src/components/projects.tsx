"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const categories = ["All", "Custom Builds", "Renovations", "Conversions"];

const projects = [
  {
    id: 1,
    title: "Gourmet Taco Truck",
    category: "Custom Builds",
    image: "/hero.webp",
  },
  {
    id: 2,
    title: "Coffee Van Conversion",
    category: "Conversions",
    image: "/hero.webp",
  },
  {
    id: 3,
    title: "BBQ Smoker Trailer",
    category: "Custom Builds",
    image: "/hero.webp",
  },
  {
    id: 4,
    title: "Ice Cream Truck Refresh",
    category: "Renovations",
    image: "/hero.webp",
  },
  {
    id: 5,
    title: "Pizza Food Truck",
    category: "Custom Builds",
    image: "/hero.webp",
  },
  {
    id: 6,
    title: "Vintage Airstream Bar",
    category: "Conversions",
    image: "/hero.webp",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12"
        >
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-[var(--color-primary)]">
              Portfolio
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Our Projects
            </h2>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-slate-900 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="text-xs font-medium text-[var(--color-primary-light)] uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center text-sm font-semibold text-slate-900 hover:text-[var(--color-primary)] transition-colors"
          >
            View all projects
            <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
