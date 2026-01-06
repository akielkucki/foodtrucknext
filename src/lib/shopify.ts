// Shopify Storefront API client for Next.js (App Router)
// Uses @shopify/storefront-api-client

import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const API_VERSION = "2025-04";

function getShopifyClient() {
    const storeDomain = process.env.PUBLIC_STORE_DOMAIN;
    const publicAccessToken = process.env.PUBLIC_STOREFRONT_API_TOKEN;

    if (!storeDomain) throw new Error("PUBLIC_STORE_DOMAIN is not set");
    if (!publicAccessToken) {
        throw new Error("PUBLIC_STOREFRONT_API_TOKEN must be set");
    }

    return createStorefrontApiClient({
        storeDomain,
        apiVersion: API_VERSION,
        publicAccessToken,
    });
}

// Singleton client instance
let client: ReturnType<typeof createStorefrontApiClient> | null = null;

function getClient() {
    if (!client) {
        client = getShopifyClient();
    }
    return client;
}

export async function fetchShopify<T>({
    query,
    variables,
}: {
    query: string;
    variables?: Record<string, unknown>;
    cache?: RequestCache;
    revalidate?: number | false;
}): Promise<T> {
    const shopifyClient = getClient();

    const { data, errors } = await shopifyClient.request(query, {
        variables,
    });

    if (errors) {
        throw new Error(`Shopify GraphQL errors: ${errors.message}`);
    }

    if (!data) throw new Error("Shopify response missing data");

    return data as T;
}

// ============================================================================
// Types
// ============================================================================

export type MoneyV2 = {
    amount: string;
    currencyCode: string;
};

export type Image = {
    id: string;
    url: string;
    altText?: string | null;
    width?: number | null;
    height?: number | null;
};

export type ProductVariant = {
    id: string;
    title: string;
    availableForSale: boolean;
    price: MoneyV2;
    compareAtPrice?: MoneyV2 | null;
    selectedOptions: { name: string; value: string }[];
    image?: Image | null;
};

export type ProductNode = {
    id: string;
    title: string;
    handle: string;
    description: string;
    descriptionHtml: string;
    productType?: string | null;
    vendor?: string | null;
    availableForSale: boolean;
    tags: string[];
    createdAt: string;
    updatedAt: string;
    priceRange: {
        minVariantPrice: MoneyV2;
        maxVariantPrice: MoneyV2;
    };
    compareAtPriceRange?: {
        minVariantPrice?: MoneyV2 | null;
        maxVariantPrice?: MoneyV2 | null;
    } | null;
    featuredImage?: Image | null;
    images: {
        nodes: Image[];
    };
    variants: {
        nodes: ProductVariant[];
    };
    options: {
        id: string;
        name: string;
        values: string[];
    }[];
};

export type ProductNodeListItem = Omit<ProductNode, 'description' | 'descriptionHtml' | 'images' | 'options' | 'updatedAt'>;

export type PageInfo = {
    startCursor?: string | null;
    endCursor?: string | null;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
};

export type Collection = {
    id: string;
    handle: string;
    title: string;
    description: string;
    image?: Image | null;
};

// ============================================================================
// GraphQL Queries
// ============================================================================

// Products listing query (lightweight for list views)
export const PRODUCTS_QUERY = /* GraphQL */ `
  query Products($first: Int, $after: String, $last: Int, $before: String, $query: String, $sortKey: ProductSortKeys, $reverse: Boolean) {
    products(first: $first, after: $after, last: $last, before: $before, query: $query, sortKey: $sortKey, reverse: $reverse) {
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
        compareAtPriceRange {
          minVariantPrice { amount currencyCode }
        }
        featuredImage { id url altText width height }
        variants(first: 1) {
          nodes {
            id
            title
            availableForSale
            price { amount currencyCode }
          }
        }
      }
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
    }
  }
`;

