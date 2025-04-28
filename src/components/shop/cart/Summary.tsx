"use client";
import { useCartStore } from "@/store/cartStore";
import { BeatLoader } from "react-spinners";

interface SummaryProps {
  submitBtnText: string;
  isLoading: boolean;
}
export default function Summary({ submitBtnText, isLoading }: SummaryProps) {
  const { items } = useCartStore();
  // Calculate Prices
  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.05; // 5% tax
  const total = subtotal + tax;
  return (
    <div>
      <div className="flex justify-between mb-5">
        <span>Subtotal:</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Shipping:</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-5">
        <span>Tax:</span>
        <span>${tax.toFixed(2)}</span>
      </div>
      <hr className="my-6" />
      <div className="flex justify-between text-lg font-semibold">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <button
        type="submit"
        className="w-full bg-black text-white py-2 mt-8 rounded"
      >
        {isLoading ? <BeatLoader color="#3498db" /> : submitBtnText}
      </button>
    </div>
  );
}
