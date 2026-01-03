import * as React from "react"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// --- Utility to merge classes safely ---
// If you already have a 'lib/utils.ts' with a 'cn' function, you can import it instead.
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

// --- Button Types & Variants ---
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline' | 'ghost' | 'secondary' | 'link' | 'destructive';
    size?: 'default' | 'sm' | 'lg' | 'icon';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "default", size = "default", ...props }, ref) => {

        // 1. Base styles (always applied)
        const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50"

        // 2. Variant styles
        const variants = {
            default: "bg-[#F5A623] text-white shadow hover:bg-orange-600",
            destructive: "bg-red-500 text-neutral-50 shadow-sm hover:bg-red-500/90",
            outline: "border border-neutral-200 bg-transparent shadow-sm hover:bg-neutral-100 hover:text-neutral-900",
            secondary: "bg-neutral-100 text-neutral-900 shadow-sm hover:bg-neutral-100/80",
            ghost: "hover:bg-neutral-100 hover:text-neutral-900",
            link: "text-neutral-900 underline-offset-4 hover:underline",
        }

        // 3. Size styles
        const sizes = {
            default: "h-9 px-4 py-2",
            sm: "h-8 rounded-md px-3 text-xs",
            lg: "h-10 rounded-full px-8", // Rounded full looks nice for large CTAs
            icon: "h-9 w-9",
        }

        return (
            <button
                className={cn(
                    baseStyles,
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }