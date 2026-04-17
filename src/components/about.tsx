"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, Activity, MapPin } from "lucide-react";

const features = [
    "Workflow Optimization Protocols",
    "Health Code Compliance Guarantee",
    "Military-Grade Chassis Integration",
    "End-to-End Project Engineering",
];

export default function About() {
    return (
        <section className="w-full bg-[#0a0d14] py-24 lg:py-32 border-t border-neutral-900 relative overflow-hidden">
            {/* Background Texture */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10">
                <div className="grid gap-16 lg:grid-cols-2 lg:gap-24 items-center">

                    {/* Visual Asset (Left) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative group"
                    >
                        {/* Technical Frame */}
                        <div className="absolute -inset-4 border border-neutral-800 rounded-xl opacity-50 group-hover:border-[#9B3A4E]/30 transition-colors duration-500" />

                        {/* Main Image Container */}
                        <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-[#11151d] border border-neutral-800">
                            <Image
                                src="/hero.webp"
                                alt="Manufacturing Facility"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                            />

                            {/* Dark Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                            {/* HUD Overlays */}
                            <div className="absolute top-4 left-4 flex items-center gap-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest bg-black/50 px-2 py-1 rounded backdrop-blur-md border border-white/10">
                                    Facility Online
                                </span>
                            </div>

                            <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end border-t border-white/10 pt-4">
                                <div>
                                    <div className="flex items-center gap-2 text-[#9B3A4E] mb-1">
                                        <MapPin className="w-3 h-3" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest">Sector 7</span>
                                    </div>
                                    <p className="text-white font-mono text-xs">USA // EST. 1999</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] text-neutral-400 uppercase tracking-widest mb-1">Efficiency</p>
                                    <div className="flex items-center gap-2 justify-end text-white font-mono text-xs">
                                        <Activity className="w-3 h-3 text-[#9B3A4E]" />
                                        98.4%
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content (Right) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-2 mb-6">
                            <span className="w-8 h-[1px] bg-[#9B3A4E]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                                Corporate Profile
                            </span>
                        </div>

                        <h2 className="text-3xl font-light text-white sm:text-4xl lg:text-5xl mb-6">
                            Architects of <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                Mobile Culinary
                            </span>
                        </h2>

                        <p className="text-neutral-400 text-lg leading-relaxed font-light mb-8">
                            Since 1999, we've bridged the gap between heavy industry and culinary art. Our team of expert fabricators and engineers treat every chassis as a mission-critical deployment.
                        </p>

                        <div className="space-y-4 mb-10">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                                    className="flex items-center gap-4 p-4 rounded-lg border border-neutral-800 bg-[#11151d] hover:border-[#9B3A4E]/30 transition-colors group"
                                >
                                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-neutral-900 border border-neutral-700 text-[#9B3A4E] group-hover:bg-[#9B3A4E] group-hover:text-white group-hover:border-[#9B3A4E] transition-all">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span className="text-sm font-medium text-neutral-300 group-hover:text-white transition-colors">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        <div>
                            <Link
                                href="/about"
                                className="group inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#9B3A4E] hover:text-white transition-colors"
                            >
                                Access Full Dossier
                                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}