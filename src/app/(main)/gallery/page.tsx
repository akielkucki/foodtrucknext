'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import { ArrowRight, Aperture, Grid3X3, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { motion } from "framer-motion";

export default function GalleryPage() {
    return (
        <div className="min-h-screen bg-[#0a0d14] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-32 pb-24 overflow-hidden border-b border-neutral-900">
                {/* Background Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#9B3A4E]/20 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
                            <Aperture className="w-3 h-3 text-[#9B3A4E]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Visual Database</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                            Fabrication <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                Archive
                            </span>
                        </h1>

                        <p className="mt-6 max-w-2xl mx-auto text-lg text-neutral-400 font-light leading-relaxed">
                            A curated collection of our engineering feats. From complete chassis overhauls to precision stainless fabrication.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- FILTER CONTROL BAR (Visual) --- */}
            <section className="sticky top-20 z-40 w-full border-b border-neutral-900 bg-[#0a0d14]/80 backdrop-blur-xl">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                        <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
                            <Grid3X3 className="w-4 h-4" />
                            <span>VIEW_MODE: GRID_LG</span>
                        </div>

                        {/* Mock Filter Buttons - Connect these to your GalleryGrid logic if applicable */}
                        <div className="flex p-1 bg-neutral-900 border border-neutral-800 rounded-lg">
                            {['All Units', 'Interiors', 'Exteriors', 'Components'].map((filter, i) => (
                                <button
                                    key={filter}
                                    className={`px-4 py-1.5 text-xs font-medium rounded-md transition-all ${
                                        i === 0
                                            ? 'bg-[#9B3A4E] text-white shadow-lg'
                                            : 'text-neutral-500 hover:text-white hover:bg-neutral-800'
                                    }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center gap-2 text-xs font-mono text-neutral-500 hover:text-white cursor-pointer transition-colors">
                            <SlidersHorizontal className="w-4 h-4" />
                            <span>ADVANCED_FILTER</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- MAIN GALLERY GRID --- */}
            <section className="relative z-20 w-full px-4 py-12 sm:px-6 lg:px-8 min-h-[60vh]">
                <div className="mx-auto max-w-[1920px]">
                    {/* Wrapping the grid in a motion div for entrance effect. 
                       Assuming GalleryGrid handles its own internal layout.
                    */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <GalleryGrid />
                    </motion.div>
                </div>
            </section>

            {/* --- CTA SECTION --- */}
            <section className="relative py-32 bg-[#0a0d14] overflow-hidden border-t border-neutral-900">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-4xl font-light text-white mb-8">
                        Inspired by the <span className="text-[#9B3A4E] font-semibold">Builds?</span>
                    </h2>
                    <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
                        Whether you require a specific component or a full custom installation, our engineering team is ready to execute.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/quote"
                            className="group relative px-8 py-4 bg-[#9B3A4E] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-[#7a2e3d]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Start Your Build <ArrowRight className="w-4 h-4" />
                            </span>
                        </Link>
                        <Link
                            href="/contact"
                            className="group px-8 py-4 bg-transparent border border-neutral-800 text-neutral-400 text-sm font-bold uppercase tracking-widest hover:text-white hover:border-white transition-colors"
                        >
                            <span className="flex items-center gap-2">
                                Contact Sales <ArrowUpRight className="w-4 h-4 opacity-50 group-hover:opacity-100" />
                            </span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}