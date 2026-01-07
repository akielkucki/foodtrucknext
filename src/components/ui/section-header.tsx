"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    label?: string;
    title: string;
    titleAccent?: string;
    description?: string;
    alignment?: "left" | "center";
    size?: "sm" | "md" | "lg";
    dark?: boolean;
    className?: string;
}

const sizeStyles = {
    sm: {
        title: "text-2xl sm:text-3xl",
        description: "text-base mt-3 max-w-xl",
    },
    md: {
        title: "text-3xl sm:text-4xl lg:text-5xl",
        description: "text-lg mt-4 max-w-2xl",
    },
    lg: {
        title: "text-4xl sm:text-5xl lg:text-6xl",
        description: "text-lg sm:text-xl mt-6 max-w-3xl",
    },
};

export function SectionHeader({
    label,
    title,
    titleAccent,
    description,
    alignment = "center",
    size = "md",
    dark = false,
    className,
}: SectionHeaderProps) {
    const isCenter = alignment === "center";

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn(
                "mb-12 lg:mb-16",
                isCenter && "text-center",
                className
            )}
        >
            {label && (
                <span
                    className={cn(
                        "inline-block text-sm font-semibold uppercase tracking-widest mb-4",
                        dark ? "text-[var(--color-primary-light)]" : "text-[var(--color-primary)]"
                    )}
                >
                    {label}
                </span>
            )}
            <h2
                className={cn(
                    "font-bold tracking-tight",
                    dark ? "text-white" : "text-slate-900",
                    sizeStyles[size].title
                )}
            >
                {title}
                {titleAccent && (
                    <span className={dark ? "text-[var(--color-primary-light)]" : "text-[var(--color-primary)]"}>
                        {" "}{titleAccent}
                    </span>
                )}
            </h2>
            {description && (
                <p
                    className={cn(
                        "leading-relaxed",
                        dark ? "text-slate-300" : "text-slate-600",
                        sizeStyles[size].description,
                        isCenter && "mx-auto"
                    )}
                >
                    {description}
                </p>
            )}
        </motion.div>
    );
}
