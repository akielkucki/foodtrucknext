'use server';

import type { Cart } from '@/lib/shopify';
import {
  createCart as shopifyCreateCart,
  getCart as shopifyGetCart,
  addToCart as shopifyAddToCart,
  updateCartLine as shopifyUpdateCartLine,
  removeFromCart as shopifyRemoveFromCart,
} from '@/lib/shopify';
import type { CartActionResult } from '@/lib/types';

/**
 * Create a new Shopify cart
 * @param lines Optional initial cart lines to add
 */
export async function createCartAction(
  lines?: { merchandiseId: string; quantity: number }[]
): Promise<CartActionResult<Cart>> {
  try {
    const cart = await shopifyCreateCart(lines);

    if (!cart) {
      return {
        success: false,
        error: 'Failed to create cart - no cart returned from Shopify',
      };
    }

    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    console.error('Error creating cart:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to create cart',
    };
  }
}

/**
 * Get an existing cart by ID
 * @param cartId Shopify cart ID
 */
export async function getCartAction(cartId: string): Promise<CartActionResult<Cart>> {
  try {
    const cart = await shopifyGetCart(cartId);

    if (!cart) {
      return {
        success: false,
        error: 'Cart not found',
      };
    }

    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    console.error('Error fetching cart:', error);

    // If cart doesn't exist (404), return success: false without data
    // This signals to the client to create a new cart
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to fetch cart',
    };
  }
}

/**
 * Add an item to the cart
 * @param cartId Shopify cart ID
 * @param variantId Product variant ID to add
 * @param quantity Quantity to add (default: 1)
 */
export async function addToCartAction(
  cartId: string,
  variantId: string,
  quantity: number = 1
): Promise<CartActionResult<Cart>> {
  try {
    if (!variantId) {
      return {
        success: false,
        error: 'Variant ID is required',
      };
    }

    if (quantity < 1) {
      return {
        success: false,
        error: 'Quantity must be at least 1',
      };
    }

    const cart = await shopifyAddToCart(cartId, [{ merchandiseId: variantId, quantity }]);

    if (!cart) {
      return {
        success: false,
        error: 'Failed to add item to cart',
      };
    }

    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    console.error('Error adding to cart:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to add item to cart',
    };
  }
}

/**
 * Update a cart line item quantity
 * @param cartId Shopify cart ID
 * @param lineId Cart line ID to update
 * @param quantity New quantity (set to 0 to remove)
 */
export async function updateCartLineAction(
  cartId: string,
  lineId: string,
  quantity: number
): Promise<CartActionResult<Cart>> {
  try {
    if (!lineId) {
      return {
        success: false,
        error: 'Line ID is required',
      };
    }

    if (quantity < 0) {
      return {
        success: false,
        error: 'Quantity cannot be negative',
      };
    }

    // If quantity is 0, remove the item instead
    if (quantity === 0) {
      return removeFromCartAction(cartId, lineId);
    }

    const cart = await shopifyUpdateCartLine(cartId, [{ id: lineId, quantity }]);

    if (!cart) {
      return {
        success: false,
        error: 'Failed to update cart line',
      };
    }

    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    console.error('Error updating cart line:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to update cart line',
    };
  }
}

/**
 * Remove an item from the cart
 * @param cartId Shopify cart ID
 * @param lineId Cart line ID to remove
 */
export async function removeFromCartAction(
  cartId: string,
  lineId: string
): Promise<CartActionResult<Cart>> {
  try {
    if (!lineId) {
      return {
        success: false,
        error: 'Line ID is required',
      };
    }

    const cart = await shopifyRemoveFromCart(cartId, [lineId]);

    if (!cart) {
      return {
        success: false,
        error: 'Failed to remove item from cart',
      };
    }

    return {
      success: true,
      data: cart,
    };
  } catch (error) {
    console.error('Error removing from cart:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to remove item from cart',
    };
  }
}
