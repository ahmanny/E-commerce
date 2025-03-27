"use client";

import Product from "@/components/app/products/Product";
import { useGetProduct } from "@/lib/utils/hooks/queries/useProducts.queries";
import { useParams, usePathname } from "next/navigation";
import React from "react";

export default function page() {
  const params = useParams();
  const { productID } = params;
  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetProduct(productID as string);
  if (error) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;
  return (
    <div>
      <Product product={product} />
    </div>
  );
}
