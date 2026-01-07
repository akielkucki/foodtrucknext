"use client";

import { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { brandName } from "@/lib/shopify";
import { HugeiconsIcon } from "@hugeicons/react";
import { ShoppingCart02Icon, Menu01Icon, Cancel01Icon } from "@hugeicons/core-free-icons";
import { CartContext } from "@/components/CartContext";
import { cn } from "@/lib/utils";

const navigation = [
    { name: "Home", href: "/" },
    { name: "Custom Builds", href: "/custom-builds" },
    { name: "Services", href: "/services" },
    { name: "Parts", href: "/parts" },
    { name: "Gallery", href: "/gallery" },
    { name: "Financing", href: "/financing" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

interface NavbarProps {
    variant?: "dark" | "light";
}

export default function Navbar({ variant = "dark" }: NavbarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const cart = useContext(CartContext);
    const pathname = usePathname();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 50 && !isScrolled) setIsScrolled(true);
        if (latest <= 50 && isScrolled) setIsScrolled(false);
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

    const isDark = variant === "dark";

    return (
        <>
            <motion.header
                className={cn(
                    "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
                    isScrolled
                        ? "bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm"
                        : isDark
                        ? "bg-transparent"
                        : "bg-white"
                )}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={cn(
                            "relative z-50 text-xl font-black tracking-tight",
                            isScrolled || !isDark ? "text-slate-900" : "text-white"
                        )}
                    >
                        {brandName.split("_").map((item, i) => (
                            <span key={i} className={i !== 0 ? "text-[var(--color-primary)] ml-0.5" : ""}>
                                {item}
                            </span>
                        ))}
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden items-center gap-1 lg:flex">
                        {navigation.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className={cn(
                                        "relative px-4 py-2 text-sm font-medium transition-colors",
                                        isActive
                                            ? isScrolled || !isDark
                                                ? "text-[var(--color-primary)]"
                                                : "text-white"
                                            : isScrolled || !isDark
                                            ? "text-slate-600 hover:text-slate-900"
                                            : "text-white/80 hover:text-white"
                                    )}
                                >
                                    {isActive && (
                                        <motion.span
                                            layoutId="activeNav"
                                            className={cn(
                                                "absolute inset-0 rounded-lg",
                                                isScrolled || !isDark
                                                    ? "bg-[var(--color-primary)]/10"
                                                    : "bg-white/10"
                                            )}
                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                        />
                                    )}
                                    <span className="relative">{item.name}</span>
                                </Link>
                            );
                        })}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden items-center gap-4 lg:flex">
                        <Link
                            href="/cart"
                            className={cn(
                                "group relative flex items-center justify-center p-2 transition-colors",
                                isScrolled || !isDark
                                    ? "text-slate-600 hover:text-slate-900"
                                    : "text-white/80 hover:text-white"
                            )}
                        >
                            <HugeiconsIcon icon={ShoppingCart02Icon} size={22} />
                            <AnimatePresence>
                                {(cart?.cart?.totalQuantity ?? 0) > 0 && (
                                    <motion.span
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        exit={{ scale: 0 }}
                                        className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--color-primary)] text-[10px] font-bold text-white"
                                    >
                                        {cart?.cart?.totalQuantity}
                                    </motion.span>
                                )}
                            </AnimatePresence>
                        </Link>
                        <Link
                            href="/quote"
                            className="rounded-lg bg-[var(--color-primary)] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                        >
                            Get a Quote
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={cn(
                            "relative z-50 flex h-10 w-10 items-center justify-center rounded-lg transition-colors lg:hidden",
                            isOpen
                                ? "bg-white/10 text-white"
                                : isScrolled || !isDark
                                ? "bg-slate-100 text-slate-900"
                                : "bg-white/10 text-white"
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
                                    <HugeiconsIcon icon={Cancel01Icon} size={20} />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                >
                                    <HugeiconsIcon icon={Menu01Icon} size={20} />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-40 bg-slate-950 lg:hidden"
                    >
                        <div className="flex h-full flex-col px-6 pb-8 pt-24 overflow-y-auto">
                            <nav className="flex flex-col space-y-1">
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
                                                "block py-3 text-2xl font-bold transition-colors",
                                                pathname === item.href
                                                    ? "text-[var(--color-primary-light)]"
                                                    : "text-slate-400 hover:text-white"
                                            )}
                                        >
                                            {item.name}
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
                                        className="flex w-full items-center justify-between rounded-xl bg-slate-900 p-4 transition-colors hover:bg-slate-800"
                                    >
                                        <span className="flex items-center gap-3 text-lg font-semibold text-white">
                                            <HugeiconsIcon icon={ShoppingCart02Icon} className="text-[var(--color-primary-light)]" size={24} />
                                            View Cart
                                        </span>
                                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-primary)] text-sm font-bold text-white">
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
                                        className="block w-full rounded-xl bg-[var(--color-primary)] p-4 text-center text-lg font-semibold text-white transition-colors hover:bg-[var(--color-primary-dark)]"
                                    >
                                        Get a Quote
                                    </Link>
                                </motion.div>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5 }}
                                    className="pt-6 text-center text-sm text-slate-500"
                                >
                                    <p>Need help?</p>
                                    <a
                                        href="tel:+18005550123"
                                        className="text-slate-400 hover:text-white transition-colors"
                                    >
                                        (800) 555-0123
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
