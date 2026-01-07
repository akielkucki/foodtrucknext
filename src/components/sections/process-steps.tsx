"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ProcessStep {
    step?: string | number;
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface ProcessStepsProps {
    steps: ProcessStep[];
    variant?: "numbered" | "icons";
    columns?: 2 | 3 | 4 | 6;
    showNumbers?: boolean;
    animate?: boolean;
    className?: string;
}

const columnClasses = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-3",
    4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    6: "grid-cols-2 md:grid-cols-3 lg:grid-cols-6",
};

export function ProcessSteps({
    steps,
    variant = "numbered",
    columns = 4,
    showNumbers = true,
    animate = true,
    className,
}: ProcessStepsProps) {
    return (
        <div className={cn("grid gap-6 md:gap-8", columnClasses[columns], className)}>
            {steps.map((step, index) => {
                const Wrapper = animate ? motion.div : "div";
                const animationProps = animate
                    ? {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: index * 0.1 },
                      }
                    : {};

                return (
                    <Wrapper
                        key={index}
                        {...animationProps}
                        className="relative group"
                    >
                        {/* Step indicator */}
                        {variant === "numbered" && showNumbers && (
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold text-lg transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                {step.step ?? index + 1}
                            </div>
                        )}
                        {variant === "icons" && step.icon && (
                            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-500 transition-colors group-hover:bg-[var(--color-primary)] group-hover:text-white">
                                {step.icon}
                            </div>
                        )}

                        {/* Content */}
                        <h3 className="text-lg font-bold text-slate-900 mb-2">
                            {step.title}
                        </h3>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {step.description}
                        </p>

                        {/* Connector line (optional visual) */}
                        {index < steps.length - 1 && columns <= 4 && (
                            <div className="hidden lg:block absolute top-6 left-[calc(100%+1rem)] w-[calc(100%-3rem)] h-px bg-slate-200 -z-10" />
                        )}
                    </Wrapper>
                );
            })}
        </div>
    );
}
