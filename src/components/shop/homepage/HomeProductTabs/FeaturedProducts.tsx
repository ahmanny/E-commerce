"use client";

import { productsinterface } from "@/lib/types/products.types";
import React from "react";
import EmptyState from "@/components/states/EmptyState";
import ProductCarousel from "../../product/ProductCarousel";

interface FeaturedProductsProps {
  featuredProducts: productsinterface[];
  isLoading: boolean;
}

export default function FeaturedProducts({
  featuredProducts,
  isLoading,
}: FeaturedProductsProps) {
  return (
    <div className="w-full px-20 py-10">
      <ProductCarousel
        isLoading={isLoading}
        productsToBeDisplayed={featuredProducts}
      />
      {!isLoading && featuredProducts.length === 0 && (
        <EmptyState message="No Featured Products available" />
      )}
    </div>
  );
}
