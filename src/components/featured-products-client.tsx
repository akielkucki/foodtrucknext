"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeader } from "@/components/ui/section-header";
import { ArrowRight } from "lucide-react";

type FeaturedProduct = {
    title: string;
    handle: string;
    image: string;
    price: string;
    productType: string;
};

export default function FeaturedProductsClient({
    products,
}: {
    products: FeaturedProduct[];
}) {
    return (
        <section className="w-full bg-white py-24 lg:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <SectionHeader
                    label="Shop"
                    title="Featured Products"
                    description="Premium equipment and parts for your mobile kitchen"
                />

                <div className="grid gap-6 md:grid-cols-3">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.handle}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                        >
                            <Link
                                href={`/products/${product.handle}`}
                                className="group block overflow-hidden rounded-xl border border-slate-200 bg-white transition-all duration-300 hover:border-[var(--color-primary)]/30 hover:shadow-lg"
                            >
                                <div className="aspect-square w-full relative overflow-hidden bg-slate-100">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                </div>
                                <div className="p-5">
                                    {product.productType && (
                                        <span className="inline-block mb-2 text-xs font-semibold uppercase tracking-wide text-[var(--color-primary)]">
                                            {product.productType}
                                        </span>
                                    )}
                                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[var(--color-primary)] transition-colors line-clamp-2">
                                        {product.title}
                                    </h3>
                                    <p className="mt-2 text-lg font-semibold text-slate-700">
                                        {product.price}
                                    </p>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link
                        href="/parts"
                        className="inline-flex items-center gap-2 rounded-lg bg-slate-900 px-8 py-4 text-base font-semibold text-white transition-colors hover:bg-black"
                    >
                        View All Products
                        <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
