"use client";

import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useCallback, useMemo, useState} from "react";

export type FilterControlsProps = {
  categories: string[];
  priceRange: { min: number; max: number };
  productCounts: Record<string, number>;
};

export default function FilterControls({ categories, priceRange, productCounts }: FilterControlsProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const selectedCategories = useMemo(
    () => (searchParams.get("categories")?.split(",").filter(Boolean) ?? []),
    [searchParams]
  );
  const [minPrice, setMinPrice] = useState<number>(Number(searchParams.get("minPrice")) || priceRange.min);
  const [maxPrice, setMaxPrice] = useState<number>(Number(searchParams.get("maxPrice")) || priceRange.max);
  const [searchQuery, setSearchQuery] = useState<string>(searchParams.get("q") || "");
  const [inStockOnly, setInStockOnly] = useState<boolean>(searchParams.get("inStock") === "true");
  const [sortBy, setSortBy] = useState<string>(searchParams.get("sort") || "newest");

  const updateParams = useCallback((updater: (p: URLSearchParams) => void) => {
    const params = new URLSearchParams(searchParams.toString());
    updater(params);
    router.push(`${pathname}?${params.toString()}`);
  }, [router, pathname, searchParams]);

  const toggleCategory = (cat: string) => {
    updateParams((params) => {
      const current = params.get("categories")?.split(",").filter(Boolean) ?? [];
      const next = current.includes(cat) ? current.filter((c) => c !== cat) : [...current, cat];
      if (next.length) params.set("categories", next.join(","));
      else params.delete("categories");
    });
  };

  const applyPrice = () => {
    updateParams((params) => {
      if (minPrice > priceRange.min) params.set("minPrice", `${minPrice}`); else params.delete("minPrice");
      if (maxPrice < priceRange.max) params.set("maxPrice", `${maxPrice}`); else params.delete("maxPrice");
    });
  };

  const onSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateParams((params) => {
      if (searchQuery) params.set("q", searchQuery); else params.delete("q");
    });
  };

  const onStockToggle = () => {
    const next = !inStockOnly;
    setInStockOnly(next);
    updateParams((params) => {
      if (next) params.set("inStock", "true"); else params.delete("inStock");
    });
  };

  const onSortChange = (value: string) => {
    setSortBy(value);
    updateParams((params) => {
      if (value && value !== "newest") params.set("sort", value); else params.delete("sort");
    });
  };

  const clearAll = () => {
    router.push(pathname);
  };

  return (
    <aside className="w-full space-y-6 rounded-lg border border-gray-200 bg-white p-4">
      <form onSubmit={onSearchSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-gray-400 focus:outline-none"
        />
        <button type="submit" className="rounded-md bg-[#2F2F2F] px-4 py-2 text-sm font-semibold text-white hover:bg-[#D6452F]">Search</button>
      </form>

      <div>
        <div className="mb-3 text-sm font-semibold text-[#2F2F2F]">Categories</div>
        <div className="grid grid-cols-1 gap-2">
          {categories.map((cat) => {
            const checked = selectedCategories.includes(cat);
            const count = productCounts[cat] || 0;
            return (
              <label key={cat} className="flex items-center justify-between gap-2 rounded-md border border-gray-200 p-2 text-sm">
                <span className="flex items-center gap-2">
                  <input type="checkbox" checked={checked} onChange={() => toggleCategory(cat)} />
                  <span>{cat}</span>
                </span>
                <span className="text-xs text-gray-500">{count}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div>
        <div className="mb-3 text-sm font-semibold text-[#2F2F2F]">Price</div>
        <div className="flex items-center gap-2">
          <input type="number" value={minPrice} min={priceRange.min} max={priceRange.max}
                 onChange={(e) => setMinPrice(Number(e.target.value))}
                 className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm" />
          <span className="text-gray-500">-</span>
          <input type="number" value={maxPrice} min={priceRange.min} max={priceRange.max}
                 onChange={(e) => setMaxPrice(Number(e.target.value))}
                 className="w-1/2 rounded-md border border-gray-300 px-3 py-2 text-sm" />
          <button type="button" onClick={applyPrice} className="rounded-md bg-white px-3 py-2 text-sm font-medium text-[#2F2F2F] ring-1 ring-gray-300 hover:bg-gray-50">Apply</button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={inStockOnly} onChange={onStockToggle} />
          In stock only
        </label>
        <select value={sortBy} onChange={(e) => onSortChange(e.target.value)} className="rounded-md border border-gray-300 px-2 py-1 text-sm">
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name-asc">Name: A to Z</option>
          <option value="name-desc">Name: Z to A</option>
        </select>
      </div>

      <button type="button" onClick={clearAll} className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-[#2F2F2F] hover:bg-gray-50">Clear all</button>
    </aside>
  );
}
