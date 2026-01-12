"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { contactInfo, faqs } from "@/lib/utils";
import {
    ArrowRight,
    MapPin,
    Phone,
    Mail,
    Plus,
    Minus,
    MessageSquare,
    FileInput,
    Wrench
} from "lucide-react";

// --- Animation Variants ---
const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            delay: custom * 0.1,
            ease: "circOut" as const
        }
    })
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    }
};

// --- Sub-Components ---

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

function AccordionItem({ question, answer, isOpen, onClick, index }: AccordionItemProps) {
    return (
        <motion.div variants={fadeUp} custom={index}>
            <button
                onClick={onClick}
                className={`w-full text-left group border border-neutral-800 transition-all duration-300 ${
                    isOpen ? 'bg-neutral-900/50 border-[#9B3A4E]/30' : 'bg-[#0a0a0a] hover:border-neutral-700'
                }`}
            >
                <div className="flex items-center justify-between p-6">
                    <div className="flex items-center gap-4">
                        <span className={`text-xs font-mono transition-colors ${isOpen ? 'text-[#9B3A4E]' : 'text-neutral-600'}`}>
                            0{index + 1}
                        </span>
                        <h4 className={`text-sm font-medium transition-colors ${isOpen ? 'text-white' : 'text-neutral-400 group-hover:text-white'}`}>
                            {question}
                        </h4>
                    </div>
                    <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                        {isOpen ? <Minus className="w-4 h-4 text-[#9B3A4E]" /> : <Plus className="w-4 h-4 text-neutral-600" />}
                    </div>
                </div>

                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="px-6 pb-6 pl-14">
                                <p className="text-xs text-neutral-500 leading-relaxed font-light border-l border-neutral-800 pl-4">
                                    {answer}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </button>
        </motion.div>
    );
}

