import { cn } from "@/lib/utils";

interface BadgeProps {
    children: React.ReactNode;
    variant?: "default" | "primary" | "success" | "outline";
    size?: "sm" | "md";
    className?: string;
}

const variantClasses = {
    default: "bg-neutral-100 text-neutral-600 border-neutral-200",
    primary: "bg-green-50 text-green-800 border-green-200",
    success: "bg-green-50 text-green-800 border-green-200",
    outline: "bg-transparent text-neutral-600 border-neutral-300",
};

const sizeClasses = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-4 py-1.5 text-sm",
};

export function Badge({
    children,
    variant = "default",
    size = "md",
    className,
}: BadgeProps) {
    return (
        <span
            className={cn(
                "inline-flex items-center rounded-full border font-medium",
                variantClasses[variant],
                sizeClasses[size],
                className
            )}
        >
            {children}
        </span>
    );
}
