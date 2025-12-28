// Shopify Storefront API client for Next.js (App Router)
// Uses server-side fetch with GraphQL

export type ShopifyResponse<T> = {
  data?: T;
  errors?: { message: string }[];
};

const API_VERSION = process.env.SHOPIFY_STOREFRONT_API_VERSION || "2024-10";

function getShopifyConfig() {
  const domain = process.env.SHOPIFY_STORE_DOMAIN;
  const token = process.env.SHOPIFY_STOREFRONT_API_TOKEN;

  if (!domain) throw new Error("SHOPIFY_STORE_DOMAIN is not set");
  if (!token) throw new Error("SHOPIFY_STOREFRONT_API_TOKEN is not set");

  const endpoint = `https://${domain}/api/${API_VERSION}/graphql.json`;
  return { endpoint, token };
}

export async function fetchShopify<T>({
  query,
  variables,
  cache = "force-cache",
  revalidate,
}: {
  query: string;
  variables?: Record<string, any>;
  cache?: RequestCache;
  revalidate?: number | false;
}): Promise<T> {
  const { endpoint, token } = getShopifyConfig();

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Shopify-Storefront-Access-Token": token as string,
    },
    body: JSON.stringify({ query, variables }),
    // App Router fetch cache controls
    cache,
    ...(revalidate !== undefined ? { next: { revalidate } } : {}),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Shopify fetch failed: ${res.status} ${res.statusText} - ${text}`);
  }

  const json = (await res.json()) as ShopifyResponse<T>;

  if (json.errors?.length) {
    throw new Error(`Shopify GraphQL errors: ${json.errors.map((e) => e.message).join("; ")}`);
  }

  if (!json.data) throw new Error("Shopify response missing data");

  return json.data;
}

// Parts/products listing query similar to Hydrogen's PRODUCTS_QUERY
export const PARTS_PRODUCTS_QUERY = /* GraphQL */ `
  query PartsProducts($first: Int, $after: String, $last: Int, $before: String) {
    products(first: $first, after: $after, last: $last, before: $before) {
      nodes {
        id
        title
        handle
        productType
        vendor
        availableForSale
        tags
        createdAt
        priceRange {
          minVariantPrice { amount currencyCode }
          maxVariantPrice { amount currencyCode }
        }
        compareAtPriceRange { minVariantPrice { amount currencyCode } }
        featuredImage { id url altText width height }
      }
      pageInfo { hasPreviousPage hasNextPage startCursor endCursor }
    }
  }
`;

export type MoneyV2 = { amount: string; currencyCode: string };

export type ProductNode = {
  id: string;
  title: string;
  handle: string;
  productType?: string | null;
  vendor?: string | null;
  availableForSale: boolean;
  tags: string[];
  createdAt: string;
  priceRange: { minVariantPrice: MoneyV2; maxVariantPrice: MoneyV2 };
  compareAtPriceRange?: { minVariantPrice?: MoneyV2 | null } | null;
  featuredImage?: { id: string; url: string; altText?: string | null; width?: number | null; height?: number | null } | null;
};

export type PartsProductsData = {
  products: { nodes: ProductNode[]; pageInfo: { startCursor?: string; endCursor?: string; hasNextPage: boolean; hasPreviousPage: boolean } };
};

export async function getPartsProducts(variables: { first?: number; after?: string; last?: number; before?: string } = {}) {
  const data = await fetchShopify<PartsProductsData>({
    query: PARTS_PRODUCTS_QUERY,
    variables: { first: 100, ...variables },
    // Revalidate periodically to keep data fresh but cache by default
    revalidate: 300,
  });
  return data.products;
}
export const brandName = "Food Truck_Parts";
export const brandNameLegal = "Food Truck Parts LLC";

