"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // close icon
import React from "react";

export default function SearchProducts() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setSearchQuery } = useFilterStore();
  const [query, setQuery] = useState(searchParams.get("q") || "");
  const [showMobileSearch, setShowMobileSearch] = useState(false); // <--- mobile toggle

  // Handle search query change
  const handleSearch = (searchValue: string) => {
    setQuery(searchValue);
    setSearchQuery(searchValue);
    const trimmedValue = searchValue.trim();
    if (trimmedValue !== "") {
      router.replace(`/products/search?q=${trimmedValue}`);
    } else {
      router.replace(`/products/search`);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim() === "") {
      router.push("/products/search");
    } else {
      const params = new URLSearchParams();
      params.set("q", query);
      router.push(`/products/search?${params.toString()}`);
      setSearchQuery(query);
    }
    setShowMobileSearch(false); // Close mobile input after search
  };

  useEffect(() => {
    // if search query changes (e.g through URL), update the local state
    const searchQueryFromUrl = searchParams.get("q");
    if (searchQueryFromUrl && searchQueryFromUrl !== query) {
      setQuery(searchQueryFromUrl);
    }
  }, [searchParams, query]);

  return (
    <div className="relative flex items-center">
      {/* Desktop Search Input */}
      <div className="hidden sm:block w-[150px] md:w-[290px] lg:w-[350px] xl:w-[400px]">
        <form onSubmit={handleSubmit} className="w-full relative">
          <FiSearch
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-2xl cursor-pointer"
            onClick={handleSubmit}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products"
            className="border border-neutral-300 p-2 pl-10 w-full rounded-md outline-none focus:border-blue-500"
            onFocus={() => router.push("/products/search")}
          />
        </form>
      </div>

      {/* Mobile Search Icon */}
      <div className="block sm:hidden">
        <button
          onClick={() => setShowMobileSearch(true)}
          className="text-gray-600"
        >
          <FiSearch size={24} />
        </button>
      </div>

      {/* Mobile Search Overlay */}
      <div
        className={`fixed top-0 left-0 w-full p-4 bg-white z-50 transform transition-all duration-300 ease-in-out ${
          showMobileSearch
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="flex items-center">
          <form onSubmit={handleSubmit} className="flex-grow relative">
            <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-2xl" />
            <input
              type="text"
              value={query}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search products"
              className="border border-neutral-300 p-2 pl-10 w-full rounded-md outline-none focus:border-blue-500"
              autoFocus
            />
          </form>
          {/* Close button */}
          <button
            onClick={() => setShowMobileSearch(false)}
            className="ml-2 text-gray-600"
          >
            <IoClose size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
