"use client";

import Link from "next/link";
import { brandName, brandNameLegal } from "@/lib/shopify";
import { cn, contactInfo } from "@/lib/utils";
import {
    Facebook,
    Instagram,
    Youtube,
    Linkedin,
    MapPin,
    Phone,
    Mail,
    ArrowRight
} from "lucide-react";

interface FooterProps {
    variant?: "dark" | "light"; // Keeping prop for compatibility, defaulting to dark style
}

const navigation = {
    builds: [
        { name: "Custom Fabrication", href: "/current-inventory" },
        { name: "Design Archive", href: "/gallery" },
        { name: "Engineering Process", href: "/process" },
        { name: "Build Estimator", href: "/quote" },
    ],
    services: [
        { name: "Fabrication Ops", href: "/services/custom-fabrication" },
        { name: "Component Supply", href: "/parts" },
        { name: "Maint. & Repair", href: "/services/repair-maintenance" },
        { name: "Technical Consulting", href: "/services/consulting" },
    ],
    company: [
        { name: "Corporate Profile", href: "/about" },
        { name: "Personnel", href: "/about#team" },
        { name: "Careers", href: "/careers" },
        { name: "Field Notes", href: "/blog" },
    ],
    support: [
        { name: "HQ Contact", href: "/contact" },
        { name: "Quote Request", href: "/quote" },
        { name: "Knowledge Base", href: "/faqs" },
        { name: "Logistics Info", href: "/shipping" },
    ],
};

const socialLinks = [
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "Instagram", href: "#", icon: Instagram },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "LinkedIn", href: "#", icon: Linkedin },
];

export default function Footer({ variant = "dark" }: FooterProps) {
    return (
        <footer className="bg-[#0a0a0a] border-t border-neutral-900 text-neutral-400 font-sans">


            {/* Main Footer Content */}
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-6">

                    {/* Brand & Contact Info */}
                    <div className="lg:col-span-2 space-y-8">
                        <div>
                            <Link href="/" className="group flex items-center gap-2 mb-4">
                                <div className="h-6 w-6 bg-[#9B3A4E] rounded flex items-center justify-center text-white font-bold text-[10px]">
                                    FT
                                </div>
                                <span className="text-lg font-bold tracking-tight text-white">
                                    {brandName?.split("_")[0] || "FOOD"}
                                    <span className="text-[#9B3A4E]">{brandName?.split("_")[1] || ""}</span>
                                </span>
                            </Link>
                            <p className="text-xs text-neutral-500 leading-relaxed max-w-xs border-l-2 border-[#9B3A4E]/20 pl-4">
                                Precision engineering since 1999. Transforming concepts into high-performance mobile assets.
                            </p>
                        </div>

                        <div className="space-y-4 text-xs font-mono text-neutral-500">
                            <div className="flex items-start gap-3 group">
                                <MapPin className="w-4 h-4 text-[#9B3A4E] mt-0.5" />
                                <span className="group-hover:text-neutral-300 transition-colors">
                                    {contactInfo.address.street}<br />
                                    {contactInfo.address.city}, {contactInfo.address.state}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Phone className="w-4 h-4 text-[#9B3A4E]" />
                                <span className="group-hover:text-neutral-300 transition-colors">
                                    {contactInfo.phone.sales}
                                </span>
                            </div>
                            <div className="flex items-center gap-3 group">
                                <Mail className="w-4 h-4 text-[#9B3A4E]" />
                                <span className="group-hover:text-neutral-300 transition-colors">
                                    {contactInfo.email.sales}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
                        {/* Builds */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
                                Division 01
                            </h4>
                            <ul className="space-y-3">
                                {navigation.builds.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-xs hover:text-[#9B3A4E] transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-1 text-[#9B3A4E] opacity-0 group-hover:opacity-100">
                                                /
                                            </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
                                Division 02
                            </h4>
                            <ul className="space-y-3">
                                {navigation.services.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-xs hover:text-[#9B3A4E] transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-1 text-[#9B3A4E] opacity-0 group-hover:opacity-100">
                                                /
                                            </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
                                Corporate
                            </h4>
                            <ul className="space-y-3">
                                {navigation.company.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-xs hover:text-[#9B3A4E] transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-1 text-[#9B3A4E] opacity-0 group-hover:opacity-100">
                                                /
                                            </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-white mb-6">
                                Support
                            </h4>
                            <ul className="space-y-3">
                                {navigation.support.map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="text-xs hover:text-[#9B3A4E] transition-colors flex items-center group">
                                            <span className="w-0 group-hover:w-2 overflow-hidden transition-all duration-300 mr-0 group-hover:mr-1 text-[#9B3A4E] opacity-0 group-hover:opacity-100">
                                                /
                                            </span>
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-neutral-900 bg-[#050505]">
                <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
                    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-4">
                        {/* Copyright */}
                        <div className="text-[10px] text-neutral-600 font-mono">
                            <span>
                                &copy; {new Date().getFullYear()} {brandNameLegal}. SYSTEMS OPERATIONAL.
                            </span>
                        </div>

                        {/* Legal Links & Social */}
                        <div className="flex items-center gap-6">
                            <Link href="/privacy" className="text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-wider">
                                Privacy Protocol
                            </Link>
                            <Link href="/terms" className="text-[10px] text-neutral-500 hover:text-white transition-colors uppercase tracking-wider">
                                Terms of Service
                            </Link>

                            <div className="h-3 w-px bg-neutral-800 hidden md:block" />

                            <div className="flex items-center gap-4">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className="text-neutral-600 hover:text-[#9B3A4E] transition-colors"
                                        aria-label={social.name}
                                    >
                                        <social.icon className="w-4 h-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}