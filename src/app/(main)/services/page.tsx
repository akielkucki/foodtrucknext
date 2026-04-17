"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Flame,
    Coffee,
    Pizza,
    IceCream,
    Beef,
    UtensilsCrossed,
    ChevronRight,
    Settings,
    LayoutTemplate,
    Power,
} from "lucide-react";

// Truck product catalogue — each section on this page represents a different
// type of unit we build for clients.
const services = [
    {
        id: "bbq-smoker",
        title: "BBQ & Smoker Trucks",
        icon: Flame,
        shortDesc: "Offset smokers & grills",
        fullDesc:
            "Purpose-built smokehouse rigs with reinforced chassis to carry offset smokers, insulated fireboxes, and high-capacity grills. Engineered for low-and-slow output and all-day event service.",
        features: [
            "Insulated offset smoker cabinets",
            "Heat-shielded serving windows",
            "NSF-certified prep surfaces",
            "Extended-run propane & wood storage",
        ],
        diagramTag: ""
    },
    {
        id: "coffee-espresso",
        title: "Coffee & Espresso Trailers",
        icon: Coffee,
        shortDesc: "High-volume mobile cafes",
        fullDesc:
            "Compact, high-efficiency coffee units built around commercial-grade espresso platforms. Lithium power systems and custom filtration keep pulls consistent from morning rush through afternoon events.",
        features: [
            "Dual-group espresso plumbing",
            "On-board water filtration & softening",
            "Lithium battery + inverter systems",
            "Cold-brew & nitro keg integration",
        ],
        diagramTag: ""
    },
    {
        id: "taco-latin",
        title: "Taco & Latin Trucks",
        icon: UtensilsCrossed,
        shortDesc: "Plancha, fryer & steam line",
        fullDesc:
            "Full stainless commercial kitchens built around high-output plancha stations, dedicated fryer banks, and speed-rail cold lines. Designed for the tightest service windows in the business.",
        features: [
            "36\" plancha + char-broiler combos",
            "Dedicated salsa & crema cold wells",
            "High-CFM hood with fire suppression",
            "Custom signage & neon integration",
        ],
        diagramTag: ""
    },
    {
        id: "pizza",
        title: "Wood-Fired Pizza Trucks",
        icon: Pizza,
        shortDesc: "900°F deck ovens on wheels",
        fullDesc:
            "Reinforced-floor builds engineered to carry stone-deck and wood-fired ovens. Ventilation, heat-shielding, and weight distribution are all tuned to keep the oven hot and the crew safe.",
        features: [
            "Wood-fired or gas deck ovens",
            "Structural floor reinforcement",
            "Dedicated dough retarder & prep",
            "High-temp exhaust & heat shielding",
        ],
        diagramTag: ""
    },
    {
        id: "dessert-ice-cream",
        title: "Dessert & Ice Cream Carts",
        icon: IceCream,
        shortDesc: "Freezer-forward serving units",
        fullDesc:
            "Vintage aesthetics meeting modern refrigeration. Soft-serve machines, dipping cabinets, and custom pastel wraps — built to stop traffic and hold -10°F on the hottest day of the year.",
        features: [
            "Soft-serve & dipping cabinet combos",
            "Oversized condenser for summer load",
            "Custom wraps & period-correct details",
            "Quiet inverter power for parks & events",
        ],
        diagramTag: ""
    },
    {
        id: "burger-grill",
        title: "Burger & Grill Trucks",
        icon: Beef,
        shortDesc: "Flat-top & fryer workflows",
        fullDesc:
            "High-throughput burger rigs built around dual flat-tops, twin-basket fryers, and speed-rail dressing stations. Every inch of counter is laid out around the fastest path from patty to window.",
        features: [
            "Dual 36\" flat-top griddles",
            "Twin-basket fryer bank",
            "Refrigerated make-table & speed rail",
            "Point-of-sale & order screen mounts",
        ],
        diagramTag: ""
    },
];

