"use client";
import React from "react";
import ItemCard, { item } from "./ItemCard";
import NoItemFound from "./NoItemFound";
interface UserOrdersListProps {
  items: item[];
}

export default function UserOrders({ items }: UserOrdersListProps) {
  const viewItem = () => {
    console.log("helo");
  };
  return (
    <div className=" py-14">
      {items.length > 0 ? (
        items.map((item) => (
          <ItemCard
            key={item.title}
            item={item}
            btn={viewItem}
            btnText="view item"
          />
        ))
      ) : (
        <NoItemFound />
      )}
    </div>
  );
}
