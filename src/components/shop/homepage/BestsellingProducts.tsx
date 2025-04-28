"use client";

import { productsinterface } from "@/lib/types/products.types";
import React from "react";
import EmptyState from "@/components/states/EmptyState";
import ProductCarousel from "../product/ProductCarousel";

interface BestsellingProductsProps {
  bestSelling: productsinterface[];
  isLoading: boolean;
}

export default function BestsellingProducts({
  bestSelling,
  isLoading,
}: BestsellingProductsProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center ">
      <div>
        <h1 className="sub_heading">Shop Now</h1>
        <h1 className="heading">Best Selling</h1>
      </div>

      <div className="w-full px-15 py-[100px]">
        <ProductCarousel
          isLoading={isLoading}
          productsToBeDisplayed={bestSelling}
        />
        {!isLoading && bestSelling?.length === 0 && (
          <EmptyState message="No available best selling Products" />
        )}
      </div>
    </div>
  );
}
