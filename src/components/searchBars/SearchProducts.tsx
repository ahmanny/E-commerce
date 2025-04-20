"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useFilterStore } from "@/store/filterStore";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default function Header() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSearchQuery } = useFilterStore();
  const [query, setQuery] = useState(searchParams.get("q") || "");

  // Handle search query
  const handleSearch = (searchValue: string) => {
    setQuery(searchValue);
    setSearchQuery(searchValue);
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      // Handle case where query is empty (e.g., show all products or default page)
      router.push("/products/search"); // Redirect to all products page
    } else {
      // Handle normal search with the query
      const params = new URLSearchParams();
      params.set("q", query);
      router.push(`/products/search?${params.toString()}`);
      setSearchQuery(query);
    }
  };

  return (
    <div className="flex flex-col items-center relative w-[230px] md:w-[290px] lg:w-[350px] xl:w-[400px]">
      <form onSubmit={handleSubmit} className="w-full">
        <FiSearch
          className="absolute left-[3px] top-1/2 transform -translate-y-1/2  h-full text-gray-400 text-3xl cursor-pointer"
          onClick={handleSubmit}
        />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search products"
          className="border border-neutral-300 border-solid p-2 pl-10 w-full rounded-md outline-none focus:border-blue-500"
          onFocus={() => router.push("/products/search")}
        />
      </form>
    </div>
  );
}
