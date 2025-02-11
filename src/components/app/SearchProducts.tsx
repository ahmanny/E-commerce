"use client";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

// Define a type for product data
type Product = {
  id: number;
  title: string;
  description: string;
};

// Fetch products from API
const fetchProducts = async (): Promise<Product[]> => {
  const res = await fetch("https://fakestoreapi.com/products");
  if (!res.ok) {
    throw new Error("Network response was not ok");
  }
  return res.json();
};

export default function SearchProducts() {
  const {
    data: products = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });

  const [query, setQuery] = useState("");

  // Filter products based on query
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col items-center relative w-[320px]">
      {/* search icon inside the input */}
      <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
      {/* Search Input */}
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
        className="border-neutral-300 border border-solid p-2 pl-10 w-full rounded-[5px] outline-none focus:border-blue-500"
      />

      {/* Show results only when user starts typing */}
      {query.length > 0 && (
        <div className="w-full max-h-[400px] overflow-auto bg-gray-100 absolute mt-[45px] p-2  rounded-lg shadow-md hide-scrollbar">
          {isLoading && <p>Loading...</p>}
          {isError && <p>Failed to load products.</p>}
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="p-2 border-b border-white">
                <h1 className="font-bold">{product.title}</h1>
                <p className="text-sm">{product.description}</p>
              </div>
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </div>
  );
}
