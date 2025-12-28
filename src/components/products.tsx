import Link from "next/link";
import Image from "next/image";

const categories = [
  {
    name: "Cooking Equipment",
    description: "Grills, fryers, griddles, and more",
    href: "/parts/cooking-equipment",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    name: "Service Parts",
    description: "Replacement parts and components",
    href: "/parts/service-parts",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
  },
  {
    name: "Accessories",
    description: "Awnings, lighting, storage solutions",
    href: "/parts/accessories",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
      </svg>
    ),
  },
  {
    name: "Custom Builds",
    description: "Tailored solutions for your truck",
    href: "/parts/custom-builds",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const featuredProducts = [
  {
    id: 1,
    name: "Commercial Deep Fryer",
    category: "Cooking Equipment",
    description: "Heavy-duty propane deep fryer with dual baskets, perfect for high-volume operations.",
    price: "$1,299",
    href: "/parts/cooking-equipment/commercial-deep-fryer",
    image: null,
  },
  {
    id: 2,
    name: "Refrigeration Compressor",
    category: "Service Parts",
    description: "Replacement compressor unit compatible with most food truck refrigeration systems.",
    price: "Call for Quote",
    href: "/parts/service-parts/refrigeration-compressor",
    image: null,
  },
  {
    id: 3,
    name: "LED Awning Light Kit",
    category: "Accessories",
    description: "Weatherproof LED strip lighting kit for serving window illumination.",
    price: "$189",
    href: "/parts/accessories/led-awning-light-kit",
    image: null,
  },
  {
    id: 4,
    name: "Flat Top Griddle 36\"",
    category: "Cooking Equipment",
    description: "Stainless steel commercial griddle with adjustable heat zones.",
    price: "$899",
    href: "/parts/cooking-equipment/flat-top-griddle-36",
    image: null,
  },
  {
    id: 5,
    name: "Propane Regulator Kit",
    category: "Service Parts",
    description: "Complete regulator assembly with hose and fittings for food truck propane systems.",
    price: "$79",
    href: "/parts/service-parts/propane-regulator-kit",
    image: null,
  },
  {
    id: 6,
    name: "Stainless Prep Table",
    category: "Accessories",
    description: "Compact folding prep table with adjustable undershelf for mobile kitchens.",
    price: "$349",
    href: "/parts/accessories/stainless-prep-table",
    image: null,
  },
];

export default function Products() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-[#2F2F2F] sm:text-4xl">
            Parts & Equipment
          </h2>
          <p className="mt-4 text-lg text-[#8A8A8A]">
            Browse our complete inventory of food truck parts, equipment, and accessories
          </p>
        </div>

        {/* Category List */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex flex-col items-center rounded-xl bg-[#EDEDED] p-6 text-center transition-all hover:bg-[#D6452F] hover:shadow-lg"
            >
              <div className="mb-3 text-[#D6452F] transition-colors group-hover:text-white">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold text-[#2F2F2F] transition-colors group-hover:text-white">
                {category.name}
              </h3>
              <p className="mt-1 text-sm text-[#8A8A8A] transition-colors group-hover:text-white/80">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Featured Products Grid */}
        <div className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#2F2F2F]">
              Featured Products
            </h3>
            <Link
              href="/parts"
              className="text-sm font-medium text-[#D6452F] hover:text-[#D6452F]/80"
            >
              View all products →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-xl border border-[#EDEDED] bg-white transition-all hover:border-[#8A8A8A]/30 hover:shadow-lg"
              >
                {/* Product Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-[#EDEDED]">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <svg className="h-16 w-16 text-[#8A8A8A]/30" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                      </svg>
                    </div>
                  )}
                  {/* Category Badge */}
                  <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#2F2F2F] backdrop-blur-sm">
                    {product.category}
                  </span>
                </div>

                {/* Product Info */}
                <div className="p-5">
                  <h4 className="text-lg font-semibold text-[#2F2F2F] group-hover:text-[#D6452F]">
                    {product.name}
                  </h4>
                  <p className="mt-2 line-clamp-2 text-sm text-[#8A8A8A]">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-lg font-bold text-[#D6452F]">
                      {product.price}
                    </span>
                    <Link
                      href={product.href}
                      className="rounded-lg bg-[#EDEDED] px-4 py-2 text-sm font-medium text-[#2F2F2F] transition-colors hover:bg-[#D6452F] hover:text-white"
                    >
                      More Details
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-2xl bg-[#EDEDED] p-8 text-center sm:p-12">
          <h3 className="text-2xl font-bold text-[#2F2F2F] sm:text-3xl">
            Can't find what you're looking for?
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-[#8A8A8A]">
            We have access to thousands of parts and can source specialty items.
            Contact our team for custom orders and hard-to-find components.
          </p>
          <Link
            href="/quote"
            className="mt-8 inline-block rounded-lg bg-[#D6452F] px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-[#D6452F]/90 hover:shadow-xl"
          >
            Request a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}