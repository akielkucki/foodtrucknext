'use client';

import React, { useContext } from 'react';
import { CartContext } from '@/components/CartContext';
import { EmptyCart } from './EmptyCart';
import { CartLineItem } from './CartLineItem';
import { CartSummary } from './CartSummary';
import { Spinner } from '@/components/ui/spinner';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '@/components/ui/toast';

export function CartPage() {
  const context = useContext(CartContext);
  const { showToast } = useToast();

  if (!context) {
    throw new Error('CartPage must be used within CartProvider');
  }

  const { cart, isLoading, isUpdating, error, updateQuantity, removeItem } = context;

  // Handle quantity update with toast feedback
  const handleUpdateQuantity = async (lineId: string, quantity: number) => {
    try {
      await updateQuantity(lineId, quantity);
      showToast('Cart updated', 'success');
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Failed to update cart', 'error');
    }
  };

  // Handle remove with toast feedback
  const handleRemove = async (lineId: string) => {
    try {
      await removeItem(lineId);
      showToast('Item removed from cart', 'success');
    } catch (error) {
      showToast(error instanceof Error ? error.message : 'Failed to remove item', 'error');
    }
  };

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center">
        <Spinner size="lg" />
      </div>
    );
  }

  // Error state
  if (error && !cart) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md bg-white p-8 rounded-2xl shadow-lg border border-red-200">
          <p className="text-red-600 font-semibold mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="text-red-600 hover:text-red-700 font-semibold transition-colors"
          >
            Try again
          </button>
        </div>
      </div>
    );
  }

  // Empty cart
  if (!cart || cart.lines.nodes.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-slate-900">Shopping Cart</h1>
          <p className="mt-3 text-lg text-slate-600">
            {cart.totalQuantity} {cart.totalQuantity === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {/* Cart content - Side by side layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart items - Left side */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8">
              <AnimatePresence mode="popLayout">
                {cart.lines.nodes.map((line) => (
                  <motion.div
                    key={line.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
                  >
                    <CartLineItem
                      line={line}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemove}
                      isUpdating={isUpdating}
                    />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Continue shopping link */}
            <div className="mt-8 text-center lg:text-left">
              <a
                href="/parts"
                className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-2 transition-colors group"
              >
                <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Continue Shopping
              </a>
            </div>
          </div>

          {/* Cart summary - Right side */}
          <div className="lg:col-span-5">
            <CartSummary cart={cart} />
          </div>
        </div>
      </div>
    </div>
  );
}
