import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import FilterControls from "@/components/parts/FilterControls";
import ProductGrid from "@/components/parts/ProductGrid"; // Import the client component
import { getPartsProducts, ProductNodeListItem } from "@/lib/shopify";

// --- Helper Functions ---
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

// --- Server-Side Filtering Logic ---
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
      // newest
      results.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      break;
  }

  return results;
}

export default async function PartsPage({ searchParams }: { searchParams: Promise<{ [key: string]: string | string[] | undefined }> }) {
  const params = await searchParams;
  const products = await getPartsProducts();
  const nodes = products.nodes;

  // Derive categories and price ranges
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

  return (
      <div className="min-h-screen bg-neutral-950">
        <Navbar />

        {/* Modern Hero Section */}
        <section className="relative w-full overflow-hidden bg-neutral-950">
          <div className="absolute inset-0 h-full w-full">
            {/* Optional: Add a real image here instead of bg color if available */}
            <div className="absolute inset-0 bg-[url('/heroalt.jpg')] bg-cover bg-center opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-[var(--color-primary-light)] backdrop-blur-sm">
                <span className="mr-2 h-2 w-2 rounded-full bg-[var(--color-primary)] animate-pulse"></span>
                Official Parts & Components
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Upgrade Your <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-primary)]">Mobile Kitchen.</span>
              </h1>
              <p className="mt-6 text-lg leading-8 text-neutral-300">
                Premium equipment, replacement parts, and accessories engineered for durability and health code compliance.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content Area */}
        <section className="w-full px-6 py-16 lg:px-8 bg-white">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">

              {/* Sidebar (Filters) */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 rounded-2xl bg-neutral-50 border border-neutral-200 p-6">
                  <FilterControls
                      categories={categories}
                      priceRange={priceRange}
                      productCounts={productCounts}
                  />
                </div>
              </div>

              {/* Product Grid */}
              <div className="lg:col-span-3">
                <div className="mb-8 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-neutral-900">
                    {filtered.length} Result{filtered.length !== 1 && 's'} Found
                  </h2>
                  {/* Sort control is handled inside FilterControls, but you could replicate simple sort text here if needed */}
                </div>

                <ProductGrid products={filtered} />
              </div>
            </div>
          </div>
        </section>

        {/* Categories Grid (Visual Navigation) */}
        <section className="w-full bg-neutral-950 py-24 border-t border-neutral-800">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Browse by Category
              </h2>
              <p className="mt-4 text-lg text-neutral-400">
                Find exactly what you need for your build
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
              {[
                "Cooking Equipment", "Refrigeration", "Ventilation", "Plumbing",
                "Electrical", "Windows & Doors", "Storage", "Safety"
              ].map((cat, i) => (
                  <div
                      key={cat}
                      className="group relative flex flex-col items-center justify-center rounded-xl border border-neutral-700/50 bg-neutral-800/50 backdrop-blur-sm p-6 text-center transition-all hover:-translate-y-1 hover:border-[var(--color-primary)]/50 hover:bg-neutral-800 hover:shadow-lg hover:shadow-[var(--color-primary)]/20"
                  >
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-neutral-700/50 text-neutral-400 group-hover:bg-gradient-to-br group-hover:from-[var(--color-primary-light)] group-hover:to-[var(--color-primary)] group-hover:text-white transition-colors">
                      {/* Generic icon for demonstration - ideally map specific icons */}
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                      </svg>
                    </div>
                    <h3 className="text-sm font-bold text-white">{cat}</h3>
                  </div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
  );
}
