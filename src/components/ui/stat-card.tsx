"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatCardProps {
    value: string | number;
    label: string;
    prefix?: string;
    suffix?: string;
    variant?: "default" | "accent" | "minimal" | "bordered";
    className?: string;
}

const variantClasses = {
    default: "bg-white border border-slate-200",
    accent: "bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20",
    minimal: "bg-transparent",
    bordered: "bg-transparent border border-slate-200",
};

export function StatCard({
    value,
    label,
    prefix,
    suffix,
    variant = "default",
    className,
}: StatCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className={cn(
                "rounded-xl p-6 text-center transition-all",
                variantClasses[variant],
                className
            )}
        >
            <div className="text-3xl font-bold text-slate-900 sm:text-4xl">
                {prefix}
                {value}
                {suffix}
            </div>
            <div className="mt-2 text-sm font-medium text-slate-600">
                {label}
            </div>
        </motion.div>
    );
}

interface StatsGridProps {
    stats: Omit<StatCardProps, "className">[];
    columns?: 2 | 3 | 4 | 5;
    variant?: StatCardProps["variant"];
    className?: string;
}

const columnClasses = {
    2: "grid-cols-2",
    3: "grid-cols-2 md:grid-cols-3",
    4: "grid-cols-2 md:grid-cols-4",
    5: "grid-cols-2 md:grid-cols-3 lg:grid-cols-5",
};

export function StatsGrid({
    stats,
    columns = 4,
    variant = "default",
    className,
}: StatsGridProps) {
    return (
        <div className={cn("grid gap-4 md:gap-6", columnClasses[columns], className)}>
            {stats.map((stat, index) => (
                <StatCard key={index} {...stat} variant={variant} />
            ))}
        </div>
    );
}
