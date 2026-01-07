"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";

const features = [
    "Custom designs tailored to your menu and workflow",
    "Health department compliance guaranteed",
    "Heavy-duty construction built to last",
    "Full-service from concept to completion",
];

export default function About() {
    return (
        <section className="w-full bg-slate-50 py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
                    {/* Image */}
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

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-[var(--color-primary)]">
                            About Us
                        </span>
                        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                            Your Partner in Mobile Culinary Excellence
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-slate-600">
                            Since 1999, we've been transforming culinary visions into mobile reality.
                            Our team of expert fabricators, engineers, and designers work together
                            to create food trucks that are as efficient as they are beautiful.
                        </p>

                        <ul className="mt-8 space-y-4">
                            {features.map((feature, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: 10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--color-primary)] text-white">
                                        <Check className="h-4 w-4" />
                                    </span>
                                    <span className="text-slate-700">{feature}</span>
                                </motion.li>
                            ))}
                        </ul>

                        <div className="mt-10">
                            <Link
                                href="/about"
                                className="inline-flex items-center gap-2 text-base font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
                            >
                                Learn more about us
                                <ArrowRight className="h-5 w-5" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
