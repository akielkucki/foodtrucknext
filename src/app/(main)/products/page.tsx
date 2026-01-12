import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProductGrid from "@/components/parts/ProductGrid";
import { getProducts } from "@/lib/shopify";

export const metadata = {
  title: "Products | Royal Vending Cart",
  description: "Browse our full catalog of food truck parts, equipment, and accessories.",
};

export default async function ProductsPage() {
  const products = await getProducts({ first: 100 });

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-slate-950">
        <div className="absolute inset-0 h-full w-full">
          <div className="absolute inset-0 bg-[url('/heroalt.jpg')] bg-cover bg-center opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-950/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-sm font-medium text-[#F5A623] backdrop-blur-sm">
              <span className="mr-2 h-2 w-2 rounded-full bg-[#F5A623] animate-pulse" />
              Shop All Products
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              All Products
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Browse our complete selection of premium food truck equipment, parts, and accessories.
            </p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full px-6 py-16 lg:px-8 bg-slate-900">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-xl font-bold text-white">
              {products.nodes.length} Product{products.nodes.length !== 1 && "s"}
            </h2>
          </div>
          <ProductGrid products={products.nodes} />
        </div>
      </section>

      <Footer />
    </div>
  );
}
