"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { brandName } from "@/lib/shopify";
import {
    ShoppingCart,
    Menu,
    X,
    Phone,
    ChevronRight,
    Zap
} from "lucide-react"; // Using lucide-react for consistency with other pages
import { CartContext } from "@/components/CartContext";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Current Inventory", href: "/current-inventory" },
    { name: "Services", href: "/services" },
    { name: "Parts", href: "/parts" },
    { name: "Gallery", href: "/gallery" },
    { name: "Financing", href: "/financing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

interface NavbarProps {
    variant?: "dark" | "light"; // Keeping prop for compatibility, though dark is now default style
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const cart = useContext(CartContext);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 20 && !isScrolled) setIsScrolled(true);
        if (latest <= 20 && isScrolled) setIsScrolled(false);
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    return (
        <>
            <motion.header
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-300 border-b",
                    isScrolled
                        ? "bg-[#050505]/80 backdrop-blur-xl border-white/5 py-2"
                        : "bg-transparent border-transparent py-4"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: "circOut" }}
            >
                <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-6 lg:px-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        className="relative z-50 flex items-center gap-2 group"
                    >
                        {/* Technical Logo Mark */}
                        <div className="h-8 w-8 bg-[#9B3A4E] rounded flex items-center justify-center text-white font-bold text-xs shadow-[0_0_15px_rgba(155,58,78,0.4)] group-hover:shadow-[0_0_25px_rgba(155,58,78,0.6)] transition-shadow duration-300">
                            <span className="font-mono">R</span>VC
                        </div>

                        <div className="flex flex-col">
                             <span className="text-lg font-bold tracking-tight text-white leading-none">
                                {brandName?.split("_")[0] || "FOOD"}
                                 <span className="text-[#9B3A4E]">{brandName?.split("_")[1] || ""}</span>
                            </span>
                            <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 font-medium">
                                Customizations
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 lg:flex bg-neutral-900/50 rounded-full border border-white/5 p-1 px-2 backdrop-blur-sm">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-1.5 text-xs font-medium uppercase tracking-wide transition-all rounded-full",
                                        isActive
                                            ? "text-white bg-white/10"
                                            : "text-neutral-400 hover:text-white hover:bg-white/5"
                                    )}
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-6 lg:flex">
                        {/* Cart */}
                        <Link
                            href="/cart"
                            className="group relative flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <AnimatePresence>
                                {(cart?.cart?.totalQuantity ?? 0) > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -right-2 -top-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#9B3A4E] text-[9px] font-bold text-white shadow-lg shadow-red-900/50"
                                    >
                                        {cart?.cart?.totalQuantity}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>

                        {/* CTA Button */}
                        <Link
                            href="/quote"
                            className="group relative overflow-hidden rounded bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-black transition-transform hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Build Quote <Zap className="w-3 h-3 text-[#9B3A4E]" />
                            </span>
                            <div className="absolute inset-0 bg-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                            isOpen
                                ? "bg-neutral-800 text-white"
                                : "bg-neutral-900/50 text-white border border-white/10"
                        )}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        <AnimatePresence mode="wait">
                            {isOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[#050505]/95 backdrop-blur-xl lg:hidden border-t border-white/5"
                    >
                        <div className="flex h-full flex-col px-6 pb-8 pt-24 overflow-y-auto">

                            {/* System Status Indicator */}
                            <div className="flex items-center gap-2 mb-8 px-2">
                                <span className="relative flex h-2 w-2">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                                </span>
                                <span className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest">System Online</span>
                            </div>

                            <nav className="flex flex-col space-y-2">
                                {navigation.map((item, index) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.05 + index * 0.03 }}
                                    >
                                        <Link
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "group flex items-center justify-between py-4 text-xl font-light tracking-tight border-b border-neutral-800 transition-colors",
                                                pathname === item.href
                                                    ? "text-white"
                                                    : "text-neutral-500 hover:text-white"
                                            )}
                                        >
                                            {item.name}
                                            <ChevronRight className={cn(
                                                "w-4 h-4 transition-all",
                                                pathname === item.href ? "text-[#9B3A4E] opacity-100" : "opacity-0 group-hover:opacity-100 group-hover:translate-x-1"
                                            )} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </nav>

                            <div className="mt-auto pt-8 space-y-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <Link
                                        href="/cart"
                                        onClick={() => setIsOpen(false)}
                                        className="flex w-full items-center justify-between rounded-lg bg-neutral-900 border border-neutral-800 p-4 transition-colors hover:border-[#9B3A4E]/50"
                                    >
                                        <span className="flex items-center gap-3 text-sm font-bold text-white uppercase tracking-wider">
                                            <ShoppingCart className="text-[#9B3A4E] w-4 h-4" />
                                            Active Cart
                                        </span>
                                        <span className="flex h-6 w-6 items-center justify-center rounded bg-[#9B3A4E] text-xs font-mono text-white">
                                            {cart?.cart?.totalQuantity ?? 0}
                                        </span>
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.45 }}
                                >
                                    <Link
                                        href="/quote"
                                        onClick={() => setIsOpen(false)}
                                        className="block w-full rounded-lg bg-white p-4 text-center text-sm font-bold uppercase tracking-widest text-black transition-transform active:scale-95"
                                    >
                                        Start Commission
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6 text-center"
                                >
                                    <a
                                        href="tel:+18005550123"
                                        className="flex items-center justify-center gap-2 text-xs font-mono text-neutral-500 hover:text-[#9B3A4E] transition-colors"
                                    >
                                        <Phone className="w-3 h-3" />
                                        <span>(800) 555-0123 // HQ LINE</span>
                                    </a>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}