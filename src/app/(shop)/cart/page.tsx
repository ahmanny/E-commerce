import CartContainer from "@/components/shopComponents/cartComponents/CartContainer";
import React from "react";

export default function page() {
  return (
    <div>
      <CartContainer />
    </div>
  );
}

// "use client";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useFilterStore } from "@/store/filterStore";
// import { useState, useEffect } from "react";
// import { FiSearch } from "react-icons/fi";

// export default function Header() {
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const { setSearchQuery } = useFilterStore();
//   const [query, setQuery] = useState(searchParams.get("q") || "");

//   useEffect(() => {
//     if (query.trim() === "") {
//       router.push("/products/search"); // Redirect to all products page if query is empty
//     } else {
//       const params = new URLSearchParams();
//       params.set("q", query);
//       router.push(`/products/search?${params.toString()}`);
//     }
//   }, [query, router]); // Trigger the search whenever query changes

//   // Handle input change (search as the user types)
//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setQuery(e.target.value);
//     setSearchQuery(e.target.value); // Update the global search state as well
//   };

//   return (
//     <div className="flex flex-col items-center relative w-[230px] md:w-[290px] lg:w-[350px] xl:w-[400px]">
//       <form className="w-full">
//         <FiSearch className="absolute left-[3px] top-1/2 transform -translate-y-1/2 h-full text-gray-400 text-3xl cursor-pointer" />
//         <input
//           type="text"
//           value={query}
//           onChange={handleChange} // Handle typing
//           placeholder="Search products"
//           className="border border-neutral-300 border-solid p-2 pl-10 w-full rounded-md outline-none focus:border-blue-500"
//           onFocus={() => router.push("/products/search")} // Redirect when input is clicked
//         />
//       </form>
//     </div>
//   );
// }
