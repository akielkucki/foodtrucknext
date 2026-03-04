"use client";

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ContactForm from "@/components/ui/form"; // Ensure this path points to the new file above
// import { SectionHeader } from "@/components/ui/section-header"; // Assuming you have this or standard header
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
    ArrowUpRight,
    Map,
    Signal,
    Globe2
} from "lucide-react";
import { contactInfo, faqs } from "@/lib/utils";

const contactItems = [
    {
        icon: Phone,
        label: "Voice Line",
        value: contactInfo.phone.sales,
        sub: "Available 09:00 - 5:00PM EST",
        href: contactInfo.phone.salesHref,
    },
    {
        icon: Mail,
        label: "Email",
        value: contactInfo.email.sales,
        sub: "",
        href: `mailto:${contactInfo.email.sales}`,
    },
    {
        icon: MapPin,
        label: "Addresses",
        addresses: [
            contactInfo.address.full,
            contactInfo.address2.full,
            contactInfo.address3.full,
        ],
        href: "#",
    },
];

const socialIcons = [Facebook, Instagram, Youtube, Linkedin];

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-neutral-200">
            <Navbar />

            {/* --- HERO SECTION --- */}
            <section className="relative w-full pt-40 pb-24 overflow-hidden border-b border-neutral-900">
                {/* Cinematic Background */}
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#9B3A4E]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
                </div>

                <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl"
                    >
                        <div className="flex items-center gap-3 mb-6">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400">
                                Reach out today
                            </span>
                        </div>

                        <h1 className="text-5xl font-light tracking-tight text-white sm:text-7xl mb-8 leading-tight">
                            We want to<br />
                            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                hear from you.
                            </span>
                        </h1>
                        <p className="text-xl text-neutral-400 max-w-2xl font-light border-l border-[#9B3A4E] pl-6">
                            Whether you require a bespoke chassis configuration or fleet maintenance, our specialists are ready to deploy.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- MAIN INTERFACE --- */}
            <section className="relative z-20 px-6 py-20 lg:px-8">
                <div className="mx-auto max-w-7xl">
                    <div className="grid lg:grid-cols-12 gap-12 items-start">

                        {/* Left Side: Data Panel */}
                        <div className="lg:col-span-5 space-y-8">
                            {/* Contact Grid */}
                            <div className="bg-neutral-900/30 backdrop-blur-sm border border-neutral-800 rounded-2xl overflow-hidden">
                                <div className="p-6 border-b border-neutral-800 bg-[#0a0a0a]">
                                    <h2 className="text-lg font-medium text-white flex items-center gap-2">
                                        <Signal className="w-4 h-4 text-[#9B3A4E]" />
                                        Our Information
                                    </h2>
                                </div>
                                <div className="divide-y divide-neutral-800">
                                    {contactItems.map((item) => (
                                        <div key={item.label} className="group p-6 hover:bg-neutral-800/50 transition-colors">
                                            <div className="flex items-start gap-4">
                                                <div className="p-3 bg-neutral-950 rounded-lg border border-neutral-800 group-hover:border-[#9B3A4E]/50 transition-colors">
                                                    <item.icon className="h-5 w-5 text-neutral-400 group-hover:text-[#9B3A4E]" />
                                                </div>
                                                <div className="flex-1">
                                                    <dt className="text-[10px] uppercase tracking-widest text-neutral-500 mb-1">
                                                        {item.label}
                                                    </dt>
                                                    {item.addresses ? (
                                                        <dd className="space-y-1">
                                                            {item.addresses.map((address, index) => (
                                                                <div key={index} className="text-sm text-neutral-300 font-light">
                                                                    {address}
                                                                </div>
                                                            ))}
                                                        </dd>
                                                    ) : (
                                                        <dd>
                                                            {item.href ? (
                                                                <a href={item.href} className="text-lg text-white hover:text-[#9B3A4E] transition-colors font-medium flex items-center gap-2 group-hover:translate-x-1 transition-transform">
                                                                    {item.value}
                                                                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100" />
                                                                </a>
                                                            ) : (
                                                                <span className="text-lg text-white font-medium">{item.value}</span>
                                                            )}
                                                            <p className="text-xs text-neutral-600 mt-1 font-mono">{item.sub}</p>
                                                        </dd>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Data */}
                            <div className="flex gap-4 items-center justify-center p-6 border border-neutral-800 rounded-xl bg-neutral-900/20">
                                {socialIcons.map((Icon, i) => (
                                    <a key={i} href="#" className="p-3 text-neutral-500 hover:text-white hover:bg-neutral-800 rounded-full transition-all">
                                        <Icon className="h-5 w-5" />
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Right Side: Form Module */}
                        <div className="lg:col-span-7">
                            <div className="relative bg-[#0a0a0a] border border-neutral-800 p-8 sm:p-12 rounded-2xl shadow-2xl">
                                {/* Decorative "screw" corners */}
                                <div className="absolute top-4 left-4 w-2 h-2 rounded-full border border-neutral-700 bg-neutral-900" />
                                <div className="absolute top-4 right-4 w-2 h-2 rounded-full border border-neutral-700 bg-neutral-900" />
                                <div className="absolute bottom-4 left-4 w-2 h-2 rounded-full border border-neutral-700 bg-neutral-900" />
                                <div className="absolute bottom-4 right-4 w-2 h-2 rounded-full border border-neutral-700 bg-neutral-900" />

                                <ContactForm />
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* --- MAP TELEMETRY --- */}
            <section className="w-full px-6 lg:px-8 pb-24">
                <div className="mx-auto max-w-7xl">
                    <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-[#080808] h-[400px] group">

                        {/* Map Placeholder Content */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3411.1242696016675!2d-75.1212146!3d39.9888579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c825df63873f%3A0x9279a5728794b293!2s2777%20Emerald%20St%2C%20Philadelphia%2C%20PA%2019134!5e1!3m2!1sen!2sus!4v1772125598552!5m2!1sen!2sus"
                            width="1920" height="450" style={
                            {border:0}
                        } allowFullScreen={true} loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"></iframe>


                        {/* Floating Location Card */}
                        <div
                            className="absolute bottom-8 left-8 bg-neutral-900/90 backdrop-blur-md p-6 rounded-xl border border-neutral-700 shadow-2xl max-w-xs z-10">
                            <div className="flex items-center gap-3 mb-2">
                                <Map className="w-4 h-4 text-[#9B3A4E]" />
                                <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                                    Our Office
                                </h4>
                            </div>
                            <p className="text-xs text-neutral-400 leading-relaxed">
                                {contactInfo.address.full}
                            </p>
                            <a href="#" className="mt-4 inline-flex items-center text-[10px] font-bold uppercase tracking-widest text-[#9B3A4E] hover:text-white transition-colors">
                                Calculate Route <ArrowUpRight className="h-3 w-3 ml-1" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- FAQ PROTOCOLS --- */}
            <section className="w-full py-24 border-t border-neutral-900 bg-[#050505]">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl font-light text-white">FAQs</h2>
                        <div className="h-0.5 w-12 bg-[#9B3A4E] mx-auto mt-4" />
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {faqs.slice(0, 4).map((faq, index) => (
                            <motion.div
                                key={faq.question}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                                className="rounded-xl border border-neutral-800 bg-neutral-900/20 p-6 hover:border-neutral-700 transition-colors"
                            >
                                <h4 className="font-medium text-neutral-200 text-sm mb-3 flex items-start gap-2">
                                    <span className="text-[#9B3A4E] font-mono">0{index + 1}.</span>
                                    {faq.question}
                                </h4>
                                <p className="text-xs text-neutral-500 leading-relaxed font-light pl-6">{faq.answer}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}