export default function Contact() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const contactMethods = [
        {
            icon: MapPin,
            label: "Warehouse",
            value: `${contactInfo?.address?.city || "Tampa"}, ${contactInfo?.address?.state || "FL"}`,
            subtext: "Parts Pickup Available"
        },
        {
            icon: Phone,
            label: "Sales Line",
            value: contactInfo?.phone?.sales || "800-555-0199",
            subtext: "0900 - 1800 EST"
        },
        {
            icon: Mail,
            label: "Support Email",
            value: contactInfo?.email?.sales || "sales@foodtruckparts.com",
            subtext: "Same Day Response"
        }
    ];

    return (
        <section className="relative w-full bg-[#050505] py-32 lg:py-44 overflow-hidden border-t border-neutral-900">
            {/* --- ATMOSPHERE --- */}
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-[#9B3A4E]/10 rounded-full blur-[180px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8 z-10">

                {/* --- HERO HEADER --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <motion.div variants={fadeUp} custom={0}>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-6">
                                    <Wrench className="w-3 h-3 text-[#9B3A4E]" />
                                    <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">Custom Build Support</span>
                                </div>
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.1]"
                            >
                                Build Your <br />
                                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">
                                    Perfect Truck
                                </span>
                            </motion.h2>
                        </div>

                        <motion.div variants={fadeUp} custom={2}>
                            <p className="text-lg text-neutral-400 leading-relaxed font-light mb-8 border-l-2 border-[#9B3A4E]/30 pl-6">
                                From commercial-grade kitchen equipment to custom trailer configurations, our team is ready to help you hit the road with confidence.
                            </p>
                            <div className="flex items-center gap-6 text-xs font-mono text-neutral-500">
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-[#9B3A4E] rounded-full animate-pulse" />
                                    <span>PARTS_IN_STOCK</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
                                    <span>EXPERT_SUPPORT</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* --- ACTION MODULES --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-3 gap-6 mb-32"
                >
                    {/* Primary: Get Quote */}
                    <motion.div variants={fadeUp} className="lg:col-span-2">
                        <Link href="/quote" className="group block h-full">
                            <div className="relative h-full min-h-[320px] p-10 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-[#9B3A4E]/50 transition-all duration-500 overflow-hidden">

                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#9B3A4E]/20 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="relative h-full flex flex-col justify-between z-10">
                                    <div>
                                        <div className="w-16 h-16 rounded-lg bg-[#9B3A4E]/10 border border-[#9B3A4E]/30 flex items-center justify-center mb-8 group-hover:bg-[#9B3A4E] group-hover:text-white transition-all duration-500 text-[#9B3A4E]">
                                            <FileInput className="w-8 h-8" />
                                        </div>
                                        <h3 className="text-3xl font-light text-white mb-2">
                                            Get Custom <span className="font-bold">Quote</span>
                                        </h3>
                                        <p className="text-neutral-400 text-sm leading-relaxed max-w-md font-light">
                                            Tell us about your food truck vision and receive a detailed parts and pricing breakdown.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-8 border-t border-white/5">
                                        <span className="text-neutral-500 text-[10px] uppercase tracking-widest font-mono">Est. Time: 5 Mins</span>
                                        <div className="flex items-center gap-3 text-white text-xs font-bold uppercase tracking-widest">
                                            <span className="group-hover:mr-2 transition-all duration-300">Start Quote Builder</span>
                                            <ArrowRight className="w-4 h-4 text-[#9B3A4E]" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Secondary: Contact */}
                    <motion.div variants={fadeUp}>
                        <Link href="/contact" className="group block h-full">
                            <div className="relative h-full min-h-[320px] p-8 rounded-xl bg-[#0a0a0a] border border-neutral-800 hover:border-neutral-600 transition-all duration-500">
                                <div className="relative h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-12 h-12 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-8 group-hover:border-[#9B3A4E]/30 transition-colors text-neutral-400">
                                            <MessageSquare className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            Have Questions?
                                        </h3>
                                        <p className="text-neutral-500 text-sm leading-relaxed">
                                            Speak with our food truck specialists. Get expert advice on parts and configurations.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 text-neutral-400 group-hover:text-white text-xs font-bold uppercase tracking-widest pt-6">
                                        <span>Contact Expert</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* --- CONTACT INFO --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-px bg-neutral-900 border border-neutral-800 mb-32 rounded-lg overflow-hidden"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.label}
                            variants={fadeUp}
                            custom={index}
                            className="group relative p-8 bg-[#0a0a0a] hover:bg-neutral-900/50 transition-colors"
                        >
                            <div className="flex items-start gap-4">
                                <method.icon className="w-5 h-5 text-[#9B3A4E] mt-1" />
                                <div>
                                    <p className="text-[10px] text-neutral-500 mb-1 uppercase tracking-widest font-bold">{method.label}</p>
                                    <p className="text-white font-mono text-sm mb-1">{method.value}</p>
                                    <p className="text-[10px] text-neutral-600 font-mono">{method.subtext}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* --- FAQ SECTION --- */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-start">
                        {/* FAQ Header */}
                        <motion.div variants={fadeUp} custom={0} className="lg:sticky lg:top-32">
                            <span className="text-[#9B3A4E] font-mono text-xs mb-4 block">
                                04 // SUPPORT
                            </span>
                            <h3 className="text-4xl font-light text-white mb-6">
                                Common <span className="font-bold">Questions</span>
                            </h3>
                            <p className="text-neutral-400 leading-relaxed mb-8 text-sm font-light">
                                Find answers to frequently asked questions about parts, installation, and food truck builds.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#9B3A4E] hover:text-white transition-colors duration-300 text-xs font-bold uppercase tracking-widest"
                            >
                                <span>Ask a Question</span>
                                <ArrowRight className="w-3 h-3" />
                            </Link>
                        </motion.div>

                        {/* FAQ Accordion */}
                        <motion.div
                            variants={staggerContainer}
                            className="space-y-3"
                        >
                            {faqs.map((faq, index) => (
                                <AccordionItem
                                    key={faq.question}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openFaq === index}
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    index={index}
                                />
                            ))}
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}