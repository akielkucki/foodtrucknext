'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import type { CartLine } from '@/lib/types';
import { formatMoney } from '@/lib/shopify';
import { Spinner } from '@/components/ui/spinner';

type CartLineItemProps = {
  line: CartLine;
  onUpdateQuantity: (lineId: string, quantity: number) => Promise<void>;
  onRemove: (lineId: string) => Promise<void>;
  isUpdating: boolean;
};

export function CartLineItem({ line, onUpdateQuantity, onRemove, isUpdating }: CartLineItemProps) {
  const [localQuantity, setLocalQuantity] = useState(line.quantity);
  const [isLocalUpdating, setIsLocalUpdating] = useState(false);

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1 || newQuantity === line.quantity) return;

    setLocalQuantity(newQuantity);
    setIsLocalUpdating(true);

    try {
      await onUpdateQuantity(line.id, newQuantity);
    } catch (error) {
      // Revert on error
      setLocalQuantity(line.quantity);
    } finally {
      setIsLocalUpdating(false);
    }
  };

  const handleRemove = async () => {
    setIsLocalUpdating(true);
    try {
      await onRemove(line.id);
    } catch (error) {
      setIsLocalUpdating(false);
    }
  };

  const disabled = isUpdating || isLocalUpdating;
  const imageUrl = line.merchandise.product.featuredImage?.url || '/placeholder-image.png';
  const imageAlt = line.merchandise.product.featuredImage?.altText || line.merchandise.product.title;

  return (
    <div className="relative flex gap-6 py-6 border-b border-slate-100 last:border-0">
      {/* Loading overlay */}
      {disabled && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex items-center justify-center rounded-lg">
          <Spinner size="md" />
        </div>
      )}

      {/* Product image */}
      <Link
        href={`/products/${line.merchandise.product.handle}`}
        className="flex-shrink-0 w-28 h-28 rounded-xl overflow-hidden bg-slate-50 border border-slate-200 hover:opacity-75 hover:shadow-lg transition-all"
      >
        <Image
          src={imageUrl}
          alt={imageAlt}
          width={96}
          height={96}
          className="w-full h-full object-cover"
        />
      </Link>

      {/* Product details */}
      <div className="flex-1 flex flex-col">
        <div className="flex justify-between">
          <div className="flex-1">
            <Link
              href={`/products/${line.merchandise.product.handle}`}
              className="font-bold text-slate-900 hover:text-[var(--color-primary)] transition-colors text-lg"
            >
              {line.merchandise.product.title}
            </Link>

            {/* Variant info */}
            {line.merchandise.title !== 'Default Title' && (
              <p className="mt-1 text-sm font-medium text-slate-600">{line.merchandise.title}</p>
            )}

            {/* Selected options */}
            {line.merchandise.selectedOptions && line.merchandise.selectedOptions.length > 0 && (
              <div className="mt-1 text-xs text-slate-500">
                {line.merchandise.selectedOptions
                  .filter((option) => option.value !== 'Default Title')
                  .map((option, idx) => (
                    <span key={idx}>
                      {option.name}: {option.value}
                      {idx < line.merchandise.selectedOptions.length - 1 && ', '}
                    </span>
                  ))}
              </div>
            )}

            {/* Price per item */}
            <p className="mt-1 text-sm text-slate-600">
              {formatMoney(line.merchandise.price)} each
            </p>
          </div>

          {/* Line total */}
          <div className="text-right">
            <p className="font-bold text-lg text-[var(--color-primary)]">
              {formatMoney(line.cost.totalAmount)}
            </p>
          </div>
        </div>

        {/* Quantity controls and remove button */}
        <div className="mt-4 flex items-center justify-between">
          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleQuantityChange(localQuantity - 1)}
              disabled={disabled || localQuantity <= 1}
              className="w-10 h-10 rounded-lg border-2 border-slate-300 flex items-center justify-center hover:bg-[var(--color-primary-light)]/20 hover:border-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Decrease quantity"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>

            <input
              type="number"
              min="1"
              value={localQuantity}
              onChange={(e) => {
                const val = parseInt(e.target.value);
                if (!isNaN(val) && val > 0) {
                  setLocalQuantity(val);
                }
              }}
              onBlur={() => handleQuantityChange(localQuantity)}
              disabled={disabled}
              className="w-20 h-10 text-center border-2 border-slate-300 rounded-lg font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] disabled:opacity-50"
              aria-label="Quantity"
            />

            <button
              onClick={() => handleQuantityChange(localQuantity + 1)}
              disabled={disabled}
              className="w-10 h-10 rounded-lg border-2 border-slate-300 flex items-center justify-center hover:bg-[var(--color-primary-light)]/20 hover:border-[var(--color-primary)] disabled:opacity-50 disabled:cursor-not-allowed transition-all"
              aria-label="Increase quantity"
            >
              <svg className="w-5 h-5 text-slate-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </button>
          </div>

          {/* Remove button */}
          <button
            onClick={handleRemove}
            disabled={disabled}
            className="text-sm font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-dark)] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
