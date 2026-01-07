// Theme configuration and types
// Color palette: White, Dark Green, Black

export type ThemeMode = "light" | "dark";

export interface ThemeConfig {
    mode: ThemeMode;
}

// Brand colors
export const colors = {
    primary: "#166534", // green-800
    primaryDark: "#14532d", // green-900
    primaryLight: "#22c55e", // green-500
    white: "#ffffff",
    black: "#0a0a0a",
    neutral: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
        950: "#0a0a0a",
    },
} as const;

// Theme-aware class mappings for components
export const themeClasses = {
    light: {
        page: "bg-white text-neutral-950",
        section: "bg-white",
        sectionAlt: "bg-neutral-50",
        card: "bg-white border-neutral-200",
        cardHover: "hover:shadow-lg hover:border-green-700/30",
        text: "text-neutral-950",
        textMuted: "text-neutral-600",
        textSubtle: "text-neutral-500",
        border: "border-neutral-200",
        input: "bg-white border-neutral-300 text-neutral-900 placeholder:text-neutral-400",
    },
    dark: {
        page: "bg-neutral-950 text-white",
        section: "bg-neutral-950",
        sectionAlt: "bg-neutral-900",
        card: "bg-neutral-900 border-neutral-800",
        cardHover: "hover:shadow-lg hover:border-green-600/30",
        text: "text-white",
        textMuted: "text-neutral-300",
        textSubtle: "text-neutral-400",
        border: "border-neutral-800",
        input: "bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-500",
    },
} as const;

// Get theme classes based on mode
export function getThemeClasses(mode: ThemeMode) {
    return themeClasses[mode];
}
