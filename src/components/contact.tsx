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
    ChevronDown,
    MessageCircle,
    FileText,
    Clock
} from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (custom: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            delay: custom * 0.1,
            ease: [0.16, 1, 0.3, 1] as const
        }
    })
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.2
        }
    }
};

const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
};

interface AccordionItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
    index: number;
}

function AccordionItem({ question, answer, isOpen, onClick, index }: AccordionItemProps) {
    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            className="group"
        >
            <button
                onClick={onClick}
                className="w-full text-left"
            >
                <div className={`
                    relative p-6 rounded-2xl transition-all duration-500
                    ${isOpen
                    ? 'bg-gradient-to-br from-[#722F37]/20 to-[#722F37]/5 border-[#722F37]/40'
                    : 'bg-slate-900/40 hover:bg-slate-900/60 border-slate-800/50 hover:border-slate-700/50'
                }
                    border backdrop-blur-sm
                `}>
                    {/* Accent line */}
                    <motion.div
                        className="absolute left-0 top-6 bottom-6 w-1 rounded-full bg-gradient-to-b from-[#722F37] to-[#8B3A42]"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                    />

                    <div className="flex items-start justify-between gap-4">
                        <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                                <span className="text-xs font-mono text-[#722F37]/70 tracking-wider">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                            </div>
                            <h4 className={`
                                text-lg font-semibold transition-colors duration-300
                                ${isOpen ? 'text-white' : 'text-slate-200 group-hover:text-white'}
                            `}>
                                {question}
                            </h4>
                        </div>

                        <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className={`
                                w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0
                                transition-colors duration-300
                                ${isOpen
                                ? 'bg-[#722F37]/30 text-[#d4787f]'
                                : 'bg-slate-800/50 text-slate-400 group-hover:text-slate-300'
                            }
                            `}
                        >
                            <ChevronDown className="w-5 h-5" />
                        </motion.div>
                    </div>

                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                                className="overflow-hidden"
                            >
                                <p className="pt-4 text-slate-400 leading-relaxed pl-9">
                                    {answer}
                                </p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </button>
        </motion.div>
    );
}

