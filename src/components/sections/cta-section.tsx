"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface CTAAction {
    label: string;
    href: string;
}

interface CTASectionProps {
    title: string;
    description?: string;
    primaryAction: CTAAction;
    secondaryAction?: CTAAction;
    variant?: "default" | "dark";
    alignment?: "left" | "center";
    className?: string;
}

export function CTASection({
    title,
    description,
    primaryAction,
    secondaryAction,
    variant = "default",
    alignment = "center",
    className,
}: CTASectionProps) {
    const isDark = variant === "dark";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "rounded-2xl py-16 px-10",
                isDark ? "bg-slate-900" : "bg-slate-50 border border-slate-200",
                alignment === "center" && "text-center",
                className
            )}
        >
            <h3
                className={cn(
                    "text-2xl font-bold sm:text-3xl",
                    isDark ? "text-white" : "text-slate-900"
                )}
            >
                {title}
            </h3>
            {description && (
                <p
                    className={cn(
                        "mt-4 max-w-2xl text-base",
                        isDark ? "text-slate-400" : "text-slate-600",
                        alignment === "center" && "mx-auto"
                    )}
                >
                    {description}
                </p>
            )}
            <div
                className={cn(
                    "mt-8 flex flex-col gap-4 sm:flex-row",
                    alignment === "center" && "justify-center"
                )}
            >
                <Link
                    href={primaryAction.href}
                    className={cn(
                        "inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-semibold transition-all",
                        isDark
                            ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                            : "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)]"
                    )}
                >
                    {primaryAction.label}
                    <ArrowRight className="h-5 w-5" />
                </Link>
                {secondaryAction && (
                    <Link
                        href={secondaryAction.href}
                        className={cn(
                            "inline-flex items-center justify-center rounded-lg border-2 px-8 py-4 font-semibold transition-all",
                            isDark
                                ? "border-white/20 text-white hover:bg-white/10"
                                : "border-slate-300 text-slate-900 hover:bg-slate-100"
                        )}
                    >
                        {secondaryAction.label}
                    </Link>
                )}
            </div>
        </motion.div>
    );
}
