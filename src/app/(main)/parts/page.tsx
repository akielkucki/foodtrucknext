import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import FilterControls from "@/components/parts/FilterControls";
import ProductGrid from "@/components/parts/ProductGrid";
import { getPartsProducts, ProductNodeListItem } from "@/lib/shopify";
import {
  Settings,
  Search,
  Zap,
  Thermometer,
  Wind,
  Droplets,
  Box,
  ShieldAlert,
  Grid3X3,
  Cpu
} from "lucide-react";

// --- Helper Functions (Preserved) ---
function toNumber(value: string | string[] | undefined): number | undefined {
  if (Array.isArray(value)) value = value[0];
  if (!value) return undefined;
  const n = Number(value);
  return isFinite(n) ? n : undefined;
}

function toString(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

function toCsvArray(value: string | string[] | undefined): string[] {
  const v = toString(value);
  return v ? v.split(",").map((s) => s.trim()).filter(Boolean) : [];
}

// --- Server-Side Filtering Logic (Preserved) ---
function filterAndSortProducts(nodes: ProductNodeListItem[], params: { categories: string[]; minPrice?: number; maxPrice?: number; q?: string; inStock?: boolean; sort?: string; }) {
  const { categories, minPrice, maxPrice, q, inStock, sort } = params;
  let results = [...nodes];

  if (categories.length) {
    results = results.filter((p) => p.productType && categories.includes(p.productType));
  }

  if (minPrice !== undefined || maxPrice !== undefined) {
    results = results.filter((p) => {
      const price = parseFloat(p.priceRange.minVariantPrice.amount);
      if (minPrice !== undefined && price < minPrice) return false;
      if (maxPrice !== undefined && price > maxPrice) return false;
      return true;
    });
  }

  if (q && q.trim()) {
    const term = q.trim().toLowerCase();
    results = results.filter((p) => {
      const hay = `${p.title} ${p.vendor ?? ""} ${p.tags?.join(" ") ?? ""}`.toLowerCase();
      return hay.includes(term);
    });
  }

  if (inStock) {
    results = results.filter((p) => p.availableForSale);
  }

  switch (sort) {
    case "price-asc":
      results.sort((a, b) => parseFloat(a.priceRange.minVariantPrice.amount) - parseFloat(b.priceRange.minVariantPrice.amount));
      break;
    case "price-desc":
      results.sort((a, b) => parseFloat(b.priceRange.minVariantPrice.amount) - parseFloat(a.priceRange.minVariantPrice.amount));
      break;
    case "name-asc":
      results.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      results.sort((a, b) => b.title.localeCompare(a.title));
      break;
    default:
      results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
  }

  return results;
}

export default async function PartsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const products = await getPartsProducts();
  const nodes = products.nodes;

  const categories = Array.from(new Set(nodes.map((p) => p.productType).filter(Boolean))) as string[];
  categories.sort();

  const prices = nodes
      .map((p) => parseFloat(p.priceRange.minVariantPrice.amount))
      .filter((n) => !isNaN(n));

  const priceRange = {
    min: prices.length ? Math.floor(Math.min(...prices)) : 0,
    max: prices.length ? Math.ceil(Math.max(...prices)) : 10000,
  };

  const productCounts: Record<string, number> = {};
  nodes.forEach((p) => {
    if (p.productType) productCounts[p.productType] = (productCounts[p.productType] || 0) + 1;
  });

  const filtered = filterAndSortProducts(nodes, {
    categories: toCsvArray(params.categories),
    minPrice: toNumber(params.minPrice) ?? priceRange.min,
    maxPrice: toNumber(params.maxPrice) ?? priceRange.max,
    q: toString(params.q),
    inStock: toString(params.inStock) === "true",
    sort: toString(params.sort) || "newest",
  });

  // Icon mapping for categories
  const getCategoryIcon = (cat: string) => {
    const lower = cat.toLowerCase();
    if (lower.includes('cook')) return Thermometer;
    if (lower.includes('fridg') || lower.includes('cool')) return Droplets; // or Snowflake if available
    if (lower.includes('vent') || lower.includes('fan')) return Wind;
    if (lower.includes('electric') || lower.includes('power')) return Zap;
    if (lower.includes('safety')) return ShieldAlert;
    if (lower.includes('storage')) return Box;
    return Settings; // Default
  };

  return (
      <div className="min-h-screen bg-[#0a0d14] text-neutral-200 font-sans selection:bg-[#9B3A4E] selection:text-white">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative w-full overflow-hidden pt-32 pb-24 border-b border-neutral-900">
          {/* Background Atmosphere */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-1/4 w-[800px] h-[500px] bg-[#9B3A4E]/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md mb-8">
              <Cpu className="w-3 h-3 text-[#9B3A4E]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-400">System Components</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-light tracking-tight text-white mb-6">
              Upgrade Your <br/>
              <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#9B3A4E] to-red-500">Mobile Infrastructure</span>
            </h1>

            <p className="mt-4 text-lg text-neutral-400 max-w-2xl mx-auto font-light leading-relaxed">
              Premium equipment, replacement parts, and accessories engineered for durability and health code compliance.
            </p>
          </div>
        </section>

        {/* --- MAIN CONTENT AREA --- */}
        <section className="w-full px-6 py-16 lg:px-8 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">

              {/* Sidebar (Filters) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-xl bg-[#11151d] border border-neutral-800 p-6 shadow-2xl">
                  <div className="mb-6 pb-4 border-b border-neutral-800 flex items-center gap-2 text-[#9B3A4E]">
                    <Settings className="w-4 h-4" />
                    <h3 className="text-xs font-bold uppercase tracking-widest">Configuration</h3>
                  </div>
                  {/* Pass props to client component - You may need to update FilterControls styling separately to match dark mode */}
                  <FilterControls
                      categories={categories}
                      priceRange={priceRange}
                      productCounts={productCounts}
                  />
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8 flex items-center justify-between p-4 bg-neutral-900/30 border border-neutral-800 rounded-lg">
                  <div className="flex items-center gap-2">
                    <Search className="w-4 h-4 text-[#9B3A4E]" />
                    <h2 className="text-xs font-mono text-neutral-400">
                      QUERY_RESULT: <span className="text-white font-bold">{filtered.length}</span> UNITS FOUND
                    </h2>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-neutral-500">
                    <Grid3X3 className="w-3 h-3" />
                    View: Grid
                  </div>
                </div>

                <ProductGrid products={filtered} />
              </div>
            </div>
          </div>
        </section>

        {/* --- CATEGORY NAVIGATION --- */}
        <section className="w-full bg-[#080808] py-24 border-t border-neutral-900 relative">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <span className="text-[#9B3A4E] font-mono text-xs mb-2 block">02 // INVENTORY</span>
              <h2 className="text-3xl font-light text-white">
                Component <span className="font-bold">Categories</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Cooking Equipment", "Refrigeration", "Ventilation", "Plumbing",
                "Electrical", "Windows & Doors", "Storage", "Safety"
              ].map((cat, i) => {
                const Icon = getCategoryIcon(cat);
                return (
                    <div
                        key={cat}
                        className="group relative flex flex-col items-center justify-center rounded-xl border border-neutral-800 bg-[#11151d] p-8 text-center transition-all duration-300 hover:border-[#9B3A4E]/50 hover:bg-neutral-900/80 cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-[#9B3A4E]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      <div className="relative mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-500 group-hover:text-[#9B3A4E] group-hover:border-[#9B3A4E]/30 transition-all">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="relative text-xs font-bold uppercase tracking-wider text-neutral-300 group-hover:text-white">{cat}</h3>
                    </div>
                );
              })}
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}