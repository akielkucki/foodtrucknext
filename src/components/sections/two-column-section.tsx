"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TwoColumnSectionProps {
    children: React.ReactNode;
    media: React.ReactNode;
    mediaPosition?: "left" | "right";
    verticalAlign?: "top" | "center" | "bottom";
    gap?: "sm" | "md" | "lg" | "xl";
    animate?: boolean;
    className?: string;
}

const gapClasses = {
    sm: "gap-8",
    md: "gap-12",
    lg: "gap-16",
    xl: "gap-20",
};

const alignClasses = {
    top: "items-start",
    center: "items-center",
    bottom: "items-end",
};

export function TwoColumnSection({
    children,
    media,
    mediaPosition = "right",
    verticalAlign = "center",
    gap = "lg",
    animate = true,
    className,
}: TwoColumnSectionProps) {
    const ContentWrapper = animate ? motion.div : "div";
    const MediaWrapper = animate ? motion.div : "div";

    const contentAnimation = animate
        ? {
              initial: { opacity: 0, x: mediaPosition === "right" ? -20 : 20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5 },
          }
        : {};

    const mediaAnimation = animate
        ? {
              initial: { opacity: 0, x: mediaPosition === "right" ? 20 : -20 },
              whileInView: { opacity: 1, x: 0 },
              viewport: { once: true },
              transition: { duration: 0.5, delay: 0.1 },
          }
        : {};

    return (
        <div
            className={cn(
                "grid grid-cols-1 lg:grid-cols-2",
                gapClasses[gap],
                alignClasses[verticalAlign],
                className
            )}
        >
            {mediaPosition === "left" && (
                <MediaWrapper {...mediaAnimation}>{media}</MediaWrapper>
            )}
            <ContentWrapper
                {...contentAnimation}
                className={mediaPosition === "left" ? "order-2 lg:order-none" : ""}
            >
                {children}
            </ContentWrapper>
            {mediaPosition === "right" && (
                <MediaWrapper {...mediaAnimation}>{media}</MediaWrapper>
            )}
        </div>
    );
}
