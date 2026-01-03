'use client';

import React, { createContext, useState, useEffect, useCallback } from 'react';
import type { Cart, CartContextType } from '@/lib/types';
import {
  createCartAction,
  getCartAction,
  addToCartAction,
  updateCartLineAction,
  removeFromCartAction,
} from '@/app/actions/cart';
import {
  getCartIdFromStorage,
  setCartIdInStorage,
  clearCartIdFromStorage,
} from '@/lib/cart-utils';

export const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUpdating, setIsUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Hydrate cart from localStorage on mount
  useEffect(() => {
    const hydrateCart = async () => {
      const cartId = getCartIdFromStorage();

      if (!cartId) {
        setIsLoading(false);
        return;
      }

      try {
        const result = await getCartAction(cartId);

        if (result.success && result.data) {
          setCart(result.data);
        } else {
          // Cart not found or expired - clear localStorage
          clearCartIdFromStorage();
        }
      } catch (err) {
        console.error('Error hydrating cart:', err);
        clearCartIdFromStorage();
      } finally {
        setIsLoading(false);
      }
    };

    hydrateCart();
  }, []);

  // Add item to cart
  const addItem = useCallback(async (variantId: string, quantity: number = 1) => {
    setIsUpdating(true);
    setError(null);

    try {
      let currentCartId = cart?.id || getCartIdFromStorage();

      // If no cart exists, create one
      if (!currentCartId) {
        const createResult = await createCartAction([{ merchandiseId: variantId, quantity }]);

        if (!createResult.success || !createResult.data) {
          throw new Error(createResult.error || 'Failed to create cart');
        }

        setCart(createResult.data);
        setCartIdInStorage(createResult.data.id);
        return;
      }

      // Add to existing cart
      const result = await addToCartAction(currentCartId, variantId, quantity);

      if (!result.success) {
        // If cart not found, create a new one
        if (result.error?.includes('not found') || result.error?.includes('404')) {
          clearCartIdFromStorage();
          const createResult = await createCartAction([{ merchandiseId: variantId, quantity }]);

          if (!createResult.success || !createResult.data) {
            throw new Error(createResult.error || 'Failed to create cart');
          }

          setCart(createResult.data);
          setCartIdInStorage(createResult.data.id);
          return;
        }

        throw new Error(result.error || 'Failed to add item to cart');
      }

      if (result.data) {
        setCart(result.data);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to add item to cart';
      setError(errorMessage);
      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, [cart?.id]);

  // Update line item quantity
  const updateQuantity = useCallback(async (lineId: string, quantity: number) => {
    if (!cart?.id) {
      setError('No cart found');
      return;
    }

    setIsUpdating(true);
    setError(null);

    try {
      const result = await updateCartLineAction(cart.id, lineId, quantity);

      if (!result.success) {
        throw new Error(result.error || 'Failed to update quantity');
      }

      if (result.data) {
        setCart(result.data);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to update quantity';
      setError(errorMessage);
      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, [cart?.id]);

  // Remove item from cart
  const removeItem = useCallback(async (lineId: string) => {
    if (!cart?.id) {
      setError('No cart found');
      return;
    }

    setIsUpdating(true);
    setError(null);

    try {
      const result = await removeFromCartAction(cart.id, lineId);

      if (!result.success) {
        throw new Error(result.error || 'Failed to remove item');
      }

      if (result.data) {
        setCart(result.data);
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to remove item';
      setError(errorMessage);
      throw err;
    } finally {
      setIsUpdating(false);
    }
  }, [cart?.id]);

  // Clear cart completely
  const clearCart = useCallback(() => {
    setCart(null);
    clearCartIdFromStorage();
    setError(null);
  }, []);

  // Refresh cart from Shopify
  const refreshCart = useCallback(async () => {
    const cartId = cart?.id || getCartIdFromStorage();

    if (!cartId) {
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const result = await getCartAction(cartId);

      if (result.success && result.data) {
        setCart(result.data);
      } else {
        // Cart not found - clear it
        clearCart();
      }
    } catch (err) {
      console.error('Error refreshing cart:', err);
      setError('Failed to refresh cart');
    } finally {
      setIsLoading(false);
    }
  }, [cart?.id, clearCart]);

  const value: CartContextType = {
    cart,
    isLoading,
    isUpdating,
    error,
    addItem,
    updateQuantity,
    removeItem,
    clearCart,
    refreshCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}
