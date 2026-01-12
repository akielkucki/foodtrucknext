"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductNode } from "@/lib/shopify";
import ProductPrice from "@/components/ProductPrice";
import AddToCartButton from "@/components/addtocartbutton";

type Props = {
  product: ProductNode;
};

export default function ProductDetails({ product }: Props) {
  const [selectedOptions, setSelectedOptions] = useState<Record<string, string>>(() => {
    const defaults: Record<string, string> = {};
    product.options.forEach((opt) => {
      if (opt.values.length > 0) {
        defaults[opt.name] = opt.values[0];
      }
    });
    return defaults;
  });

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const selectedVariant = useMemo(() => {
    return product.variants.nodes.find((variant) =>
      variant.selectedOptions.every(
        (opt) => selectedOptions[opt.name] === opt.value
      )
    );
  }, [product.variants.nodes, selectedOptions]);

  const images = product.images.nodes.length > 0 ? product.images.nodes : product.featuredImage ? [product.featuredImage] : [];

  const handleOptionChange = (optionName: string, value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [optionName]: value,
    }));
  };

  const hasMultipleVariants = product.variants.nodes.length > 1;

  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Image Gallery */}
      <div className="flex flex-col gap-4">
        {/* Main Image */}
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50">
          <AnimatePresence mode="wait">
            {images[selectedImageIndex] ? (
              <motion.div
                key={selectedImageIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="relative h-full w-full"
              >
                <Image
                  src={images[selectedImageIndex].url}
                  alt={images[selectedImageIndex].altText || product.title}
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            ) : (
              <div className="flex h-full w-full items-center justify-center text-slate-400">
                No image available
              </div>
            )}
          </AnimatePresence>

          {/* Sale Badge */}
          {selectedVariant?.compareAtPrice && (
            <div className="absolute left-4 top-4 rounded-lg bg-[#D6452F] px-3 py-1.5 text-sm font-bold uppercase text-white">
              Sale
            </div>
          )}

          {/* Out of Stock Badge */}
          {!product.availableForSale && (
            <div className="absolute right-4 top-4 rounded-lg bg-red-100 px-3 py-1.5 text-sm font-bold uppercase text-red-600">
              Sold Out
            </div>
          )}
        </div>

        {/* Thumbnail Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-5 gap-2">
            {images.slice(0, 5).map((img, idx) => (
              <button
                key={img.id || idx}
                onClick={() => setSelectedImageIndex(idx)}
                className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all ${
                  selectedImageIndex === idx
                    ? "border-orange-500 ring-2 ring-orange-500/20"
                    : "border-slate-700/50 hover:border-slate-600"
                }`}
              >
                <Image
                  src={img.url}
                  alt={img.altText || `${product.title} - Image ${idx + 1}`}
                  fill
                  sizes="100px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="flex flex-col">
        {/* Breadcrumb */}
        <nav className="mb-4 text-sm text-slate-400">
          <Link href="/products" className="hover:text-orange-400 transition-colors">
            Products
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">{product.title}</span>
        </nav>

        {/* Category */}
        {product.productType && (
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-orange-400">
            {product.productType}
          </div>
        )}

        {/* Title */}
        <h1 className="text-3xl font-bold text-white lg:text-4xl">
          {product.title}
        </h1>

        {/* Vendor */}
        {product.vendor && (
          <p className="mt-2 text-sm text-slate-400">by {product.vendor}</p>
        )}

        {/* Price */}
        <div className="mt-6 flex items-baseline gap-3">
          <ProductPrice
            amount={selectedVariant?.price.amount || product.priceRange.minVariantPrice.amount}
            currencyCode={selectedVariant?.price.currencyCode || product.priceRange.minVariantPrice.currencyCode}
            className="text-3xl font-bold text-orange-400"
          />
          {selectedVariant?.compareAtPrice && (
            <ProductPrice
              amount={selectedVariant.compareAtPrice.amount}
              currencyCode={selectedVariant.compareAtPrice.currencyCode}
              className="text-xl text-slate-500 line-through"
            />
          )}
        </div>

        {/* Availability */}
        <div className="mt-4 flex items-center gap-2">
          <span
            className={`h-2 w-2 rounded-full ${
              product.availableForSale ? "bg-green-500" : "bg-red-500"
            }`}
          />
          <span className="text-sm text-slate-400">
            {product.availableForSale ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Variant Options */}
        {hasMultipleVariants && (
          <div className="mt-8 space-y-6">
            {product.options.map((option) => (
              <div key={option.id}>
                <label className="mb-3 block text-sm font-medium text-white">
                  {option.name}
                </label>
                <div className="flex flex-wrap gap-2">
                  {option.values.map((value) => {
                    const isSelected = selectedOptions[option.name] === value;
                    return (
                      <button
                        key={value}
                        onClick={() => handleOptionChange(option.name, value)}
                        className={`rounded-lg border px-4 py-2 text-sm font-medium transition-all ${
                          isSelected
                            ? "border-orange-500 bg-orange-500/10 text-orange-400"
                            : "border-slate-700 bg-slate-800/50 text-slate-300 hover:border-slate-600 hover:bg-slate-800"
                        }`}
                      >
                        {value}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Quantity Selector */}
        <div className="mt-8">
          <label className="mb-3 block text-sm font-medium text-white">
            Quantity
          </label>
          <div className="flex w-fit items-center rounded-lg border border-slate-700 bg-slate-800/50">
            <button
              onClick={() => setQuantity((q) => Math.max(1, q - 1))}
              className="px-4 py-2 text-slate-400 transition-colors hover:text-white disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
            <span className="min-w-[3rem] px-2 text-center text-white">{quantity}</span>
            <button
              onClick={() => setQuantity((q) => q + 1)}
              className="px-4 py-2 text-slate-400 transition-colors hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <div className="mt-8 flex gap-4">
          <AddToCartButton
            variantId={selectedVariant?.id || product.variants.nodes[0]?.id || ""}
            quantity={quantity}
            disabled={!product.availableForSale || !selectedVariant?.availableForSale}
            className="flex-1 py-4 text-base"
          />
        </div>

        {/* Description */}
        {product.descriptionHtml && (
          <div className="mt-10 border-t border-slate-800 text-slate-200 pt-10">
            <h2 className="mb-4 text-lg font-bold text-white">Description</h2>
            <div
              className="prose prose-invert prose-slate max-w-none prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white"
              dangerouslySetInnerHTML={{ __html: product.descriptionHtml }}
            />
          </div>
        )}

        {/* Tags */}
        {product.tags.length > 0 && (
          <div className="mt-8 border-t border-slate-800 pt-8">
            <h3 className="mb-3 text-sm font-medium text-slate-400">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
