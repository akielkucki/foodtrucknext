import { notFound } from "next/navigation";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { getProduct, getProducts } from "@/lib/shopify";
import ProductDetails from "@/components/products/ProductDetails";

type Props = {
  params: Promise<{ handle: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    return { title: "Product Not Found" };
  }

  return {
    title: `${product.title} | Royal Vending Cart`,
    description: product.description?.slice(0, 160) || `Shop ${product.title}`,
    openGraph: {
      images: product.featuredImage?.url ? [product.featuredImage.url] : [],
    },
  };
}

export async function generateStaticParams() {
  const products = await getProducts({ first: 100 });
  return products.nodes.map((product) => ({
    handle: product.handle,
  }));
}

export default async function ProductPage({ params }: Props) {
  const { handle } = await params;
  const product = await getProduct(handle);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        <ProductDetails product={product} />
      </main>

      <Footer />
    </div>
  );
}
