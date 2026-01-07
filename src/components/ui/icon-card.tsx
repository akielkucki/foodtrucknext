"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface IconCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    href?: string;
    variant?: "default" | "bordered";
    iconVariant?: "default" | "primary";
    showArrow?: boolean;
    className?: string;
}

const cardVariantClasses = {
    default: "bg-white border border-slate-200 hover:shadow-lg hover:border-[var(--color-primary)]/30",
    bordered: "bg-transparent border border-slate-200 hover:bg-slate-50 hover:border-[var(--color-primary)]/30",
};

const iconVariantClasses = {
    default: "bg-slate-100 text-slate-600",
    primary: "bg-[var(--color-primary)] text-white",
};

export function IconCard({
    icon,
    title,
    description,
    href,
    variant = "default",
    iconVariant = "default",
    showArrow = false,
    className,
}: IconCardProps) {
    const content = (
        <>
            <div
                className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-lg transition-colors",
                    iconVariantClasses[iconVariant],
                    "group-hover:bg-[var(--color-primary)] group-hover:text-white"
                )}
            >
                {icon}
            </div>
            <h3 className="mt-4 text-lg font-bold text-slate-900">
                {title}
            </h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {description}
            </p>
            {showArrow && (
                <div className="mt-4 flex items-center text-sm font-semibold text-[var(--color-primary)]">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
            )}
        </>
    );

    const cardClasses = cn(
        "group relative rounded-xl p-6 transition-all duration-300",
        cardVariantClasses[variant],
        href && "cursor-pointer",
        className
    );

    if (href) {
        return (
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
            >
                <Link href={href} className={cardClasses}>
                    {content}
                </Link>
            </motion.div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cardClasses}
        >
            {content}
        </motion.div>
    );
}
