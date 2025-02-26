"use client";

import { useState } from "react";
import { FiSearch } from "react-icons/fi";

interface SearchBarProps<T> {
  items: T[];
  searchKey: keyof T;
  onSearch: (filteredItems: T[]) => void;
}

export default function SearchBar<T>({
  items,
  searchKey,
  onSearch,
}: SearchBarProps<T>) {
  const [query, setQuery] = useState("");

  const handleSearch = (searchValue: string) => {
    setQuery(searchValue);
    const filteredItems = items.filter((item) =>
      String(item[searchKey]).toLowerCase().includes(searchValue.toLowerCase())
    );
    onSearch(filteredItems);
  };

  return (
    <div>
      <div className="flex flex-col items-center relative w-[260px]">
        <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-2xl" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="border-neutral-300 border border-solid p-2 pl-10 w-full rounded-[5px] outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
}
