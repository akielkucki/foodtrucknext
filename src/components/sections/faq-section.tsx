"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface FAQ {
    question: string;
    answer: string;
}

interface FAQSectionProps {
    faqs: FAQ[];
    columns?: 1 | 2;
    variant?: "cards" | "minimal" | "bordered";
    animate?: boolean;
    className?: string;
}

const columnClasses = {
    1: "grid-cols-1 max-w-3xl mx-auto",
    2: "grid-cols-1 md:grid-cols-2",
};

const variantClasses = {
    cards: "bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[var(--color-primary)]/30",
    minimal: "bg-slate-50 hover:bg-slate-100",
    bordered: "border border-slate-200 hover:border-[var(--color-primary)]/30 bg-transparent",
};

export function FAQSection({
    faqs,
    columns = 2,
    variant = "cards",
    animate = true,
    className,
}: FAQSectionProps) {
    return (
        <div className={cn("grid gap-6", columnClasses[columns], className)}>
            {faqs.map((faq, index) => {
                const Wrapper = animate ? motion.div : "div";
                const animationProps = animate
                    ? {
                          initial: { opacity: 0, y: 20 },
                          whileInView: { opacity: 1, y: 0 },
                          viewport: { once: true },
                          transition: { duration: 0.4, delay: index * 0.05 },
                      }
                    : {};

                return (
                    <Wrapper
                        key={index}
                        {...animationProps}
                        className={cn(
                            "rounded-xl p-6 transition-all",
                            variantClasses[variant]
                        )}
                    >
                        <h4 className="font-bold text-slate-900 mb-2">
                            {faq.question}
                        </h4>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            {faq.answer}
                        </p>
                    </Wrapper>
                );
            })}
        </div>
    );
}
