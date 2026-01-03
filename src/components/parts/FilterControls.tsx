"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { useCallback, useMemo, useState } from "react";

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

  // Helper icon components
  const SearchIcon = () => (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
  );

  const FilterIcon = () => (
      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
  );

  return (
      <aside className="w-full">
        {/* Header */}
        <div className="border-b border-slate-600/50 pb-4 mb-5">
          <div className="flex items-center gap-2 text-lg font-bold text-white">
            <FilterIcon />
            <span>Filters</span>
          </div>
        </div>

        <div className="space-y-6">
          {/* Search */}
          <form onSubmit={onSearchSubmit} className="relative">
            <div className="relative">
              <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-lg border border-slate-600 bg-slate-700/50 py-2.5 pl-10 pr-3 text-sm text-white placeholder-slate-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              />
              <div className="absolute left-3 top-3 text-slate-400">
                <SearchIcon />
              </div>
            </div>
          </form>

          <hr className="border-slate-600/50" />

          {/* Categories */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-300">
              Categories
            </h3>
            <div className="space-y-2">
              {categories.map((cat) => {
                const checked = selectedCategories.includes(cat);
                const count = productCounts[cat] || 0;
                return (
                    <label
                        key={cat}
                        className="flex cursor-pointer items-center justify-between rounded-lg px-2 py-1.5 transition-colors hover:bg-slate-700/50"
                    >
                      <div className="flex items-center gap-3">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => toggleCategory(cat)}
                            className="h-4 w-4 rounded border-slate-500 bg-slate-700 text-orange-500 focus:ring-orange-500"
                        />
                        <span
                            className={`text-sm ${
                                checked ? "font-medium text-white" : "text-slate-300"
                            }`}
                        >
                      {cat}
                    </span>
                      </div>
                      <span className="rounded-full bg-slate-700 px-2 py-0.5 text-xs font-medium text-slate-300">
                    {count}
                  </span>
                    </label>
                );
              })}
            </div>
          </div>

          <hr className="border-slate-600/50" />

          {/* Price */}
          <div>
            <h3 className="mb-3 text-sm font-bold uppercase tracking-wider text-slate-300">
              Price Range
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <span className="absolute left-3 top-2 text-slate-400">$</span>
                <input
                    type="number"
                    value={minPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full rounded-md border border-slate-600 bg-slate-700/50 py-2 pl-6 pr-2 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <label className="mt-1 block text-xs text-slate-400">Min</label>
              </div>
              <div className="relative">
                <span className="absolute left-3 top-2 text-slate-400">$</span>
                <input
                    type="number"
                    value={maxPrice}
                    min={priceRange.min}
                    max={priceRange.max}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full rounded-md border border-slate-600 bg-slate-700/50 py-2 pl-6 pr-2 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
                <label className="mt-1 block text-xs text-slate-400">Max</label>
              </div>
            </div>
            <button
                type="button"
                onClick={applyPrice}
                className="mt-3 w-full rounded-md bg-gradient-to-r from-orange-500 to-red-600 px-4 py-2 text-sm font-medium text-white transition-all hover:from-orange-600 hover:to-red-700"
            >
              Apply Price
            </button>
          </div>

          <hr className="border-slate-600/50" />

          {/* Options / Sorting */}
          <div className="space-y-4">
            <label className="flex cursor-pointer items-center justify-between">
              <span className="text-sm font-medium text-slate-200">In stock only</span>
              <div className="relative inline-flex cursor-pointer items-center">
                <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={onStockToggle}
                    className="peer sr-only"
                />
                <div className="peer h-6 w-11 rounded-full bg-slate-600 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-500 after:bg-slate-300 after:transition-all after:content-[''] peer-checked:bg-orange-500 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-orange-500/20"></div>
              </div>
            </label>

            <div className="space-y-1">
              <label className="text-xs font-semibold uppercase text-slate-400">
                Sort By
              </label>
              <select
                  value={sortBy}
                  onChange={(e) => onSortChange(e.target.value)}
                  className="w-full rounded-md border border-slate-600 bg-slate-700/50 py-2 pl-3 pr-8 text-sm text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                <option value="newest">Newest Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
              </select>
            </div>
          </div>

          {/* Clear All */}
          <button
              type="button"
              onClick={clearAll}
              className="w-full rounded-lg border border-slate-600 bg-slate-700/50 px-4 py-2.5 text-sm font-semibold text-slate-300 transition-colors hover:bg-slate-600 hover:text-white"
          >
            Reset All Filters
          </button>
        </div>
      </aside>
  );
}