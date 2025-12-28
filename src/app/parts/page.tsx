import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import ProductPrice from "@/components/ProductPrice";
import FilterControls from "@/components/parts/FilterControls";
import { getPartsProducts, ProductNode } from "@/lib/shopify";

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

function filterAndSortProducts(nodes: ProductNode[], params: { categories: string[]; minPrice?: number; maxPrice?: number; q?: string; inStock?: boolean; sort?: string; }) {
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
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full bg-white pt-8">
        <div className="relative h-[400px] w-full overflow-hidden bg-[#EDEDED]">
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#8A8A8A]/20 to-[#8A8A8A]/10">
            <div className="text-center text-[#8A8A8A]">
              <p className="text-sm">Parts hero image</p>
            </div>
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent">
            <div className="mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
              <div className="max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Food Truck <span className="text-[#F5A623]">Parts</span>
                </h1>
                <p className="mt-6 text-lg leading-8 text-white/90 sm:text-xl">
                  Premium equipment and parts to build, upgrade, or maintain your food truck.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Listing with Filters */}
      <section className="w-full bg-white px-6 py-12 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">Shop Products</h2>
              <p className="mt-2 text-sm text-[#8A8A8A]">{filtered.length} products</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
            <div className="lg:col-span-1">
              <FilterControls categories={categories} priceRange={priceRange} productCounts={productCounts} />
            </div>

            <div className="lg:col-span-3">
              {filtered.length === 0 ? (
                <div className="rounded-lg border border-gray-200 bg-gray-50 p-10 text-center text-gray-600">No products found. Try adjusting your filters.</div>
              ) : (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filtered.map((p) => (
                    <div key={p.id} className="group rounded-lg border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md">
                      <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-md bg-gray-100">
                        {p.featuredImage?.url ? (
                          <Image
                            src={p.featuredImage.url}
                            alt={p.featuredImage.altText || p.title}
                            fill
                            sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                            className="object-cover transition-transform group-hover:scale-[1.03]"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center text-gray-400">No image</div>
                        )}
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs uppercase tracking-wide text-[#F5A623]">{p.productType || "Parts"}</p>
                        <h3 className="line-clamp-1 text-base font-semibold text-[#2F2F2F]">{p.title}</h3>
                        <div className="flex items-center gap-2">
                          <ProductPrice amount={p.priceRange.minVariantPrice.amount} currencyCode={p.priceRange.minVariantPrice.currencyCode} className="text-lg font-bold text-[#D6452F]" />
                          {p.compareAtPriceRange?.minVariantPrice && (
                            <ProductPrice amount={p.compareAtPriceRange.minVariantPrice.amount} currencyCode={p.compareAtPriceRange.minVariantPrice.currencyCode} className="text-sm text-gray-400 line-through" />
                          )}
                        </div>
                        {!p.availableForSale && <p className="text-xs text-red-600">Out of stock</p>}
                      </div>
                      <div className="mt-4 flex gap-2">
                        <button
                          className="flex-1 rounded-md bg-[#2F2F2F] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#D6452F]"
                          onClick={() => console.log("Add to cart", p.id)}
                        >
                          Add to Cart
                        </button>
                        <Link href={`/products/${p.handle}`} className="rounded-md border border-gray-300 bg-white px-3 py-2 text-sm font-medium text-[#2F2F2F] hover:bg-gray-50">Details</Link>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Parts Categories */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Browse by Category
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Everything you need to equip your mobile kitchen
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Cooking Equipment",
                items: ["Grills & Griddles", "Fryers", "Ovens", "Ranges", "Warmers"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                )
              },
              {
                title: "Refrigeration",
                items: ["Refrigerators", "Freezers", "Prep Tables", "Undercounter Units", "Ice Machines"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                )
              },
              {
                title: "Ventilation",
                items: ["Hood Systems", "Exhaust Fans", "Fire Suppression", "Make-up Air", "Filters"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                  </svg>
                )
              },
              {
                title: "Plumbing & Water",
                items: ["Sinks", "Water Heaters", "Pumps", "Tanks", "Faucets & Fixtures"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                  </svg>
                )
              },
              {
                title: "Electrical & Power",
                items: ["Generators", "Panels", "Outlets", "Lighting", "Wiring"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              {
                title: "Service Windows & Doors",
                items: ["Serving Windows", "Service Doors", "Access Panels", "Shutters", "Hardware"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
                  </svg>
                )
              },
              {
                title: "Storage & Shelving",
                items: ["Shelving Units", "Cabinets", "Storage Racks", "Organizers", "Carts"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                )
              },
              {
                title: "Safety & Fire",
                items: ["Fire Extinguishers", "Suppression Systems", "First Aid", "Safety Equipment", "Alarms"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              },
              {
                title: "Point of Sale",
                items: ["POS Systems", "Cash Registers", "Card Readers", "Receipt Printers", "Displays"],
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                  </svg>
                )
              }
            ].map((category) => (
              <div key={category.title} className="group rounded-lg bg-[#EDEDED] p-6 transition-all hover:bg-white hover:shadow-lg">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white text-[#D6452F] group-hover:bg-[#D6452F] group-hover:text-white">
                  {category.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-[#2F2F2F]">{category.title}</h3>
                <ul className="space-y-1">
                  {category.items.map((item) => (
                    <li key={item} className="text-sm text-[#8A8A8A]">• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="w-full bg-[#EDEDED] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-[#8A8A8A]">
              Popular equipment and parts for food trucks
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Commercial Griddle", category: "Cooking Equipment", price: "$1,299" },
              { name: "Under-Counter Refrigerator", category: "Refrigeration", price: "$2,499" },
              { name: "Hood System Complete", category: "Ventilation", price: "$3,999" },
              { name: "Triple Sink Package", category: "Plumbing", price: "$899" },
              { name: "Generator 8000W", category: "Electrical", price: "$1,799" },
              { name: "Serving Window 36\"", category: "Windows & Doors", price: "$749" },
              { name: "Stainless Steel Shelving", category: "Storage", price: "$349" },
              { name: "Fire Suppression System", category: "Safety", price: "$2,299" }
            ].map((product) => (
              <div key={product.name} className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4 aspect-square w-full rounded-lg bg-[#8A8A8A]/10"></div>
                <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-[#F5A623]">{product.category}</p>
                <h3 className="mb-2 text-lg font-semibold text-[#2F2F2F]">{product.name}</h3>
                <p className="mb-4 text-xl font-bold text-[#D6452F]">{product.price}</p>
                <button className="w-full rounded-lg bg-[#2F2F2F] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#D6452F]">
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Buy From Us */}
      <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-[#2F2F2F] sm:text-4xl">
              Why Buy From Us
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Quality Guaranteed",
                description: "Commercial-grade equipment built to last"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                ),
                title: "Fast Shipping",
                description: "Quick delivery across the country"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
                  </svg>
                ),
                title: "Expert Support",
                description: "Installation and technical assistance"
              },
              {
                icon: (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                  </svg>
                ),
                title: "Competitive Pricing",
                description: "Best value for your investment"
              }
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#D6452F] text-white">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold text-[#2F2F2F]">{item.title}</h3>
                <p className="text-sm text-[#8A8A8A]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#2F2F2F] px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Need Help Finding the Right Parts?
          </h2>
          <p className="mt-4 text-lg text-white/80">
            Our experts can help you select the perfect equipment for your food truck
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center sm:gap-6">
            <Link
              href="/contact"
              className="rounded-lg bg-[#D6452F] px-8 py-3.5 text-center text-base font-semibold text-white transition-all hover:bg-[#D6452F]/90"
            >
              Contact Us
            </Link>
            <Link
              href="/quote"
              className="rounded-lg border-2 border-white bg-white/10 px-8 py-3.5 text-center text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