export default function Contact() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);

    const contactMethods = [
        {
            icon: MapPin,
            label: "Visit Us",
            value: `${contactInfo?.address?.city || "Tampa"}, ${contactInfo?.address?.state || "FL"}`,
            subtext: "Headquarters"
        },
        {
            icon: Phone,
            label: "Call Us",
            value: contactInfo?.phone?.sales || "800-555-0199",
            subtext: "Mon-Fri, 9am-6pm EST"
        },
        {
            icon: Mail,
            label: "Email Us",
            value: contactInfo?.email?.sales || "sales@foodtruckbuilder.com",
            subtext: "24hr response time"
        }
    ];

    return (
        <section className="relative w-full bg-slate-950 py-32 lg:py-44 overflow-hidden">
            {/* Complex layered background */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Primary gradient orbs */}
                <div className="absolute top-[-20%] left-[-10%] w-[800px] h-[800px] bg-[#722F37]/15 rounded-full blur-[180px]" />
                <div className="absolute bottom-[-30%] right-[-15%] w-[700px] h-[700px] bg-[#722F37]/10 rounded-full blur-[160px]" />

                {/* Diagonal accent lines */}
                <svg className="absolute inset-0 w-full h-full opacity-[0.02]" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        <pattern id="diagonals" width="100" height="100" patternUnits="userSpaceOnUse">
                            <line x1="0" y1="100" x2="100" y2="0" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#diagonals)" />
                </svg>
            </div>

            {/* Floating decorative elements */}
            <motion.div
                className="absolute top-32 right-[15%] w-24 h-24 border border-[#722F37]/20 rounded-full"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 180, 360]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />
            <motion.div
                className="absolute bottom-40 left-[10%] w-16 h-16 bg-[#722F37]/10 rounded-2xl rotate-45"
                animate={{
                    y: [0, 15, 0],
                    rotate: [45, 90, 45]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="mb-24"
                >
                    <div className="grid lg:grid-cols-2 gap-16 items-end">
                        <div>
                            <motion.div
                                variants={fadeUp}
                                custom={0}
                            >
                            </motion.div>

                            <motion.h2
                                variants={fadeUp}
                                custom={1}
                                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.1]"
                            >
                                Let's Build
                                <br />
                                <span className="relative inline-block">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#722F37] via-[#9B4A52] to-[#722F37]">
                                        Something
                                    </span>
                                </span>
                                <br />
                                <span className="text-slate-500">Extraordinary</span>
                            </motion.h2>
                        </div>

                        <motion.div variants={fadeUp} custom={2}>
                            <p className="text-xl text-slate-400 leading-relaxed mb-8">
                                Whether you're starting with a napkin sketch or a detailed blueprint, our engineering team transforms your vision into a rolling reality.
                            </p>
                            <div className="flex items-center gap-4 text-sm text-slate-500">
                                <div className="flex items-center gap-2">
                                    <Clock className="w-4 h-4 text-[#722F37]" />
                                    <span>24hr Response</span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-slate-700" />
                                <div className="flex items-center gap-2">
                                    <MessageCircle className="w-4 h-4 text-[#722F37]" />
                                    <span>Free Consultation</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Action Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={staggerContainer}
                    className="grid lg:grid-cols-3 gap-6 mb-32"
                >
                    {/* Get a Quote - Primary */}
                    <motion.div variants={scaleUp} className="lg:col-span-2">
                        <Link href="/quote" className="group block h-full">
                            <div className="relative h-full min-h-[320px] p-10 rounded-[2rem] bg-gradient-to-br from-[#722F37] via-[#843841] to-[#5a252c] overflow-hidden">
                                {/* Animated background pattern */}
                                <div className="absolute inset-0 opacity-20">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
                                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
                                </div>

                                {/* Grid pattern overlay */}
                                <div
                                    className="absolute inset-0 opacity-10"
                                    style={{
                                        backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                                        backgroundSize: '32px 32px'
                                    }}
                                />

                                <div className="relative h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
                                            <FileText className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                            Get a Free Quote
                                        </h3>
                                        <p className="text-white/70 text-lg leading-relaxed max-w-md">
                                            Share your vision and receive a detailed, no-obligation quote tailored to your exact specifications.
                                        </p>
                                    </div>

                                    <div className="flex items-center justify-between pt-8 border-t border-white/10">
                                        <span className="text-white/50 text-sm">Takes ~5 minutes</span>
                                        <div className="flex items-center gap-3 text-white font-semibold">
                                            <span className="group-hover:mr-2 transition-all duration-300">Start Your Quote</span>
                                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-[#722F37] transition-all duration-300">
                                                <ArrowRight className="w-5 h-5" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>

                    {/* Contact Card */}
                    <motion.div variants={scaleUp}>
                        <Link href="/contact" className="group block h-full">
                            <div className="relative h-full min-h-[320px] p-8 rounded-[2rem] bg-slate-900/60 border border-slate-800 hover:border-[#722F37]/40 transition-all duration-500 overflow-hidden">
                                {/* Hover gradient */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#722F37]/0 to-[#722F37]/0 group-hover:from-[#722F37]/5 group-hover:to-transparent transition-all duration-500" />

                                <div className="relative h-full flex flex-col justify-between">
                                    <div>
                                        <div className="w-14 h-14 rounded-2xl bg-[#722F37]/20 flex items-center justify-center mb-6 group-hover:bg-[#722F37]/30 transition-colors duration-300">
                                            <MessageCircle className="w-7 h-7 text-[#d4787f]" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3">
                                            Have Questions?
                                        </h3>
                                        <p className="text-slate-400 leading-relaxed">
                                            Reach out directly and our team will respond within 24 hours.
                                        </p>
                                    </div>

                                    <div className="flex items-center gap-3 text-white font-medium pt-6">
                                        <span className="group-hover:text-[#d4787f] transition-colors duration-300">Contact Us</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Contact Methods */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid md:grid-cols-3 gap-4 mb-32"
                >
                    {contactMethods.map((method, index) => (
                        <motion.div
                            key={method.label}
                            variants={fadeUp}
                            custom={index}
                            className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/50 hover:border-[#722F37]/30 transition-all duration-300"
                        >
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-[#722F37]/15 flex items-center justify-center group-hover:bg-[#722F37]/25 transition-colors duration-300">
                                    <method.icon className="w-5 h-5 text-[#d4787f]" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-xs text-slate-500 mb-1 uppercase tracking-wider">{method.label}</p>
                                    <p className="text-white font-semibold mb-1">{method.value}</p>
                                    <p className="text-xs text-slate-600">{method.subtext}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* FAQ Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="grid lg:grid-cols-[1fr,1.5fr] gap-16 items-start">
                        {/* FAQ Header */}
                        <motion.div variants={fadeUp} custom={0} className="lg:sticky lg:top-32">
                            <span className="text-[#722F37] text-sm font-semibold tracking-wider uppercase mb-4 block">
                                FAQ
                            </span>
                            <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                Questions?
                                <br />
                                <span className="text-slate-500">We've Got Answers</span>
                            </h3>
                            <p className="text-slate-400 leading-relaxed mb-8">
                                Everything you need to know about our custom build process. Can't find what you're looking for? Reach out to our team.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 text-[#d4787f] hover:text-white transition-colors duration-300 font-medium"
                            >
                                <span>Ask a Question</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                        </motion.div>

                        {/* FAQ Accordion */}
                        <motion.div
                            variants={staggerContainer}
                            className="space-y-4"
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