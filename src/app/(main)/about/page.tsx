"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Users,
    Cpu,
    Scale,
    ArrowUpRight,
    Trophy,
    Truck,
    MapPin,
    History,
    ChevronRight
} from "lucide-react";

// Enhanced Data Structures for the new Look
const values = [
    {
        title: "Quality Assurance",
        description: "Zero compromise on materials. We engineer for longevity.",
        icon: ShieldCheck,
    },
    {
        title: "Client Focus",
        description: "Your operational success is the primary design parameter.",
        icon: Users,
    },
    {
        title: "Technical Innovation",
        description: "Continuous evolution of design and manufacturing processes.",
        icon: Cpu,
    },
    {
        title: "Absolute Integrity",
        description: "Transparent communication and fair valuation standards.",
        icon: Scale,
    },
];

const stats = [
    { value: "25+", label: "Years Operational", icon: History },
    { value: "500+", label: "Units Deployed", icon: Truck },
    { value: "50+", label: "Territories Active", icon: MapPin },
    { value: "98%", label: "Client Retention", icon: Trophy },
];

const teams = [
    {
        name: "Design Bureau",
        role: "Architecture & Planning",
        description: "Transforming culinary concepts into mechanical schematics.",
    },
    {
        name: "Fabrication Unit",
        role: "Assembly & Engineering",
        description: "Master craftspeople executing precision builds.",
    },
    {
        name: "Support Division",
        role: "Maintenance & Logistics",
        description: "Dedicated specialists ensuring operational uptime.",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#0a0d14] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-40 pb-32 overflow-hidden border-b border-neutral-900">
                {/* Ambient Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#9B3A4E]/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
                            <span className="w-1.5 h-1.5 bg-[#9B3A4E] rounded-full animate-pulse"></span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Est. 1999 // United States</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                            Building Dreams <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                On Wheels
                            </span>
                        </h1>

                        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed border-l-2 border-[#9B3A4E]/30 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                            Since the turn of the millennium, we have been the premier architect of mobile culinary solutions, blending heritage craftsmanship with modern engineering.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- ORIGIN STORY (Split Layout) --- */}
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">

                        {/* Image Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative group"
                        >
                            {/* Decorative Frame */}
                            <div className="absolute -inset-4 border border-neutral-800 rounded-xl opacity-50 group-hover:border-[#9B3A4E]/30 transition-colors duration-500" />
                            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-neutral-900">
                                <Image
                                    src="/hero.webp" // Ensure this path is valid or use a placeholder
                                    alt="Fabrication Facility"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                {/* Overlay Stats */}
                                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                                    <div>
                                        <p className="text-[10px] uppercase tracking-widest text-[#9B3A4E] font-bold">Facility Code</p>
                                        <p className="text-white font-mono text-sm">SEC-01 // FLOOR A</p>
                                    </div>
                                    <div className="h-8 w-8 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-md">
                                        <ArrowUpRight className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Text Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <h2 className="text-3xl font-light text-white mb-8">
                                The <span className="font-bold text-[#9B3A4E]">Origin</span>
                            </h2>
                            <div className="space-y-6 text-neutral-400 font-light leading-relaxed">
                                <p>
                                    Founded in 1999, our mission was singular: to engineer the finest mobile kitchens on the market. What began as a boutique operation has evolved into a full-scale manufacturing facility.
                                </p>
                                <p>
                                    We view every chassis not as a vehicle, but as a platform for culinary expression. Over two decades, we have refined our fabrication processes, integrating aerospace-grade materials with commercial kitchen ergonomics.
                                </p>
                                <blockquote className="border-l-2 border-[#9B3A4E] pl-4 py-2 my-8 text-white text-lg italic bg-gradient-to-r from-[#9B3A4E]/10 to-transparent">
                                    "We don't just build trucks. We forge businesses."
                                </blockquote>
                                <p>
                                    Today, our fleet spans 50 states, powering everything from startup concepts to major franchise expansions.
                                </p>
                            </div>

                            <div className="mt-10 pt-8 border-t border-neutral-800 flex gap-8">
                                <div>
                                    <p className="text-2xl text-white font-mono">1999</p>
                                    <p className="text-xs text-neutral-500 uppercase tracking-widest">Established</p>
                                </div>
                                <div>
                                    <p className="text-2xl text-white font-mono">ISO</p>
                                    <p className="text-xs text-neutral-500 uppercase tracking-widest">Certified</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- VALUES (Grid System) --- */}
            <section className="bg-[#080808] py-24 border-y border-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                        <div>
                            <span className="text-[#9B3A4E] font-mono text-xs mb-2 block">02 // PROTOCOLS</span>
                            <h2 className="text-3xl font-bold text-white">Core Principles</h2>
                        </div>
                        <p className="text-neutral-500 max-w-md text-sm text-right md:text-left">
                            The operating standards that govern every weld, wire, and rivet in our facility.
                        </p>
                    </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, idx) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="group p-8 rounded-xl bg-neutral-900/20 border border-neutral-800 hover:border-[#9B3A4E]/50 hover:bg-neutral-900/40 transition-all duration-300 relative overflow-hidden"
                            >
                                <div className="absolute top-0 left-0 w-full h-0.5 bg-[#9B3A4E] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-neutral-800 text-neutral-400 group-hover:text-[#9B3A4E] group-hover:bg-[#9B3A4E]/10 transition-colors">
                                    <value.icon className="w-6 h-6" />
                                </div>

                                <h3 className="text-lg font-bold text-white mb-3 group-hover:translate-x-1 transition-transform">
                                    {value.title}
                                </h3>
                                <p className="text-sm text-neutral-500 leading-relaxed group-hover:text-neutral-400 transition-colors">
                                    {value.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TELEMETRY (Stats) --- */}
            <section className="py-24 relative overflow-hidden">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />

                <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                className="flex flex-col items-center justify-center p-8 border border-neutral-800 bg-[#11151d]/80 backdrop-blur-sm rounded-2xl text-center hover:border-neutral-700 transition-colors"
                            >
                                <stat.icon className="w-6 h-6 text-[#9B3A4E] mb-4 opacity-50" />
                                <span className="text-4xl sm:text-5xl font-mono font-bold text-white tracking-tighter mb-2">
                                    {stat.value}
                                </span>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 font-semibold">
                                    {stat.label}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- TEAM (Personnel) --- */}
            <section className="bg-neutral-900/30 py-24 border-t border-neutral-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-[#9B3A4E] font-mono text-xs mb-2 block">03 // PERSONNEL</span>
                        <h2 className="text-3xl font-bold text-white">Engineering Corps</h2>
                        <p className="text-neutral-500 mt-4 max-w-2xl mx-auto">
                            The specialized units dedicated to the execution of your project.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        {teams.map((team, index) => (
                            <motion.div
                                key={team.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group bg-[#11151d] border border-neutral-800 rounded-xl overflow-hidden hover:border-[#9B3A4E]/30 transition-all duration-300"
                            >
                                <div className="h-2 bg-[#9B3A4E] w-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="h-12 w-12 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-600">
                                            {/* Placeholder for team icon/avatar */}
                                            <span className="font-mono text-xs">{team.name.charAt(0)}</span>
                                        </div>
                                        <span className="text-[10px] bg-neutral-900 text-neutral-400 px-2 py-1 rounded border border-neutral-800 uppercase tracking-wider">
                                            Active
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-1">
                                        {team.name}
                                    </h3>
                                    <p className="text-xs text-[#9B3A4E] font-mono mb-4 uppercase tracking-widest">
                                        {team.role}
                                    </p>
                                    <p className="text-sm text-neutral-500 font-light leading-relaxed group-hover:text-neutral-300 transition-colors">
                                        {team.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-32 bg-[#0a0d14] overflow-hidden border-t border-neutral-900">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-4xl font-light text-white mb-8">
                        Ready to <span className="text-[#9B3A4E] font-semibold">Deploy?</span>
                    </h2>
                    <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
                        Your vision requires precision engineering. Let's begin the consultation phase.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/quote"
                            className="group relative px-8 py-4 bg-[#9B3A4E] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-[#7a2e3d]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Initiate Build Quote <ChevronRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-transparent border border-neutral-800 text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors"
                        >
                            Contact HQ
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}