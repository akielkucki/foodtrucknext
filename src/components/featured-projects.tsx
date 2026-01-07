"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowRight, Flame, MapPin } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

// Mock data for demonstration - replace this with your import from "@/lib/utils"
// I added 'tags' and 'location' to make the UI richer.
const localProjects = [
    {
        title: "The Midnight Smoker",
        description: "A 24ft BBQ beast equipped with dual offset smokers and a porch serving window.",
        image: "/project1.jpg", // Replace with your image paths
        tags: ["BBQ & Grill", "24ft Trailer"],
        location: "Austin, TX"
    },
    {
        title: "Urban Espresso Lab",
        description: "Compact, high-efficiency coffee unit with custom filtration and lithium power systems.",
        image: "/project2.jpg",
        tags: ["Coffee", "Sprinter Van"],
        location: "Seattle, WA"
    },
    {
        title: "Neon Taco Revolution",
        description: "Full stainless commercial kitchen on wheels with custom neon signage integration.",
        image: "/project3.jpg",
        tags: ["Mexican", "Step Van"],
        location: "Los Angeles, CA"
    },
    {
        title: "Glacier Ice Cream",
        description: "Vintage aesthetics meeting modern refrigeration. Custom pastel wrap and serving hatch.",
        image: "/project4.jpg",
        tags: ["Dessert", "Vintage Restore"],
        location: "Miami, FL"
    }
];

export default function FeaturedProjects() {
    // Use your imported projects here, or fallback to localProjects
    const displayProjects = localProjects;

    return (
        <section className="relative w-full bg-slate-950 py-24 lg:py-32 overflow-hidden">

            {/* Background Texture/Grid (Optional) */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
            <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-slate-950 to-transparent pointer-events-none" />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Area */}
                <div className="mb-16 md:mb-24">
                    <SectionHeader
                        label="Portfolio"
                        title="Built for the Bold"
                        description="From vintage restorations to modern culinary warships, explore our latest custom fabrications."
                        dark
                    />
                </div>

                {/* Grid Layout */}
                <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
                    {displayProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-20 flex justify-center"
                >
                    <Link
                        href="/gallery"
                        className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-slate-100 px-8 py-4 text-sm font-bold uppercase tracking-widest text-slate-900 transition-all hover:bg-white hover:scale-105 active:scale-95"
                    >
                        <span>View Full Gallery</span>
                        <div className="relative h-4 w-4 overflow-hidden">
                            <div className="absolute flex flex-col transition-transform duration-300 group-hover:-translate-y-1/2">
                                <ArrowRight className="h-4 w-4" />
                                <ArrowRight className="h-4 w-4 text-red-600" />
                            </div>
                        </div>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

function ProjectCard({ project, index }: { project: any, index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
            className="group relative h-[500px] w-full cursor-pointer overflow-hidden rounded-3xl bg-slate-900 shadow-2xl shadow-black/50"
        >
            {/* Image Layer - Scales on Hover */}
            <div className="absolute inset-0 h-full w-full">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
            </div>

            {/* Gradient Overlay - Darkens on bottom for text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />

            {/* Top Tags - Slide down on hover */}
            <div className="absolute top-6 left-6 right-6 flex justify-between items-start translate-y-[-20px] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100 z-20">
                <div className="flex gap-2">
                    {project.tags?.map((tag: string) => (
                        <span key={tag} className="backdrop-blur-md bg-white/10 border border-white/20 px-3 py-1 rounded-full text-xs font-semibold text-white uppercase tracking-wider">
                            {tag}
                        </span>
                    ))}
                </div>
                {project.location && (
                    <div className="flex items-center gap-1 text-xs font-bold text-slate-300 uppercase tracking-wider backdrop-blur-md bg-black/20 px-3 py-1 rounded-full">
                        <MapPin className="w-3 h-3 text-red-500" />
                        {project.location}
                    </div>
                )}
            </div>

            {/* Content Layer - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8 transform transition-transform duration-500 group-hover:-translate-y-2">

                {/* Divider Line */}
                <div className="mb-4 h-0.5 w-12 bg-red-600 transition-all duration-500 group-hover:w-full" />

                <div className="flex items-end justify-between gap-4">
                    <div className="space-y-2">
                        <h3 className="text-2xl lg:text-3xl font-black text-white uppercase leading-none tracking-tight">
                            {project.title}
                        </h3>
                        <p className="text-slate-300 text-sm lg:text-base line-clamp-2 max-w-md">
                            {project.description}
                        </p>
                    </div>

                    {/* Circular Arrow Button */}
                    <div className="relative flex-shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm transition-all duration-500 group-hover:bg-white group-hover:text-black group-hover:rotate-45">
                            <ArrowUpRight className="h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}