import Link from 'next/link';
import React from 'react';

export function EmptyCart() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 flex flex-col items-center justify-center py-16 px-4">
      <div className="text-center max-w-md bg-white p-12 rounded-2xl shadow-lg border border-slate-200">
        {/* Shopping cart icon */}
        <div className="w-32 h-32 mx-auto mb-6 bg-[var(--color-primary-light)]/20 rounded-full flex items-center justify-center">
          <svg
            className="w-16 h-16 text-[var(--color-primary)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
            />
          </svg>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-3">Your cart is empty</h2>
        <p className="text-slate-600 mb-8 text-lg">
          Looks like you haven't added any items to your cart yet.
        </p>

        <Link
          href="/parts"
          className="inline-block bg-[var(--color-primary)] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-primary-dark)] transition-all shadow-lg shadow-[color:rgba(150,56,79,0.3)] hover:shadow-xl hover:shadow-[color:rgba(150,56,79,0.4)]"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}
