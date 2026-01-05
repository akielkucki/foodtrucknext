import { getProducts, ProductNodeListItem, formatMoney } from "@/lib/shopify";
import FeaturedProductsClient from "./featured-products-client";

export default async function FeaturedProducts() {
  const products = await getProducts({ first: 3, sortKey: 'BEST_SELLING' });

  const featuredProducts = products.nodes.map((product: ProductNodeListItem) => ({
    title: product.title,
    handle: product.handle,
    image: product.featuredImage?.url || '/project-1.jpg',
    price: formatMoney(product.priceRange.minVariantPrice),
    productType: product.productType || '',
  }));

  return <FeaturedProductsClient products={featuredProducts} />;
}
