"use client";

import { useContext, useState } from "react";
import { CartContext } from "@/components/CartContext";
import { useToast } from "@/components/ui/toast";
import { Spinner } from "@/components/ui/spinner";

interface AddToCartButtonProps {
  variantId: string;
  quantity?: number;
  disabled?: boolean;
  className?: string;
}

export default function AddToCartButton({
  variantId,
  quantity = 1,
  disabled = false,
  className = ""
}: AddToCartButtonProps) {
  const cartContext = useContext(CartContext);
  const { showToast } = useToast();
  const [isAdding, setIsAdding] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!cartContext) {
    throw new Error("AddToCartButton must be used within CartProvider");
  }

  const handleAddToCart = async () => {
    if (!variantId || disabled || isAdding) return;

    setIsAdding(true);

    try {
      await cartContext.addItem(variantId, quantity);

      // Show success state
      setShowSuccess(true);
      showToast("Added to cart", "success");

      // Reset success state after animation
      setTimeout(() => {
        setShowSuccess(false);
      }, 2000);
    } catch (error) {
      showToast(
        error instanceof Error ? error.message : "Failed to add to cart",
        "error"
      );
    } finally {
      setIsAdding(false);
    }
  };

  return (
    <button
      onClick={handleAddToCart}
      disabled={disabled || isAdding || !variantId}
      className={`flex-1 rounded-md px-4 py-2 text-sm font-semibold text-white transition-all disabled:cursor-not-allowed disabled:opacity-50 ${
        showSuccess
          ? "bg-green-600 hover:bg-green-700"
          : "bg-[#2F2F2F] hover:bg-[#D6452F]"
      } ${className}`}
    >
      <span className="flex items-center justify-center gap-2">
        {isAdding ? (
          <>
            <Spinner size="sm" />
            <span>Adding...</span>
          </>
        ) : showSuccess ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Added!</span>
          </>
        ) : (
          "Add to Cart"
        )}
      </span>
    </button>
  );
}
