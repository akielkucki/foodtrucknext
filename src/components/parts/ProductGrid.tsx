'use client';

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ProductPrice from "@/components/ProductPrice";
import AddToCartButton from "@/components/addtocartbutton";
import { ProductNodeListItem } from "@/lib/shopify";

export default function ProductGrid({ products }: { products: ProductNodeListItem[] }) {
    if (products.length === 0) {
        return (
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl border border-dashed border-slate-600 bg-slate-800/50 text-slate-400">
                <p className="text-lg font-medium">No products found</p>
                <p className="text-sm">Try adjusting your price range or categories</p>
            </div>
        );
    }

    return (
        <motion.div
            layout
            className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3"
        >
            <AnimatePresence mode="popLayout">
                {products.map((p) => (
                    <motion.div
                        layout
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        key={p.id}
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-700/50 bg-slate-800/80 backdrop-blur-sm transition-all hover:border-orange-500/30 hover:shadow-lg hover:shadow-orange-500/10"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square w-full overflow-hidden bg-slate-700/50">
                            {p.featuredImage?.url ? (
                                <Image
                                    src={p.featuredImage.url}
                                    alt={p.featuredImage.altText || p.title}
                                    fill
                                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-slate-400">
                                    No image
                                </div>
                            )}

                            {/* Badges */}
                            {!p.availableForSale && (
                                <div className="absolute right-2 top-2 rounded bg-red-100 px-2 py-1 text-xs font-bold uppercase text-red-600">
                                    Sold Out
                                </div>
                            )}
                            {p.compareAtPriceRange?.minVariantPrice && (
                                <div className="absolute left-2 top-2 rounded bg-[#D6452F] px-2 py-1 text-xs font-bold uppercase text-white">
                                    Sale
                                </div>
                            )}
                        </div>

                        {/* Content */}
                        <div className="flex flex-1 flex-col p-4">
                            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-400">
                                {p.productType || "Part"}
                            </div>

                            <Link href={`/products/${p.handle}`} className="group-hover:text-orange-400 transition-colors">
                                <h3 className="line-clamp-2 text-lg font-bold text-white" title={p.title}>
                                    {p.title}
                                </h3>
                            </Link>

                            <div className="mt-2 flex items-baseline gap-2">
                                <ProductPrice
                                    amount={p.priceRange.minVariantPrice.amount}
                                    currencyCode={p.priceRange.minVariantPrice.currencyCode}
                                    className="text-xl font-bold text-orange-400"
                                />
                                {p.compareAtPriceRange?.minVariantPrice && (
                                    <ProductPrice
                                        amount={p.compareAtPriceRange.minVariantPrice.amount}
                                        currencyCode={p.compareAtPriceRange.minVariantPrice.currencyCode}
                                        className="text-sm font-medium text-slate-500 line-through"
                                    />
                                )}
                            </div>

                            {/* Actions */}
                            <div className="mt-auto flex gap-3 pt-4">
                                <AddToCartButton
                                    variantId={p.variants?.nodes?.[0]?.id || ''}
                                    disabled={!p.availableForSale || !p.variants?.nodes?.[0]?.id}
                                />
                                <Link
                                    href={`/products/${p.handle}`}
                                    className="flex items-center justify-center rounded-lg border border-slate-600 bg-slate-700/50 px-4 text-sm font-semibold text-slate-200 transition-colors hover:bg-slate-600 hover:text-white"
                                >
                                    Details
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </AnimatePresence>
        </motion.div>
    );
}