// Single product query (full details)
export const PRODUCT_QUERY = /* GraphQL */ `
  query Product($handle: String!) {
    product(handle: $handle) {
      id
      title
      handle
      description
      descriptionHtml
      productType
      vendor
      availableForSale
      tags
      createdAt
      updatedAt
      priceRange {
        minVariantPrice { amount currencyCode }
        maxVariantPrice { amount currencyCode }
      }
      compareAtPriceRange {
        minVariantPrice { amount currencyCode }
        maxVariantPrice { amount currencyCode }
      }
      featuredImage { id url altText width height }
      images(first: 20) {
        nodes { id url altText width height }
      }
      options {
        id
        name
        values
      }
      variants(first: 100) {
        nodes {
          id
          title
          availableForSale
          price { amount currencyCode }
          compareAtPrice { amount currencyCode }
          selectedOptions { name value }
          image { id url altText width height }
        }
      }
    }
  }
`;

// Collections query
export const COLLECTIONS_QUERY = /* GraphQL */ `
  query Collections($first: Int) {
    collections(first: $first) {
      nodes {
        id
        handle
        title
        description
        image { id url altText width height }
      }
    }
  }
`;

// Collection with products query
export const COLLECTION_PRODUCTS_QUERY = /* GraphQL */ `
  query CollectionProducts($handle: String!, $first: Int, $after: String) {
    collection(handle: $handle) {
      id
      handle
      title
      description
      image { id url altText width height }
      products(first: $first, after: $after) {
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
          compareAtPriceRange {
            minVariantPrice { amount currencyCode }
          }
          featuredImage { id url altText width height }
        }
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
      }
    }
  }
`;

// ============================================================================
// Cart Types & Queries
// ============================================================================

export type CartLine = {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        product: {
            id: string;
            title: string;
            handle: string;
            featuredImage?: Image | null;
        };
        price: MoneyV2;
        selectedOptions: { name: string; value: string }[];
    };
    cost: {
        totalAmount: MoneyV2;
        compareAtAmountPerQuantity?: MoneyV2 | null;
    };
};

export type Cart = {
    id: string;
    checkoutUrl: string;
    totalQuantity: number;
    cost: {
        subtotalAmount: MoneyV2;
        totalAmount: MoneyV2;
        totalTaxAmount?: MoneyV2 | null;
    };
    lines: {
        nodes: CartLine[];
    };
};

const CART_FRAGMENT = /* GraphQL */ `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      subtotalAmount { amount currencyCode }
      totalAmount { amount currencyCode }
      totalTaxAmount { amount currencyCode }
    }
    lines(first: 100) {
      nodes {
        id
        quantity
        merchandise {
          ... on ProductVariant {
            id
            title
            product {
              id
              title
              handle
              featuredImage { id url altText width height }
            }
            price { amount currencyCode }
            selectedOptions { name value }
          }
        }
        cost {
          totalAmount { amount currencyCode }
          compareAtAmountPerQuantity { amount currencyCode }
        }
      }
    }
  }
`;

