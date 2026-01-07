"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/ui/form";
import { SectionHeader } from "@/components/ui/section-header";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MapPin,
    Clock,
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    ArrowRight,
} from "lucide-react";
import { contactInfo, faqs } from "@/lib/utils";

const contactItems = [
    {
        icon: Phone,
        label: "Call Us",
        value: contactInfo.phone.sales,
        sub: contactInfo.hours.weekdays,
        href: contactInfo.phone.salesHref,
    },
    {
        icon: Mail,
        label: "Email Sales",
        value: contactInfo.email.sales,
        sub: "24 hour response time",
        href: `mailto:${contactInfo.email.sales}`,
    },
    {
        icon: MapPin,
        label: "Visit Our Facilities",
        addresses: [
            contactInfo.address.full,
            contactInfo.address2.full,
            contactInfo.address3.full,
        ],
        href: "#",
    },
    {
        icon: Clock,
        label: "Business Hours",
        value: contactInfo.hours.weekdays,
        sub: "Weekend appointments available",
        href: null,
    },
];

const socialIcons = [Facebook, Instagram, Youtube, Linkedin];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative w-full bg-neutral-950 pt-32 pb-48">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="max-w-2xl"
                    >
                        <span className="text-sm font-semibold uppercase tracking-widest text-[#9B3A4E] mb-6 inline-block">
                            Accepting New Projects
                        </span>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
                            Let's Build Your{" "}
                            <span className="text-[#9B3A4E]">Vision.</span>
                        </h1>
                        <p className="mt-4 text-lg leading-8 text-neutral-400">
                            Ready to start your custom build or need parts for your existing
                            fleet? Our engineering team is standing by.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="relative z-20 -mt-24 px-6 pb-24 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="overflow-hidden rounded-2xl bg-white shadow-xl lg:grid lg:grid-cols-2 border border-neutral-200">
                        {/* Left Side: Contact Info */}
                        <div className="relative bg-neutral-900 px-6 py-10 sm:px-10 sm:py-16 lg:px-12">
                            <div className="relative z-10">
                                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Contact Information
                                </h2>
                                <p className="mt-4 text-base text-neutral-400">
                                    Have technical questions? Direct access to our support and
                                    sales team.
                                </p>

                                <dl className="mt-8 space-y-8">
                                    {contactItems.map((item) => (
                                        <div key={item.label} className="flex gap-4">
                                            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 border border-white/5">
                                                <item.icon
                                                    className="h-6 w-6 text-[#9B3A4E]"
                                                    aria-hidden="true"
                                                />
                                            </div>
                                            <div>
                                                <dt className="text-sm font-medium text-neutral-400">
                                                    {item.label}
                                                </dt>
                                                {item.addresses ? (
                                                    // Special rendering for addresses
                                                    <dd className="mt-1 space-y-1">
                                                        {item.addresses.map((address, index) => (
                                                            <div key={index} className="text-sm font-medium text-white">
                                                                {address}
                                                            </div>
                                                        ))}
                                                    </dd>
                                                ) : (
                                                    <>
                                                        <dd className="mt-1 text-base font-semibold text-white">
                                                            {item.href ? (
                                                                <a
                                                                    href={item.href}
                                                                    className="hover:text-[#9B3A4E] transition-colors"
                                                                >
                                                                    {item.value}
                                                                </a>
                                                            ) : (
                                                                <span>{item.value}</span>
                                                            )}
                                                        </dd>
                                                        <dd className="mt-1 text-xs text-neutral-500">
                                                            {item.sub}
                                                        </dd>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </dl>

                                <div className="mt-12 pt-10 border-t border-white/10">
                                    <h3 className="text-sm font-semibold text-neutral-400 mb-4">
                                        Follow our builds
                                    </h3>
                                    <div className="flex gap-4">
                                        {socialIcons.map((Icon, i) => (
                                            <a
                                                key={i}
                                                href="#"
                                                className="text-neutral-400 hover:text-white transition-colors"
                                            >
                                                <Icon className="h-6 w-6" />
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="bg-white px-6 py-10 sm:px-10 sm:py-16 lg:px-12">
                            <div className="mb-8">
                                <h2 className="text-2xl font-bold tracking-tight text-neutral-900">
                                    Send us a Message
                                </h2>
                                <p className="mt-2 text-neutral-500">
                                    Fill out the form below and we'll get back to you with a quote
                                    or answer within 24 hours.
                                </p>
                            </div>

                            <div className="bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="w-full px-6 lg:px-8 pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-100 h-[400px] relative">
                        <div className="absolute inset-0 flex items-center justify-center bg-neutral-100 text-neutral-400 font-medium">
                            <MapPin className="h-8 w-8 mr-2 text-neutral-400" />
                            Interactive Map Loading...
                        </div>

                        <div className="absolute bottom-6 left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100 max-w-xs hidden sm:block">
                            <h4 className="font-bold text-neutral-900">
                                Food Truck Parts HQ
                            </h4>
                            <p className="text-sm text-neutral-500 mt-1">
                                {contactInfo.address.full}

                            </p>
                            <a
                                href="#"
                                className="mt-3 inline-flex items-center text-xs font-bold text-[#6B1B2D] hover:underline"
                            >
                                Get Directions <ArrowRight className="h-3 w-3 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="w-full bg-neutral-50 py-24 border-t border-neutral-200">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <SectionHeader
                        title="Common Questions"
                        description="Quick answers to help you move forward."
                    />

                    <div className="grid gap-6 sm:grid-cols-2">
                        {faqs.slice(0, 4).map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-xl border border-neutral-200 bg-white p-6"
                            >
                                <h4 className="font-bold text-neutral-900">{faq.question}</h4>
                                <p className="mt-2 text-sm text-neutral-600">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
