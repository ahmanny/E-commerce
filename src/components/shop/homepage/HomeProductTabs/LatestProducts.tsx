"use client";

import { productsinterface } from "@/lib/types/products.types";
import React from "react";
import EmptyState from "@/components/states/EmptyState";
import ProductCarousel from "../../product/ProductCarousel";

interface LatestProductsProps {
  latestProducts: productsinterface[];
  isLoading: boolean;
}

export default function LatestProducts({
  latestProducts,
  isLoading,
}: LatestProductsProps) {
  return (
    <div className="w-full px-20 py-10">
      <ProductCarousel
        isLoading={isLoading}
        productsToBeDisplayed={latestProducts}
      />
      {!isLoading && latestProducts.length === 0 && (
        <EmptyState message="No Latest Products available" />
      )}
    </div>
  );
}
