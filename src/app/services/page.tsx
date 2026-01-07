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
} from "lucide-react";
import { CTASection } from "@/components/sections/cta-section";

const services = [
    {
        id: "custom-builds",
        title: "Custom Builds",
        icon: <Truck className="h-6 w-6" />,
        shortDesc: "Ground-up fabrication",
        fullDesc:
            "We don't just assemble trucks; we engineer mobile culinary environments. From chassis selection to final inspection, every inch is optimized for workflow and weight distribution.",
        features: [
            "3D CAD Design & Workflow Optimization",
            "Heavy-Duty Electrical & Plumbing Systems",
            "Custom Stainless Steel Fabrication",
            "Health Department Compliance Guarantee",
        ],
    },
    {
        id: "renovations",
        title: "Renovations",
        icon: <Hammer className="h-6 w-6" />,
        shortDesc: "Modernize your fleet",
        fullDesc:
            "Breathe new life into aging units. We specialize in retrofitting older trucks with modern equipment, LED lighting, and ergonomic layout changes to increase output speed.",
        features: [
            "Kitchen Layout Re-engineering",
            "Equipment Upgrades & Swaps",
            "Exterior Wraps & Cosmetic Refreshes",
            "Generator & Power System Upgrades",
        ],
    },
    {
        id: "repairs",
        title: "Repairs & Maintenance",
        icon: <Wrench className="h-6 w-6" />,
        shortDesc: "Keep running smoothly",
        fullDesc:
            "Downtime is lost revenue. Our rapid-response team handles everything from broken refrigeration to generator failures, ensuring you get back to serving customers fast.",
        features: [
            "Emergency Equipment Repair",
            "Preventive Maintenance Plans",
            "Propane System Leak Testing",
            "Chassis & Engine Coordination",
        ],
    },
    {
        id: "consulting",
        title: "Consulting",
        icon: <ClipboardList className="h-6 w-6" />,
        shortDesc: "Business planning",
        fullDesc:
            "Avoid costly mistakes before you build. Our team provides expert guidance on permitting, menu-to-equipment matching, and operational logistics.",
        features: [
            "Business Plan Development",
            "Menu Optimization Consulting",
            "Health Permit Expediting",
            "Operational Workflow Analysis",
        ],
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
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full bg-neutral-950 pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#9B3A4E] mb-6 inline-block">
                            Professional Solutions
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Engineering Your{" "}
                            <span className="text-[#9B3A4E]">Success</span>
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-neutral-400 max-w-2xl mx-auto">
                            From concept to curb, we provide the technical expertise and
                            craftsmanship required to build high-performance mobile kitchens.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Layout */}
            <div className="relative py-16 lg:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
                        {/* Sticky Sidebar Navigation */}
                        <div className="lg:col-span-4 lg:block">
                            <div className="sticky top-32 space-y-8">
                                <nav className="hidden lg:block space-y-2">
                                    <h3 className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4 px-4">
                                        Services Menu
                                    </h3>
                                    {services.map((service) => (
                                        <button
                                            key={service.id}
                                            onClick={() => scrollToSection(service.id)}
                                            className={`group flex w-full items-center justify-between rounded-lg px-4 py-4 text-left text-sm font-medium transition-all ${
                                                activeSection === service.id
                                                    ? "bg-white shadow-md border border-neutral-200 text-[#6B1B2D]"
                                                    : "text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900"
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span
                                                    className={`p-1 rounded-md ${
                                                        activeSection === service.id
                                                            ? "bg-[#9B3A4E]/10"
                                                            : "bg-neutral-100 group-hover:bg-white"
                                                    }`}
                                                >
                                                    {service.icon}
                                                </span>
                                                {service.title}
                                            </span>
                                            {activeSection === service.id && (
                                                <motion.div
                                                    layoutId="activeDot"
                                                    className="h-2 w-2 rounded-full bg-[#6B1B2D]"
                                                />
                                            )}
                                        </button>
                                    ))}
                                </nav>

                                {/* Sidebar CTA Card */}
                                <div className="rounded-2xl bg-neutral-900 p-6 text-white">
                                    <h3 className="text-lg font-bold mb-2">
                                        Have a custom request?
                                    </h3>
                                    <p className="text-sm text-neutral-400 mb-6">
                                        Our engineering team is ready to tackle unique challenges.
                                    </p>
                                    <Link
                                        href="/contact"
                                        className="flex w-full items-center justify-center rounded-lg bg-[#6B1B2D] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#4A0E1E]"
                                    >
                                        Talk to an Engineer
                                    </Link>
                                </div>
                            </div>

                            {/* Mobile Menu */}
                            <div className="lg:hidden -mx-6 px-6 pb-6 overflow-x-auto flex gap-4 no-scrollbar sticky top-[64px] z-30 bg-white/95 backdrop-blur-sm py-4 border-b border-neutral-200">
                                {services.map((service) => (
                                    <button
                                        key={service.id}
                                        onClick={() => scrollToSection(service.id)}
                                        className={`flex-shrink-0 whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                            activeSection === service.id
                                                ? "bg-[#6B1B2D] text-white"
                                                : "bg-neutral-100 border border-neutral-200 text-neutral-600"
                                        }`}
                                    >
                                        {service.title}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Detailed Content Column */}
                        <div className="lg:col-span-8 space-y-24">
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
                                        className="relative rounded-2xl bg-white p-8 sm:p-12 border border-neutral-200"
                                    >
                                        {/* Header */}
                                        <div className="flex items-start justify-between mb-8">
                                            <div>
                                                <div className="flex items-center gap-3 text-[#6B1B2D] font-medium mb-3">
                                                    {service.icon}
                                                    <span className="text-sm uppercase tracking-wider">
                                                        {service.shortDesc}
                                                    </span>
                                                </div>
                                                <h2 className="text-3xl font-bold text-neutral-900">
                                                    {service.title}
                                                </h2>
                                            </div>
                                            <span className="text-6xl font-black text-neutral-100 select-none hidden sm:block">
                                                0{index + 1}
                                            </span>
                                        </div>

                                        {/* Content */}
                                        <p className="text-lg text-neutral-600 leading-relaxed mb-10">
                                            {service.fullDesc}
                                        </p>

                                        {/* Features Grid */}
                                        <div className="bg-neutral-50 rounded-xl p-6 sm:p-8 border border-neutral-200">
                                            <h4 className="font-semibold text-neutral-900 mb-6 flex items-center gap-2">
                                                Key Capabilities
                                            </h4>
                                            <div className="grid sm:grid-cols-2 gap-y-4 gap-x-8">
                                                {service.features.map((feature) => (
                                                    <div key={feature} className="flex items-start gap-3">
                                                        <CheckCircle2 className="h-5 w-5 text-[#6B1B2D] flex-shrink-0 mt-0.5" />
                                                        <span className="text-sm text-neutral-600 font-medium">
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

            {/* Bottom CTA Section */}
            <section className="bg-neutral-950 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CTASection
                        title="Ready to get started?"
                        description="Whether you need a single part replacement or a fleet of custom trucks, our team has the capacity and expertise to deliver."
                        primaryAction={{ label: "Get a Free Quote", href: "/quote" }}
                        secondaryAction={{ label: "Contact Sales", href: "/contact" }}
                        variant="dark"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
