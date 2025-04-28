"use client";
import React from "react";
import Summary from "../cart/Summary";
import { useCartStore } from "@/store/cartStore";

interface OrderSummaryCardProps {
  isLoading: boolean;
}
export default function OrderSummaryCard({ isLoading }: OrderSummaryCardProps) {
  // Get items from the cart store
  const { items } = useCartStore();

  return (
    <div className="border p-8 rounded-lg ">
      <h2 className="text-lg font-semibold pb-5">Your Order</h2>
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-2 flex-wrap">
          {items.map((item, index) => (
            <div
              key={index}
              className="w-14 h-14 p-3 rounded-full overflow-hidden bg-gray-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full rounded-md object-cover"
              />
            </div>
          ))}
        </div>
        <div>
          <button type="button" className="w-32 h-14 border">
            Edit Cart
          </button>
        </div>
      </div>
      <Summary submitBtnText="Place Order" isLoading={isLoading} />
    </div>
  );
}
