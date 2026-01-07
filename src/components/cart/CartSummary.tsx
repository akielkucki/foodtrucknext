'use client';

import React, { useState } from 'react';
import type { Cart } from '@/lib/types';
import { formatMoney } from '@/lib/shopify';
import { Spinner } from '@/components/ui/spinner';

type CartSummaryProps = {
  cart: Cart;
};

export function CartSummary({ cart }: CartSummaryProps) {
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    if (!cart.checkoutUrl) return;

    setIsCheckingOut(true);
    // Redirect to Shopify checkout
    window.location.href = cart.checkoutUrl;
  };

  const hasItems = cart.totalQuantity > 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 sticky top-4">
      <h2 className="text-2xl font-bold text-slate-900 mb-6">Order Summary</h2>

      <div className="space-y-4 mb-6">
        {/* Subtotal */}
        <div className="flex justify-between">
          <span className="text-slate-700 font-medium">Subtotal ({cart.totalQuantity} items)</span>
          <span className="font-bold text-slate-900 text-lg">
            {formatMoney(cart.cost.subtotalAmount)}
          </span>
        </div>

        {/* Tax (if available) */}
        {cart.cost.totalTaxAmount && parseFloat(cart.cost.totalTaxAmount.amount) > 0 && (
          <div className="flex justify-between">
            <span className="text-slate-700 font-medium">Estimated Tax</span>
            <span className="font-bold text-slate-900 text-lg">
              {formatMoney(cart.cost.totalTaxAmount)}
            </span>
          </div>
        )}

        {/* Shipping note */}
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
          <p className="text-sm text-slate-600 font-medium">
            Shipping calculated at checkout
          </p>
        </div>
      </div>

      {/* Total */}
      <div className="pt-6 border-t-2 border-slate-200 mb-8">
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-slate-900">Total</span>
          <span className="text-3xl font-bold text-[var(--color-primary)]">
            {formatMoney(cart.cost.totalAmount)}
          </span>
        </div>
      </div>

      {/* Checkout button */}
      <button
        onClick={handleCheckout}
        disabled={!hasItems || !cart.checkoutUrl || isCheckingOut}
        className="w-full bg-[var(--color-primary)] text-white py-4 px-6 rounded-xl font-bold text-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg shadow-[color:rgba(150,56,79,0.3)] hover:shadow-xl hover:shadow-[color:rgba(150,56,79,0.4)] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isCheckingOut ? (
          <>
            <Spinner size="sm" />
            <span>Redirecting...</span>
          </>
        ) : (
          'Proceed to Checkout'
        )}
      </button>

      {/* Security note */}
      <div className="mt-4 text-center bg-slate-50 border border-slate-200 rounded-lg p-3">
        <div className="flex items-center justify-center gap-2">
          <svg className="w-4 h-4 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <p className="text-sm text-slate-700 font-semibold">
            Secure checkout powered by Shopify
          </p>
        </div>
      </div>

      {/* Links */}
      <div className="mt-6 pt-6 border-t border-slate-200 space-y-3">
        <a
          href="/shipping"
          className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Shipping Information
        </a>
        <a
          href="/returns"
          className="flex items-center justify-center gap-2 text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
          </svg>
          Return Policy
        </a>
      </div>
    </div>
  );
}