export const CREATE_CART_MUTATION = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation CreateCart($input: CartInput!) {
    cartCreate(input: $input) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const ADD_TO_CART_MUTATION = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation AddToCart($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const UPDATE_CART_MUTATION = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation UpdateCart($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const REMOVE_FROM_CART_MUTATION = /* GraphQL */ `
  ${CART_FRAGMENT}
  mutation RemoveFromCart($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart { ...CartFragment }
      userErrors { field message }
    }
  }
`;

export const GET_CART_QUERY = /* GraphQL */ `
  ${CART_FRAGMENT}
  query GetCart($cartId: ID!) {
    cart(id: $cartId) { ...CartFragment }
  }
`;

// ============================================================================
// Data Fetching Functions
// ============================================================================

export type ProductsQueryVariables = {
    first?: number;
    after?: string;
    last?: number;
    before?: string;
    query?: string;
    sortKey?: 'TITLE' | 'PRODUCT_TYPE' | 'VENDOR' | 'PRICE' | 'BEST_SELLING' | 'CREATED_AT' | 'UPDATED_AT' | 'RELEVANCE';
    reverse?: boolean;
};

export type ProductsData = {
    products: {
        nodes: ProductNodeListItem[];
        pageInfo: PageInfo;
    };
};

export async function getProducts(variables: ProductsQueryVariables = {}) {
    const data = await fetchShopify<ProductsData>({
        query: PRODUCTS_QUERY,
        variables: { first: 100, ...variables },
    });
    return data.products;
}

// Alias for backward compatibility
export const getPartsProducts = getProducts;

export type ProductData = {
    product: ProductNode | null;
};

export async function getProduct(handle: string) {
    const data = await fetchShopify<ProductData>({
        query: PRODUCT_QUERY,
        variables: { handle },
    });
    return data.product;
}

export type CollectionsData = {
    collections: { nodes: Collection[] };
};

export async function getCollections(first: number = 50) {
    const data = await fetchShopify<CollectionsData>({
        query: COLLECTIONS_QUERY,
        variables: { first },
    });
    return data.collections.nodes;
}

export type CollectionProductsData = {
    collection: Collection & {
        products: {
            nodes: ProductNodeListItem[];
            pageInfo: PageInfo;
        };
    } | null;
};

export async function getCollectionWithProducts(handle: string, first: number = 100, after?: string) {
    const data = await fetchShopify<CollectionProductsData>({
        query: COLLECTION_PRODUCTS_QUERY,
        variables: { handle, first, after },
    });
    return data.collection;
}

// ============================================================================
// Cart Functions
// ============================================================================

export type CartCreateData = {
    cartCreate: {
        cart: Cart | null;
        userErrors: { field: string[]; message: string }[];
    };
};

export async function createCart(lines?: { merchandiseId: string; quantity: number }[]) {
    const data = await fetchShopify<CartCreateData>({
        query: CREATE_CART_MUTATION,
        variables: { input: { lines: lines || [] } },
    });

    if (data.cartCreate.userErrors.length) {
        throw new Error(data.cartCreate.userErrors.map(e => e.message).join('; '));
    }

    return data.cartCreate.cart;
}

export type CartData = {
    cart: Cart | null;
};

export async function getCart(cartId: string) {
    const data = await fetchShopify<CartData>({
        query: GET_CART_QUERY,
        variables: { cartId },
    });
    return data.cart;
}

export type CartLinesAddData = {
    cartLinesAdd: {
        cart: Cart | null;
        userErrors: { field: string[]; message: string }[];
    };
};

export async function addToCart(cartId: string, lines: { merchandiseId: string; quantity: number }[]) {
    const data = await fetchShopify<CartLinesAddData>({
        query: ADD_TO_CART_MUTATION,
        variables: { cartId, lines },
    });

    if (data.cartLinesAdd.userErrors.length) {
        throw new Error(data.cartLinesAdd.userErrors.map(e => e.message).join('; '));
    }

    return data.cartLinesAdd.cart;
}

export type CartLinesUpdateData = {
    cartLinesUpdate: {
        cart: Cart | null;
        userErrors: { field: string[]; message: string }[];
    };
};

export async function updateCartLine(cartId: string, lines: { id: string; quantity: number }[]) {
    const data = await fetchShopify<CartLinesUpdateData>({
        query: UPDATE_CART_MUTATION,
        variables: { cartId, lines },
    });

    if (data.cartLinesUpdate.userErrors.length) {
        throw new Error(data.cartLinesUpdate.userErrors.map(e => e.message).join('; '));
    }

    return data.cartLinesUpdate.cart;
}

export type CartLinesRemoveData = {
    cartLinesRemove: {
        cart: Cart | null;
        userErrors: { field: string[]; message: string }[];
    };
};

export async function removeFromCart(cartId: string, lineIds: string[]) {
    const data = await fetchShopify<CartLinesRemoveData>({
        query: REMOVE_FROM_CART_MUTATION,
        variables: { cartId, lineIds },
    });

    if (data.cartLinesRemove.userErrors.length) {
        throw new Error(data.cartLinesRemove.userErrors.map(e => e.message).join('; '));
    }

    return data.cartLinesRemove.cart;
}

// ============================================================================
// Utility Functions
// ============================================================================

export function formatMoney(money: MoneyV2): string {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: money.currencyCode,
    }).format(parseFloat(money.amount));
}

// ============================================================================
// Brand Constants
// ============================================================================

export const brandName = "Royal Vending Cart";
export const brandNameLegal = "Food Truck Parts LLC";
