"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionHeaderProps {
    title: string;
    titleAccent?: string;
    subtitle?: string;
    alignment?: "left" | "center" | "right";
    size?: "sm" | "md" | "lg";
    dark?: boolean;
    className?: string;
}

const sizeStyles = {
    sm: {
        title: "text-2xl sm:text-3xl",
        subtitle: "text-base mt-3",
    },
    md: {
        title: "text-3xl sm:text-4xl",
        subtitle: "text-lg mt-4",
    },
    lg: {
        title: "text-4xl sm:text-5xl md:text-6xl",
        subtitle: "text-lg sm:text-xl mt-6",
    },
};

const alignmentStyles = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
};

export function SectionHeader({
    title,
    titleAccent,
    subtitle,
    alignment = "center",
    size = "md",
    dark = false,
    className,
}: SectionHeaderProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={cn("max-w-3xl mb-12", alignmentStyles[alignment], className)}
        >
            <h2
                className={cn(
                    "font-bold tracking-tight",
                    dark ? "text-white" : "text-neutral-900",
                    sizeStyles[size].title
                )}
            >
                {title}
                {titleAccent && (
                    <span className={dark ? "text-green-400" : "text-green-800"}>
                        {" "}{titleAccent}
                    </span>
                )}
            </h2>
            {subtitle && (
                <p
                    className={cn(
                        "leading-relaxed",
                        dark ? "text-neutral-400" : "text-neutral-600",
                        sizeStyles[size].subtitle
                    )}
                >
                    {subtitle}
                </p>
            )}
        </motion.div>
    );
}
