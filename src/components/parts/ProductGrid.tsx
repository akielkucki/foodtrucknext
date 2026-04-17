'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/ProductPrice";
import AddToCartButton from "@/components/addtocartbutton";
import { ProductNodeListItem } from "@/lib/shopify";
import { isFoodTruckProductType } from "@/lib/utils";
import { ShoppingCart, Eye, PackageX } from "lucide-react";

export default function ProductGrid({ products }: { products: ProductNodeListItem[] }) {
    if (products.length === 0) {
        return (
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl border border-dashed border-neutral-800 bg-neutral-900/20 text-neutral-500">
                <PackageX className="w-10 h-10 mb-4 opacity-50" />
                <p className="text-sm font-mono uppercase tracking-widest">No matching units found</p>
                <p className="text-xs text-neutral-600 mt-2">Adjust search parameters</p>
            </div>
        );
    }

    return (
        <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
            <AnimatePresence mode="popLayout">
                {products.map((p, i) => {
                    const hidePrice = isFoodTruckProductType(p.productType);
                    return (
                    <motion.div
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                        key={p.id}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-800 bg-[#11151d] transition-all duration-300 hover:border-[#9B3A4E]/50 hover:shadow-[0_0_30px_rgba(155,58,78,0.1)]"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square w-full overflow-hidden bg-neutral-900 border-b border-neutral-800">
                            {p.featuredImage?.url ? (
                                <Image
                                    src={p.featuredImage.url}
                                    alt={p.featuredImage.altText || p.title}
                                    fill
                                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-80 group-hover:opacity-100"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-neutral-700 font-mono text-xs uppercase">
                                    No Visual
                                </div>
                            )}

                            {/* Status Badges */}
                            <div className="absolute top-3 left-3 flex flex-col gap-2">
                                {!p.availableForSale && (
                                    <div className="rounded bg-neutral-950/90 border border-red-900/50 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-red-500 backdrop-blur-sm">
                                        Offline
                                    </div>
                                )}
                                {p.compareAtPriceRange?.minVariantPrice && (
                                    <div className="rounded bg-[#9B3A4E] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-lg">
                                        Offer
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-5">
                            <div className="mb-2 flex items-center justify-between">
                                <div className="text-[10px] font-bold uppercase tracking-widest text-neutral-500 group-hover:text-[#9B3A4E] transition-colors">
                                    {p.productType || "Component"}
                                </div>
                                <div className="h-1 w-1 rounded-full bg-neutral-700 group-hover:bg-[#9B3A4E] transition-colors" />
                            </div>

                            <Link href={`/products/${p.handle}`} className="block mb-4">
                                <h3 className="line-clamp-2 text-sm font-medium text-white group-hover:text-[#9B3A4E] transition-colors leading-relaxed" title={p.title}>
                                    {p.title}
                                </h3>
                            </Link>

                            <div className="mt-auto pt-4 border-t border-neutral-800/50 flex items-end justify-between">
                                {hidePrice ? (
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-neutral-600 uppercase tracking-wider mb-1">Pricing</span>
                                        <span className="text-base font-mono font-bold text-white">Quote on Request</span>
                                    </div>
                                ) : (
                                    <div className="flex flex-col">
                                        <span className="text-[10px] text-neutral-600 uppercase tracking-wider mb-1">Unit Cost</span>
                                        <div className="flex items-baseline gap-2">
                                            <ProductPrice
                                                amount={p.priceRange.minVariantPrice.amount}
                                                currencyCode={p.priceRange.minVariantPrice.currencyCode}
                                                className="text-lg font-mono font-bold text-white"
                                            />
                                            {p.compareAtPriceRange?.minVariantPrice && (
                                                <ProductPrice
                                                    amount={p.compareAtPriceRange.minVariantPrice.amount}
                                                    currencyCode={p.compareAtPriceRange.minVariantPrice.currencyCode}
                                                    className="text-xs font-mono text-neutral-600 line-through decoration-red-900"
                                                />
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="grid grid-cols-4 gap-2 mt-4">
                                <div className="col-span-3">
                                    {hidePrice ? (
                                        <Link
                                            href="/quote"
                                            className="flex w-full items-center justify-center rounded-md bg-white py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:bg-neutral-200"
                                        >
                                            Request Quote
                                        </Link>
                                    ) : (
                                        <div className="[&>button]:w-full [&>button]:bg-white [&>button]:text-black [&>button]:hover:bg-neutral-200 [&>button]:text-xs [&>button]:font-bold [&>button]:uppercase [&>button]:tracking-wider [&>button]:py-2.5 [&>button]:rounded-md [&>button]:transition-all">
                                            <AddToCartButton
                                                variantId={p.variants?.nodes?.[0]?.id || ''}
                                                disabled={!p.availableForSale || !p.variants?.nodes?.[0]?.id}
                                            />
                                        </div>
                                    )}
                                </div>
                                <Link
                                    href={`/products/${p.handle}`}
                                    className="col-span-1 flex items-center justify-center rounded-md border border-neutral-700 bg-transparent text-neutral-400 hover:text-white hover:border-white transition-all"
                                    title="View Specs"
                                >
                                    <Eye className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                    );
                })}
            </AnimatePresence>
        </motion.div>
    );
}