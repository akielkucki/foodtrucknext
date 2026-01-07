"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import { motion } from "framer-motion";

interface Testimonial {
    quote: string;
    author: string;
    role?: string;
    company?: string;
    avatar?: string;
    rating?: number;
}

interface TestimonialsProps {
    testimonials: Testimonial[];
    variant?: "cards" | "single" | "minimal";
    columns?: 1 | 2 | 3;
    animate?: boolean;
    className?: string;
}

const columnClasses = {
    1: "grid-cols-1 max-w-2xl mx-auto",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
};

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={cn(
                        "h-4 w-4",
                        i < rating ? "text-amber-400 fill-amber-400" : "text-slate-200"
                    )}
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

function TestimonialCard({
    testimonial,
    variant,
    animate,
    index,
}: {
    testimonial: Testimonial;
    variant: TestimonialsProps["variant"];
    animate: boolean;
    index: number;
}) {
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
            {...animationProps}
            className={cn(
                "relative rounded-2xl p-6 md:p-8",
                variant === "cards" && "bg-white border border-slate-200 shadow-sm",
                variant === "minimal" && "bg-slate-50 border border-slate-100"
            )}
        >
            {/* Quote icon */}
            <svg
                className="absolute top-6 right-6 h-8 w-8 text-[var(--color-primary)]/10"
                fill="currentColor"
                viewBox="0 0 32 32"
            >
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm18 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>

            {testimonial.rating && (
                <div className="mb-4">
                    <StarRating rating={testimonial.rating} />
                </div>
            )}

            <blockquote className="text-slate-900 leading-relaxed">
                "{testimonial.quote}"
            </blockquote>

            <div className="mt-6 flex items-center gap-4">
                {testimonial.avatar && (
                    <div className="relative h-12 w-12 overflow-hidden rounded-full bg-slate-100">
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="object-cover"
                        />
                    </div>
                )}
                <div>
                    <div className="font-semibold text-slate-900">
                        {testimonial.author}
                    </div>
                    {(testimonial.role || testimonial.company) && (
                        <div className="text-sm text-slate-600">
                            {testimonial.role}
                            {testimonial.role && testimonial.company && " at "}
                            {testimonial.company}
                        </div>
                    )}
                </div>
            </div>
        </Wrapper>
    );
}

export function Testimonials({
    testimonials,
    variant = "cards",
    columns = 3,
    animate = true,
    className,
}: TestimonialsProps) {
    return (
        <div className={cn("grid gap-6 md:gap-8", columnClasses[columns], className)}>
            {testimonials.map((testimonial, index) => (
                <TestimonialCard
                    key={index}
                    testimonial={testimonial}
                    variant={variant}
                    animate={animate}
                    index={index}
                />
            ))}
        </div>
    );
}
