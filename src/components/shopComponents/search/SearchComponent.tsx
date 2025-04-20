"use client";

import React from "react";
import SearchFilter from "./SearchFilter";
import ListProducts from "./ListProducts";
import AppliedFilters from "./AppliedFilters";
import { useGetAllProducts } from "@/lib/utils/hooks/queries/products.queries";
import LoadingComponent from "@/app/states/LoadingState";

export default function SearchComponent() {
  const { data: products, isLoading, isError, error } = useGetAllProducts();

  return (
    <div>
      <div className="flex  w-full gap-[48px] overflow-hidden">
        <div className=" w-72 p-4 h-fit py-8 border border-gray-300 rounded-lg overflow-hidden">
          <SearchFilter />
        </div>
        {isLoading ? (
          <LoadingComponent />
        ) : (
          <div className="  pt-5">
            <AppliedFilters />
            <ListProducts products={products ?? []} />
          </div>
        )}
      </div>
    </div>
  );
}
