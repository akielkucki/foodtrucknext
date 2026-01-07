import { cn } from "@/lib/utils";
import type { ThemeMode } from "@/lib/theme";

interface PageWrapperProps {
    theme?: ThemeMode;
    children: React.ReactNode;
    className?: string;
}

export function PageWrapper({
    theme = "light",
    children,
    className,
}: PageWrapperProps) {
    return (
        <div
            data-theme={theme}
            className={cn(
                "min-h-screen bg-background text-foreground",
                className
            )}
        >
            {children}
        </div>
    );
}
