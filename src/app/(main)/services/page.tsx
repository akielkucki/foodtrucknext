"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    CheckCircle2,
    Hammer,
    Truck,
    Wrench,
    ClipboardList,
    ChevronRight,
    Settings,
    LayoutTemplate,
    Power,
    RefreshCcw
} from "lucide-react";

// Enhanced Service Data
const services = [
    {
        id: "custom-builds",
        title: "Custom Builds",
        icon: Truck,
        shortDesc: "Ground-up fabrication",
        fullDesc:
            "We don't just assemble trucks; we engineer mobile culinary environments. From chassis selection to final inspection, every inch is optimized for workflow and weight distribution.",
        features: [
            "3D CAD Design & Workflow Optimization",
            "Heavy-Duty Electrical & Plumbing Systems",
            "Custom Stainless Steel Fabrication",
            "Health Department Compliance Guarantee",
        ],
        diagramTag: ""
    },
    {
        id: "renovations",
        title: "Renovations",
        icon: RefreshCcw,
        shortDesc: "Modernize your fleet",
        fullDesc:
            "Breathe new life into aging units. We specialize in retrofitting older trucks with modern equipment, LED lighting, and ergonomic layout changes to increase output speed.",
        features: [
            "Kitchen Layout Re-engineering",
            "Equipment Upgrades & Swaps",
            "Exterior Wraps & Cosmetic Refreshes",
            "Generator & Power System Upgrades",
        ],
        diagramTag: ""
    },
    {
        id: "repairs",
        title: "Repairs & Maintenance",
        icon: Wrench,
        shortDesc: "Keep running smoothly",
        fullDesc:
            "Downtime is lost revenue. Our rapid-response team handles everything from broken refrigeration to generator failures, ensuring you get back to serving customers fast.",
        features: [
            "Emergency Equipment Repair",
            "Preventive Maintenance Plans",
            "Propane System Leak Testing",
            "Chassis & Engine Coordination",
        ],
        diagramTag: ""
    },
    {
        id: "consulting",
        title: "Consulting",
        icon: ClipboardList,
        shortDesc: "Business planning",
        fullDesc:
            "Avoid costly mistakes before you build. Our team provides expert guidance on permitting, menu-to-equipment matching, and operational logistics.",
        features: [
            "Business Plan Development",
            "Menu Optimization Consulting",
            "Health Permit Expediting",
            "Operational Workflow Analysis",
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
        <div className="min-h-screen bg-[#050505] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
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
                            Technical <br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                Solutions
                            </span>
                        </h1>
                        <p className="mt-6 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
                            From concept to curb, we provide the technical expertise and craftsmanship required to build high-performance mobile kitchens.
                        </p>
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
                                <nav className="hidden lg:block bg-[#0a0a0a] border border-neutral-800 rounded-xl p-2 shadow-2xl">
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
                                <div className="rounded-xl bg-gradient-to-br from-neutral-900 to-[#0a0a0a] border border-neutral-800 p-6 relative overflow-hidden group hidden lg:block">
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
                            <div className="lg:hidden -mx-6 px-6 pb-4 overflow-x-auto flex gap-3 no-scrollbar sticky top-[64px] z-50 bg-[#050505]/95 backdrop-blur-xl border-b border-neutral-800 pt-4">
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
                                        className="relative rounded-2xl bg-[#0a0a0a] p-8 sm:p-10 border border-neutral-800 overflow-hidden group hover:border-[#9B3A4E]/30 transition-colors duration-500"
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
            <section className="relative py-32 bg-[#050505] overflow-hidden border-t border-neutral-900">
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