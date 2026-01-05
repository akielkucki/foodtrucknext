'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

type FeaturedProduct = {
  title: string;
  handle: string;
  image: string;
  price: string;
  productType: string;
};

export default function FeaturedProductsClient({ products }: { products: FeaturedProduct[] }) {
  return (
    <section className="w-full bg-white px-6 py-16 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              Featured Products
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Premium equipment and parts for your mobile kitchen
            </p>
          </motion.div>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={product.handle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Link
                href={`/parts/${product.handle}`}
                className="group block relative overflow-hidden rounded-2xl bg-slate-50 shadow-sm ring-1 ring-slate-100 transition-all hover:shadow-lg hover:ring-orange-200"
              >
                <div className="aspect-square w-full relative overflow-hidden bg-slate-200">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  {product.productType && (
                    <span className="inline-block mb-2 text-xs font-medium uppercase tracking-wide text-orange-600">
                      {product.productType}
                    </span>
                  )}
                  <h3 className="mb-2 text-lg font-bold text-slate-900 group-hover:text-orange-600 transition-colors line-clamp-2">
                    {product.title}
                  </h3>
                  <p className="text-xl font-semibold text-slate-700">
                    {product.price}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/parts"
            className="inline-flex items-center gap-2 rounded-full bg-orange-600 px-8 py-4 text-lg font-semibold text-white transition-colors hover:bg-orange-700"
          >
            View All Products
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
