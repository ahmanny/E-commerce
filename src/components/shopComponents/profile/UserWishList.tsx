"use client";
import React from "react";
import WhishlistItemCard from "./WhishlistItemCard";
import { useWishlistStore } from "@/store/wishlistStore";

export default function UserWishList() {
  const { items } = useWishlistStore();
  return (
    <div className=" py-14">
      {items.length > 0 ? (
        items.map((item) => (
          <WhishlistItemCard key={item.title} item={item} date="23 june 2020" />
        ))
      ) : (
        <p className="text-gray-500">Your wishlist is empty.</p>
      )}
    </div>
  );
}
