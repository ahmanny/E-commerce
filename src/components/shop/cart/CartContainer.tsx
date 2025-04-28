"use client";

import { useCartStore } from "@/store/cartStore";
import CartItemCard from "./CartItemCard";
import CartSummaryCard from "./CartSummaryCard";

export default function CartContainer() {
  const { items } = useCartStore();

  return (
    <div className="flex py-14 gap-36">
      <div className="w-[640px]">
        <h3 className="text-lg font-bold h-12 border-b">Your Cart</h3>
        <div className=" py-16">
          {items.length > 0 ? (
            items.map((item) => (
              <CartItemCard key={item.uniqueId} item={item} />
            ))
          ) : (
            <p className="text-gray-500">Your cart is empty.</p>
          )}
        </div>
      </div>
      <div className="flex-1">
        <CartSummaryCard />
      </div>
    </div>
  );
}
