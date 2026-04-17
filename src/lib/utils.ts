import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Utility for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

// Food trucks are quoted per-build, not sold at a listed price.
// Returns true when a Shopify productType should hide its price in the UI.
const FOOD_TRUCK_TYPE_KEYWORDS = ["truck", "trailer", "cart", "van", "mobile kitchen"];
export function isFoodTruckProductType(productType?: string | null): boolean {
    if (!productType) return false;
    const t = productType.toLowerCase();
    return FOOD_TRUCK_TYPE_KEYWORDS.some((kw) => t.includes(kw));
}

// Contact Information
export const contactInfo = {
    address: {
        street: "2777 Emerald Street",
        city: "Philadelphia",
        state: "PA",
        full: "2777 Emerald Street, Philadelphia PA",
    },
    address2: {
        street: "7023 Beaver Dam Rd",
        city: "Levittown",
        state: "PA",
        full: "7023 Beaver Dam Rd, Levittown, PA"
    },
    address3: {
        street: "7024 Bristol pike",
        city: "Levittown",
        state: "PA",
        full: "7024 Bristol pike, Levittown, PA"
    },
    phone: {
        sales: "(267) 968-6618",
        salesHref: "tel:+12679686618",
    },
    email: {
        sales: "royalvending786@gmail.com",
        support: "royalvending786@gmail.com",
    },
    hours: {
        weekdays: "Mon-Fri: 8:30am - 5pm EST",
        weekends: "Closed",
    },
    social: {
        facebook: "#",
        instagram: "#",
        youtube: "#",
        linkedin: "#",
    },
};

export const faqs = [
    {
        question: "What are your shipping options?",
        answer: "We offer standard ground shipping (5-7 business days), expedited shipping (2-3 business days), and next-day delivery for urgent orders. Free shipping on orders over $500.",
    },
    {
        question: "What is your return policy?",
        answer: "We accept returns within 30 days of purchase for unused items in original packaging. Custom orders and electrical components may have different return terms.",
    },
    {
        question: "Do you offer warranties?",
        answer: "All new parts come with manufacturer warranties. We also offer extended warranty options on select equipment. Installation services include a 90-day labor warranty.",
    },
    {
        question: "Can you source hard-to-find parts?",
        answer: "Yes! Our extensive network of suppliers allows us to locate most parts, even discontinued items. Contact us with your part number or equipment details.",
    },
    {
        question: "How long does a custom build take?",
        answer: "Most custom builds take 8-12 weeks from design approval. We provide a detailed timeline during the quoting process.",
    },
    {
        question: "Do you ship nationwide?",
        answer: "Yes, we handle logistics for delivery to all 50 states. We also offer international shipping for parts orders.",
    },
    {
        question: "Can I bring my own truck?",
        answer: "Absolutely. We specialize in retrofitting customer-owned vehicles as well as providing turn-key solutions with our own inventory.",
    },
    {
        question: "Do you offer financing?",
        answer: "We partner with top industry lenders to offer competitive financing rates for builds over $20,000.",
    },
];
