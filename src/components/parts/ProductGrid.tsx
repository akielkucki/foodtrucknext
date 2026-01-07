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
            <div className="flex h-64 w-full flex-col items-center justify-center rounded-xl border border-dashed border-neutral-300 bg-neutral-50 text-neutral-600">
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
                        className="group relative flex flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white transition-all hover:border-[var(--color-primary)]/50 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                    >
                        {/* Image Container */}
                        <div className="relative aspect-square w-full overflow-hidden bg-neutral-100">
                            {p.featuredImage?.url ? (
                                <Image
                                    src={p.featuredImage.url}
                                    alt={p.featuredImage.altText || p.title}
                                    fill
                                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-neutral-400">
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
                            <div className="mb-2 text-xs font-bold uppercase tracking-wider text-neutral-500">
                                {p.productType || "Part"}
                            </div>

                            <Link href={`/products/${p.handle}`} className="group-hover:text-[var(--color-primary)] transition-colors">
                                <h3 className="line-clamp-2 text-lg font-bold text-neutral-900" title={p.title}>
                                    {p.title}
                                </h3>
                            </Link>

                            <div className="mt-2 flex items-baseline gap-2">
                                <ProductPrice
                                    amount={p.priceRange.minVariantPrice.amount}
                                    currencyCode={p.priceRange.minVariantPrice.currencyCode}
                                    className="text-xl font-bold text-[var(--color-primary)]"
                                />
                                {p.compareAtPriceRange?.minVariantPrice && (
                                    <ProductPrice
                                        amount={p.compareAtPriceRange.minVariantPrice.amount}
                                        currencyCode={p.compareAtPriceRange.minVariantPrice.currencyCode}
                                        className="text-sm font-medium text-neutral-500 line-through"
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
                                    className="flex items-center justify-center rounded-lg border border-neutral-300 bg-white px-4 text-sm font-semibold text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-neutral-900"
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
