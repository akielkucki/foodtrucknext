"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  RotateCcw,
  Check,
  ChevronDown
} from "lucide-react";

export type FilterControlsProps = {
  categories: string[];
  priceRange: { min: number; max: number };
  productCounts: Record<string, number>;
};

export default function FilterControls({
                                         categories,
                                         priceRange,
                                         productCounts,
                                       }: FilterControlsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategories = useMemo(
      () => searchParams.get("categories")?.split(",").filter(Boolean) ?? [],
      [searchParams]
  );

  const [minPrice, setMinPrice] = useState<number>(
      Number(searchParams.get("minPrice")) || priceRange.min
  );
  const [maxPrice, setMaxPrice] = useState<number>(
      Number(searchParams.get("maxPrice")) || priceRange.max
  );
  const [searchQuery, setSearchQuery] = useState<string>(
      searchParams.get("q") || ""
  );
  const [inStockOnly, setInStockOnly] = useState<boolean>(
      searchParams.get("inStock") === "true"
  );
  const [sortBy, setSortBy] = useState<string>(
      searchParams.get("sort") || "newest"
  );

  const updateParams = useCallback(
      (updater: (p: URLSearchParams) => void) => {
        const params = new URLSearchParams(searchParams.toString());
        updater(params);
        router.push(`${pathname}?${params.toString()}`,{
          scroll: false,
        });
      },
      [router, pathname, searchParams]
  );

  const toggleCategory = (cat: string) => {
    updateParams((params) => {
      const current =
          params.get("categories")?.split(",").filter(Boolean) ?? [];
      const next = current.includes(cat)
          ? current.filter((c) => c !== cat)
          : [...current, cat];
      if (next.length) params.set("categories", next.join(","));
      else params.delete("categories");
    });
  };

  const applyPrice = () => {
    updateParams((params) => {
      if (minPrice > priceRange.min) params.set("minPrice", `${minPrice}`);
      else params.delete("minPrice");
      if (maxPrice < priceRange.max) params.set("maxPrice", `${maxPrice}`);
      else params.delete("maxPrice");
    });
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams((params) => {
      if (searchQuery) params.set("q", searchQuery);
      else params.delete("q");
    });
  };

  const onStockToggle = () => {
    const next = !inStockOnly;
    setInStockOnly(next);
    updateParams((params) => {
      if (next) params.set("inStock", "true");
      else params.delete("inStock");
    });
  };

  const onSortChange = (value: string) => {
    setSortBy(value);
    updateParams((params) => {
      if (value && value !== "newest") params.set("sort", value);
      else params.delete("sort");
    });
  };

  const clearAll = () => {
    setMinPrice(priceRange.min);
    setMaxPrice(priceRange.max);
    setSearchQuery("");
    setInStockOnly(false);
    setSortBy("newest");
    router.push(pathname);
  };

  return (
      <aside className="w-full text-neutral-200">

        {/* Search Input - Top Placement for Utility */}
        <div className="mb-8">
          <form onSubmit={onSearchSubmit} className="relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-neutral-500 group-focus-within:text-[#9B3A4E] transition-colors" />
            </div>
            <input
                type="text"
                placeholder="Search components..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-3 border border-neutral-800 rounded-lg leading-5 bg-[#1a1a1a] text-neutral-300 placeholder-neutral-600 focus:outline-none focus:border-[#9B3A4E] focus:ring-1 focus:ring-[#9B3A4E] sm:text-sm transition-all"
            />
          </form>
        </div>

        <div className="space-y-8">

          {/* Categories */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                System Category
              </h3>
            </div>

            <div className="space-y-1">
              {categories.map((cat) => {
                const checked = selectedCategories.includes(cat);
                const count = productCounts[cat] || 0;
                return (
                    <label
                        key={cat}
                        className={`group flex cursor-pointer items-center justify-between rounded-md px-3 py-2 transition-all ${
                            checked ? 'bg-[#9B3A4E]/10 border border-[#9B3A4E]/20' : 'hover:bg-neutral-900 border border-transparent'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                            checked ? 'bg-[#9B3A4E] border-[#9B3A4E]' : 'border-neutral-700 bg-neutral-900 group-hover:border-neutral-500'
                        }`}>
                          {checked && <Check className="w-3 h-3 text-white" />}
                          <input
                              type="checkbox"
                              checked={checked}
                              onChange={() => toggleCategory(cat)}
                              className="sr-only"
                          />
                        </div>
                        <span
                            className={`text-sm ${
                                checked ? "font-medium text-white" : "text-neutral-400 group-hover:text-neutral-200"
                            }`}
                        >
                      {cat}
                    </span>
                      </div>
                      <span className="font-mono text-[10px] text-neutral-600">
                        [{count.toString().padStart(2, '0')}]
                      </span>
                    </label>
                );
              })}
            </div>
          </div>

          <div className="h-px bg-neutral-800" />

          {/* Price Range */}
          <div>
            <h3 className="mb-4 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
              Budget Constraints
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-3">
              <div className="relative group">
                <span className="absolute left-3 top-2.5 text-neutral-600 font-mono group-focus-within:text-[#9B3A4E]">$</span>
                <input
                    type="number"
                    value={minPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full rounded-md border border-neutral-800 bg-[#1a1a1a] py-2 pl-6 pr-2 text-xs font-mono text-white focus:border-[#9B3A4E] focus:outline-none transition-colors"
                />
                <label className="mt-1 block text-[10px] text-neutral-600 uppercase tracking-wider text-right pr-1">Min</label>
              </div>
              <div className="relative group">
                <span className="absolute left-3 top-2.5 text-neutral-600 font-mono group-focus-within:text-[#9B3A4E]">$</span>
                <input
                    type="number"
                    value={maxPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full rounded-md border border-neutral-800 bg-[#1a1a1a] py-2 pl-6 pr-2 text-xs font-mono text-white focus:border-[#9B3A4E] focus:outline-none transition-colors"
                />
                <label className="mt-1 block text-[10px] text-neutral-600 uppercase tracking-wider text-right pr-1">Max</label>
              </div>
            </div>
            <button
                type="button"
                onClick={applyPrice}
                className="w-full rounded-md border border-neutral-700 bg-neutral-900 px-4 py-2 text-xs font-bold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-[#9B3A4E] hover:bg-[#9B3A4E]/10 transition-all"
            >
              Update Range
            </button>
          </div>

          <div className="h-px bg-neutral-800" />

          {/* Sorting & Availability */}
          <div className="space-y-6">

            {/* Toggle */}
            <label className="flex cursor-pointer items-center justify-between group">
              <span className="text-sm text-neutral-400 group-hover:text-white transition-colors">Available Only</span>
              <div className="relative inline-flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={onStockToggle}
                    className="peer sr-only"
                />
                <div className="peer h-5 w-9 rounded-full bg-neutral-800 border border-neutral-700 after:absolute after:left-[2px] after:top-[2px] after:h-4 after:w-4 after:rounded-full after:bg-neutral-500 after:transition-all peer-checked:bg-[#9B3A4E]/20 peer-checked:border-[#9B3A4E] peer-checked:after:translate-x-full peer-checked:after:bg-[#9B3A4E]"></div>
              </div>
            </label>

            {/* Sort Select */}
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                Sort Parameter
              </label>
              <div className="relative">
                <select
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className="w-full appearance-none rounded-md border border-neutral-800 bg-[#1a1a1a] py-2.5 pl-3 pr-8 text-sm text-neutral-300 focus:border-[#9B3A4E] focus:outline-none focus:ring-1 focus:ring-[#9B3A4E] transition-colors"
                >
                  <option value="newest">Newest Arrivals</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-neutral-500">
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Clear All */}
          <button
              type="button"
              onClick={clearAll}
              className="group flex w-full items-center justify-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900/50 px-4 py-3 text-xs font-bold uppercase tracking-wider text-neutral-500 transition-all hover:bg-neutral-900 hover:text-white hover:border-neutral-700"
          >
            <RotateCcw className="w-3 h-3 group-hover:-rotate-180 transition-transform duration-500" />
            Reset Parameters
          </button>
        </div>
      </aside>
  );
}