import { cn } from "@/lib/utils";

interface GlassCardProps {
    children: React.ReactNode;
    variant?: "light" | "dark";
    blur?: "sm" | "md" | "lg" | "xl";
    border?: boolean;
    padding?: "none" | "sm" | "md" | "lg";
    className?: string;
}

const blurClasses = {
    sm: "backdrop-blur-sm",
    md: "backdrop-blur-md",
    lg: "backdrop-blur-lg",
    xl: "backdrop-blur-xl",
};

const paddingClasses = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
};

export function GlassCard({
    children,
    variant = "dark",
    blur = "xl",
    border = true,
    padding = "md",
    className,
}: GlassCardProps) {
    return (
        <div
            className={cn(
                "rounded-2xl transition-all",
                blurClasses[blur],
                paddingClasses[padding],
                variant === "dark" && "bg-slate-900/60 shadow-2xl shadow-[color:rgba(150,56,79,0.2)]",
                variant === "light" && "bg-white/80 shadow-xl",
                border && variant === "dark" && "border border-slate-700/50",
                border && variant === "light" && "border border-white/50",
                className
            )}
        >
            {children}
        </div>
    );
}

// Inner card for nested glass effect
export function GlassCardInner({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "rounded-xl bg-slate-800/50 p-6 border border-slate-700/30",
                className
            )}
        >
            {children}
        </div>
    );
}
