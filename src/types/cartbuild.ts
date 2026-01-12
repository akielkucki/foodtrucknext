type CartBuild = {
    id: string;
    clientName: string;
    model: string;
    status: "blueprint" | "production" | "delivered";
    price: string;
    lastUpdated: string;
    images: string[];
};