export default function ServicesPage() {
    const [activeSection, setActiveSection] = useState(services[0].id);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 200;

            for (const service of services) {
                const element = document.getElementById(service.id);
                if (
                    element &&
                    element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition
                ) {
                    setActiveSection(service.id);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <div className="min-h-screen bg-[#0a0d14] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-40 pb-24 overflow-hidden border-b border-neutral-900">
                {/* Atmosphere */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-[#9B3A4E]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
                            <Settings className="w-3 h-3 text-[#9B3A4E]" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Engineering Division</span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white mb-6">
                            Our Truck <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                Catalog
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            Every section below is a different build we ship — pick the style that fits your concept, or tell us what you're serving and we'll engineer around it.
                        </p>

                        {/* Headline stat */}
                        <div className="mt-12 flex items-center justify-center gap-8 text-left">
                            <div className="flex items-baseline gap-3">
                                <span className="text-5xl md:text-6xl font-black font-mono text-white tracking-tighter">
                                    1,500+
                                </span>
                                <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-[#9B3A4E] leading-tight max-w-[8rem]">
                                    Units<br />Deployed
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN INTERFACE --- */}
            <div className="relative py-16 lg:py-24 z-10">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">

                        {/* LEFT: CONTROL PANEL (Sticky Nav) */}
                        <div className="lg:col-span-4 lg:block">
                            <div className="sticky top-32 space-y-8">

                                {/* Desktop Menu */}
                                <nav className="hidden lg:block bg-[#11151d] border border-neutral-800 rounded-xl p-2 shadow-2xl">
                                    <div className="px-4 py-3 border-b border-neutral-800 mb-2">
                                        <h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em]">
                                            System Directory
                                        </h3>
                                    </div>
                                    <div className="space-y-1">
                                        {services.map((service) => (
                                            <button
                                                key={service.id}
                                                onClick={() => scrollToSection(service.id)}
                                                className={`group flex w-full items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                                                    activeSection === service.id
                                                        ? "bg-[#9B3A4E]/10 text-white border border-[#9B3A4E]/30"
                                                        : "text-neutral-500 hover:bg-neutral-900 hover:text-white border border-transparent"
                                                }`}
                                            >
                                                <span className="flex items-center gap-3">
                                                    <service.icon className={`w-4 h-4 ${activeSection === service.id ? "text-[#9B3A4E]" : "text-neutral-600 group-hover:text-white"}`} />
                                                    {service.title}
                                                </span>
                                                {activeSection === service.id && (
                                                    <motion.div
                                                        layoutId="activeGlow"
                                                        className="h-1.5 w-1.5 rounded-full bg-[#9B3A4E] shadow-[0_0_10px_#9B3A4E]"
                                                    />
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </nav>

                                {/* Sidebar Contact Card */}
                                <div className="rounded-xl bg-gradient-to-br from-neutral-900 to-[#11151d] border border-neutral-800 p-6 relative overflow-hidden group hidden lg:block">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <Power className="w-24 h-24 text-white" />
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2 relative z-10">
                                        Custom Protocols?
                                    </h3>
                                    <p className="text-xs text-neutral-400 mb-6 relative z-10 leading-relaxed">
                                        Our engineering team is ready to tackle unique challenges outside standard parameters.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="relative z-10 flex w-full items-center justify-center rounded bg-[#9B3A4E] px-4 py-3 text-xs font-bold uppercase tracking-widest text-white transition-all hover:bg-[#7a2e3d]"
                                    >
                                        Deploy Engineers
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Menu (Sticky Horizontal) */}
                            <div className="lg:hidden -mx-6 px-6 pb-4 overflow-x-auto flex gap-3 no-scrollbar sticky top-[64px] z-50 bg-[#0a0d14]/95 backdrop-blur-xl border-b border-neutral-800 pt-4">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => scrollToSection(service.id)}
                                        className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-colors border ${
                                            activeSection === service.id
                                                ? "bg-[#9B3A4E] text-white border-[#9B3A4E]"
                                                : "bg-neutral-900/50 border-neutral-800 text-neutral-400"
                                        }`}
                                    >
                                        {service.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* RIGHT: CONTENT STREAM */}
                        <div className="lg:col-span-8 space-y-20">
                            {services.map((service, index) => (
                                <section
                                    id={service.id}
                                    key={service.id}
                                    className="scroll-mt-32"
                                >
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{ duration: 0.5 }}
                                        className="relative rounded-2xl bg-[#11151d] p-8 sm:p-10 border border-neutral-800 overflow-hidden group hover:border-[#9B3A4E]/30 transition-colors duration-500"
                                    >
                                        {/* Ambient Glow */}
                                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#9B3A4E]/5 blur-[80px] rounded-full pointer-events-none" />

                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8 relative z-10">
                                            <div>
                                                <div className="flex items-center gap-3 text-[#9B3A4E] mb-3">
                                                    <service.icon className="w-5 h-5" />
                                                    <span className="text-[10px] font-mono uppercase tracking-widest bg-[#9B3A4E]/10 px-2 py-1 rounded">
                                                        {service.shortDesc}
                                                    </span>
                                                </div>
                                                <h2 className="text-3xl font-light text-white">
                                                    {service.title}
                                                </h2>
                                            </div>
                                            <span className="text-6xl font-mono font-bold text-neutral-900 select-none hidden sm:block">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        {/* Description */}
                                        <p className="text-neutral-400 leading-relaxed mb-8 font-light relative z-10">
                                            {service.fullDesc}
                                        </p>

                                        {/* Diagram Insertion Point */}
                                        <div className="mb-8 p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg flex items-center justify-center min-h-[160px] relative overflow-hidden">
                                            {/* Visual Placeholder for Diagram */}
                                            <div className="text-center">
                                                <p className="text-xs text-neutral-500 font-mono uppercase tracking-widest mb-2">Technical Schematic</p>
                                                {/* This represents where the actual image would load */}
                                                <div className="opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                                                    {service.diagramTag}
                                                </div>
                                            </div>
                                            {/* Decorative Grid Overlay */}
                                            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
                                        </div>

                                        {/* Features Grid */}
                                        <div className="bg-neutral-900/50 rounded-xl p-6 sm:p-8 border border-neutral-800/50 relative z-10">
                                            <h4 className="text-xs font-bold text-white uppercase tracking-[0.2em] mb-6 flex items-center gap-2">
                                                <LayoutTemplate className="w-4 h-4 text-[#9B3A4E]" />
                                                Operational Capabilities
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-start gap-3 group/item">
                                                        <CheckCircle2 className="h-4 w-4 text-neutral-600 group-hover/item:text-[#9B3A4E] transition-colors mt-0.5" />
                                                        <span className="text-sm text-neutral-400 group-hover/item:text-neutral-200 transition-colors">
                                                            {feature}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                </section>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* --- CTA SECTION --- */}
            <section className="relative py-32 bg-[#0a0d14] overflow-hidden border-t border-neutral-900">
                <div className="mx-auto max-w-4xl px-6 text-center relative z-10">
                    <h2 className="text-4xl font-light text-white mb-8">
                        Ready to <span className="text-[#9B3A4E] font-semibold">Initiate?</span>
                    </h2>
                    <p className="text-neutral-400 mb-10 leading-relaxed max-w-xl mx-auto">
                        Whether you require a single component replacement or a fleet-wide fabrication, our team has the capacity to deliver.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <Link
                            href="/quote"
                            className="group relative px-8 py-4 bg-[#9B3A4E] text-white text-sm font-bold uppercase tracking-widest overflow-hidden transition-all hover:bg-[#7a2e3d]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Request Engineering Quote <ChevronRight className="w-4 h-4" />
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