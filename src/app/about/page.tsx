"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/ui/section-header";
import { CTASection } from "@/components/sections/cta-section";
import { IconCard } from "@/components/ui/icon-card";
import { StatsGrid } from "@/components/ui/stat-card";

const values = [
    {
        title: "Quality First",
        description:
            "We never compromise on materials, workmanship, or attention to detail.",
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z"
                />
            </svg>
        ),
    },
    {
        title: "Customer Focus",
        description:
            "Your vision and success are at the center of every decision we make.",
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                />
            </svg>
        ),
    },
    {
        title: "Innovation",
        description:
            "We continuously evolve our designs and processes to stay ahead.",
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18"
                />
            </svg>
        ),
    },
    {
        title: "Integrity",
        description:
            "Honest communication, fair pricing, and reliable service every time.",
        icon: (
            <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                />
            </svg>
        ),
    },
];

const stats = [
    { value: "25+", label: "Years in Business" },
    { value: "500+", label: "Trucks Built" },
    { value: "50+", label: "States Served" },
    { value: "98%", label: "Customer Satisfaction" },
];

const teams = [
    {
        name: "Design Team",
        description: "Creative minds who transform your vision into detailed plans",
    },
    {
        name: "Build Team",
        description: "Master craftspeople with decades of combined experience",
    },
    {
        name: "Support Team",
        description: "Dedicated specialists ensuring your ongoing success",
    },
];

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full bg-slate-950 pt-32 pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary-light)] mb-6 inline-block">
                            Our Story
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Building Dreams{" "}
                            <span className="text-[var(--color-primary-light)]">on Wheels</span>
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-slate-400 max-w-2xl mx-auto">
                            Since 1999, we've been transforming culinary visions into mobile
                            reality.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Our Story */}
            <section className="bg-slate-50 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200"
                        >
                            <Image
                                src="/hero.webp"
                                alt="Our facility"
                                fill
                                className="object-cover"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl mb-6">
                                Our Story
                            </h2>
                            <div className="space-y-4 text-slate-600">
                                <p>
                                    Founded in 1999, we started with a simple mission: to help
                                    culinary entrepreneurs bring their visions to life on wheels.
                                    What began as a small operation building basic food trucks has
                                    grown into a full-service custom food truck manufacturing
                                    company.
                                </p>
                                <p>
                                    Over the past 25+ years, we've built hundreds of custom food
                                    trucks for clients across the country. Each build is a unique
                                    collaboration between our expert team and our clients.
                                </p>
                                <p>
                                    We've seen the food truck industry evolve from simple catering
                                    vehicles to sophisticated mobile restaurants. Through it all,
                                    we've remained committed to quality craftsmanship, innovative
                                    design, and exceptional customer service.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader
                        title="Our Values"
                        description="The principles that guide everything we do"
                    />

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <IconCard
                                key={value.title}
                                icon={value.icon}
                                title={value.title}
                                description={value.description}
                                variant="bordered"
                                iconVariant="primary"
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* By the Numbers */}
            <section className="bg-slate-50 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader
                        title="By the Numbers"
                        description="Our impact in the food truck industry"
                    />

                    <StatsGrid stats={stats} columns={4} variant="minimal" />
                </div>
            </section>

            {/* Our Team */}
            <section className="bg-white py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <SectionHeader
                        title="Our Team"
                        description="Expert craftspeople dedicated to your success"
                    />

                    <div className="grid gap-8 md:grid-cols-3">
                        {teams.map((team, index) => (
                            <motion.div
                                key={team.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="rounded-2xl bg-white border border-slate-200 p-8 text-center"
                            >
                                <div className="mb-6 aspect-square w-full rounded-2xl bg-slate-100" />
                                <h3 className="mb-2 text-xl font-bold text-slate-900">
                                    {team.name}
                                </h3>
                                <p className="text-sm text-slate-600">{team.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-slate-950 py-24 lg:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <CTASection
                        title="Ready to Start Your Journey?"
                        description="Let's build something great together"
                        primaryAction={{ label: "Get a Free Quote", href: "/quote" }}
                        secondaryAction={{ label: "Contact Us", href: "/contact" }}
                        variant="dark"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}
