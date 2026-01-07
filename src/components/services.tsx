"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Truck, ClipboardList, Package, Wrench, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";

const services = [
    {
        title: "Custom Builds",
        description:
            "From concept to completion, we design and build fully custom food trucks tailored to your menu and workflow.",
        icon: Truck,
        href: "/custom-builds",
    },
    {
        title: "Design Services",
        description:
            "Already have a truck? We'll help you redesign and optimize your kitchen layout for maximum efficiency.",
        icon: ClipboardList,
        href: "/services",
    },
    {
        title: "Parts & Equipment",
        description:
            "Quality components and specialty items for any mobile kitchen setup, with fast shipping nationwide.",
        icon: Package,
        href: "/parts",
    },
    {
        title: "Repair & Service",
        description:
            "Keep your truck running smoothly with our repair and preventive maintenance services.",
        icon: Wrench,
        href: "/services",
    },
];

export default function Services() {
    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    label="What We Do"
                    title="Our Services"
                    description="Custom food truck builds, design services, parts, and ongoing support to keep your business moving."
                />

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
                                className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-primary)] text-white transition-colors group-hover:bg-[var(--color-primary-dark)]">
                                    <service.icon className="h-6 w-6" />
                                </div>
                                <h3 className="mt-5 text-lg font-bold text-slate-900">
                                    {service.title}
                                </h3>
                                <p className="mt-2 flex-1 text-sm text-slate-600 leading-relaxed">
                                    {service.description}
                                </p>
                                <span className="mt-4 inline-flex items-center text-sm font-semibold text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-primary-dark)]">
                                    Learn more
                                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </span>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
