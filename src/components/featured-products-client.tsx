"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShoppingCart, ScanLine, Tag } from "lucide-react";

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
        <section className="relative w-full bg-[#0a0d14] py-24 lg:py-32 border-t border-neutral-900 overflow-hidden">
            {/* Background Grid Texture */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">

                {/* Header Section */}
                <div className="mb-16 md:flex md:justify-between md:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <div className="flex items-center gap-2 mb-4">
                            <span className="w-1.5 h-1.5 bg-[#9B3A4E] rounded-full animate-pulse" />
                            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">
                                Supply Chain
                            </span>
                        </div>
                        <h2 className="text-3xl font-light text-white sm:text-4xl">
                            Featured <span className="font-bold text-white">Products</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 md:mt-0"
                    >
                        <Link
                            href="/parts"
                            className="text-xs font-mono text-[#9B3A4E] hover:text-white transition-colors uppercase tracking-widest flex items-center gap-2 group"
                        >
                            View Full Catalog
                            <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                    </motion.div>
                </div>

                {/* Products Grid */}
                <div className="grid gap-8 md:grid-cols-3">
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
                                className="group relative block overflow-hidden rounded-xl border border-neutral-800 bg-[#11151d] transition-all duration-500 hover:border-[#9B3A4E]/50 hover:shadow-[0_0_30px_rgba(155,58,78,0.15)]"
                            >
                                {/* Image Container */}
                                <div className="aspect-square w-full relative overflow-hidden bg-neutral-900 border-b border-neutral-800">
                                    <Image
                                        src={product.image}
                                        alt={product.title}
                                        fill
                                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                    />

                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#11151d] via-transparent to-transparent opacity-60" />

                                    {/* Quick Action Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                                        <div className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-xs font-bold uppercase tracking-widest transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <ScanLine className="w-4 h-4" />
                                            Inspect
                                        </div>
                                    </div>

                                    {/* Type Tag */}
                                    {product.productType && (
                                        <div className="absolute top-3 left-3 bg-[#11151d]/90 backdrop-blur-sm border border-neutral-800 px-2 py-1 rounded">
                                            <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-400">
                                                {product.productType}
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Details Container */}
                                <div className="p-6 relative">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className="text-sm font-medium text-white group-hover:text-[#9B3A4E] transition-colors line-clamp-2 pr-4 min-h-[40px]">
                                            {product.title}
                                        </h3>
                                        <div className="flex-shrink-0">
                                            <Tag className="w-3 h-3 text-neutral-600" />
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-neutral-800 flex items-center justify-between">
                                        <div>
                                            <p className="text-[9px] text-neutral-500 uppercase tracking-widest mb-1">Unit Price</p>
                                            <p className="text-lg font-mono font-bold text-white">
                                                {product.price}
                                            </p>
                                        </div>
                                        <div className="h-8 w-8 rounded bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-500 group-hover:bg-[#9B3A4E] group-hover:text-white group-hover:border-[#9B3A4E] transition-all">
                                            <ShoppingCart className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="mt-16 text-center border-t border-neutral-900 pt-12">
                    <p className="text-neutral-500 text-sm mb-6">Need specialized fabrication parts not listed here?</p>
                    <Link
                        href="/parts"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-[#9B3A4E] text-white text-sm font-bold uppercase tracking-widest overflow-hidden hover:bg-[#7a2e3d] transition-colors"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Access Inventory <ArrowRight className="w-4 h-4" />
                        </span>
                    </Link>
                </div>
            </div>
        </section>
    );
}