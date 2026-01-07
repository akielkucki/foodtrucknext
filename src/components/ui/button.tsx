"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type HTMLMotionProps } from "framer-motion";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref"> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const baseStyles =
            "inline-flex items-center justify-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary-dark)] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

        const variants = {
            primary:
                "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-dark)] active:bg-[var(--color-primary-dark)]",
            secondary:
                "bg-slate-900 text-white hover:bg-black active:bg-slate-800",
            outline:
                "border-2 border-slate-900 bg-transparent text-slate-900 hover:bg-slate-900 hover:text-white",
            ghost: "text-slate-900 hover:bg-slate-100 active:bg-slate-200",
            link: "text-[var(--color-primary)] underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-11 px-6 text-sm rounded-lg",
            sm: "h-9 px-4 text-sm rounded-md",
            lg: "h-14 px-10 text-base rounded-lg",
            icon: "h-11 w-11 rounded-lg",
        };

        return (
            <motion.button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                whileTap={{ scale: 0.98 }}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
