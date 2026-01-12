"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    Truck,
    ClipboardList,
    Package,
    Wrench,
    ArrowUpRight,
    Layers
} from "lucide-react";

const services = [
    {
        id: "01",
        title: "Custom Builds",
        description:
            "From concept to completion, we engineer fully custom mobile kitchens tailored to specific culinary workflows.",
        icon: Truck,
        href: "/custom-builds",
    },
    {
        id: "02",
        title: "Design Services",
        description:
            "Architectural layout optimization. We redesign existing interiors to maximize ergonomic efficiency and output.",
        icon: Layers,
        href: "/services",
    },
    {
        id: "03",
        title: "Parts & Equipment",
        description:
            "Direct access to our fabrication inventory. OEM components and specialty stainless items for any rig.",
        icon: Package,
        href: "/parts",
    },
    {
        id: "04",
        title: "Repair & Service",
        description:
            "Minimize downtime with rapid-response maintenance. Generator tuning, electrical diagnostics, and fabrication repairs.",
        icon: Wrench,
        href: "/services",
    },
];

export default function Services() {
    return (
        <section className="w-full bg-[#050505] py-24 lg:py-32 border-t border-neutral-900">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16 md:flex md:justify-between md:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 bg-[#9B3A4E] rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                                Operational Capabilities
                            </span>
                        </div>
                        <h2 className="text-3xl font-light text-white sm:text-4xl">
                            Specialized <span className="font-bold text-white">Services</span>
                        </h2>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 md:mt-0 text-neutral-500 text-sm max-w-xs text-left md:text-right"
                    >
                        Comprehensive engineering support for the lifecycle of your mobile business.
                    </motion.p>
                </div>

                {/* Service Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link
                                href={service.href}
                                className="group relative flex h-full flex-col bg-[#0a0a0a] border border-neutral-800 p-8 transition-all duration-300 hover:border-[#9B3A4E]/30 overflow-hidden"
                            >
                                {/* Top Active Line */}
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#9B3A4E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                {/* Hover Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#9B3A4E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative z-10 flex justify-between items-start mb-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded bg-neutral-900 border border-neutral-800 text-neutral-400 transition-colors group-hover:text-[#9B3A4E] group-hover:border-[#9B3A4E]/30">
                                        <service.icon className="h-5 w-5" />
                                    </div>
                                    <span className="text-xs font-mono text-neutral-600 group-hover:text-neutral-400 transition-colors">
                                        {service.id}
                                    </span>
                                </div>

                                <div className="relative z-10 flex-1">
                                    <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#9B3A4E] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-neutral-400 leading-relaxed font-light">
                                        {service.description}
                                    </p>
                                </div>

                                <div className="relative z-10 mt-6 pt-6 border-t border-neutral-800/50 flex items-center justify-between">
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-white transition-colors">
                                        View Details
                                    </span>
                                    <ArrowUpRight className="h-4 w-4 text-neutral-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9B3A4E]" />
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}