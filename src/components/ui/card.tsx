"use client";

import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";
import type React from "react";

interface CardProps extends Omit<HTMLMotionProps<"div">, "ref"> {
    variant?: "default" | "bordered" | "elevated";
    padding?: "none" | "sm" | "md" | "lg";
    hover?: boolean;
}

const variantClasses = {
    default: "bg-white border border-neutral-200",
    bordered: "bg-transparent border-2 border-neutral-900",
    elevated: "bg-white border border-neutral-100 shadow-lg",
};

const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function Card({
    children,
    variant = "default",
    padding = "md",
    hover = false,
    className,
    ...props
}: CardProps & { children: React.ReactNode }) {
    return (
        <motion.div
            className={cn(
                "rounded-xl transition-all duration-300",
                variantClasses[variant],
                paddingClasses[padding],
                hover && "hover:shadow-xl hover:border-green-700/20 hover:-translate-y-1",
                className
            )}
            {...props}
        >
            {children}
        </motion.div>
    );
}

export function CardHeader({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={cn("mb-4", className)}>{children}</div>;
}

export function CardTitle({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <h3 className={cn("text-xl font-bold text-neutral-900", className)}>
            {children}
        </h3>
    );
}

export function CardDescription({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <p className={cn("text-neutral-600 mt-2", className)}>{children}</p>
    );
}

export function CardContent({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return <div className={cn(className)}>{children}</div>;
}

export function CardFooter({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div className={cn("mt-6 flex items-center gap-4", className)}>
            {children}
        </div>
    );
}
