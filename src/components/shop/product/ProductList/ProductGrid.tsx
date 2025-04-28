"use client";

import { useFilterStore } from "@/store/filterStore";
import { useEffect, useState } from "react";
import Pagination from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";
import { productsinterface } from "@/lib/types/products.types";
import EmptyState from "@/components/states/EmptyState";
import ProductSkeleton from "@/components/shop/ui/ProductSkeleton";
import ProductCard from "../ProductCard";

interface ProductsProps {
  products: productsinterface[];
  isLoading: boolean;
}

export default function ProductsGrid({ products, isLoading }: ProductsProps) {
  // Get the search parameters from the URL
  const searchParams = useSearchParams();
  // Get the query parameter 'q'
  const query = searchParams.get("q");

  const {
    selectedCategories,
    selectedColors,
    selectedSizes,
    selectedGenders,
    selectedMaterials,
    priceRange,
    searchQuery,
  } = useFilterStore();

  const [filteredItems, setFilteredItems] = useState<productsinterface[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 9;

  // Reset filteredItems when the query or searchQuery changes
  useEffect(() => {
    if (!Array.isArray(products)) return;
    // If searchQuery or query changes, reapply filters
    setCurrentPage(0); // Reset to first page when query changes
    const filtered = products.filter((product) => {
      const categoryMatch = selectedCategories.length
        ? product.categories.some((c) => selectedCategories.includes(c.name))
        : true;
      const materialMatch = selectedMaterials.length
        ? selectedMaterials.includes(product.material)
        : true;
      const genderMatch = selectedGenders.length
        ? selectedGenders.includes(product.gender)
        : true;
      const colorMatch = selectedColors.length
        ? product.colors.some((c) => selectedColors.includes(c))
        : true;
      const sizeMatch = selectedSizes.length
        ? product.sizes.some((s) => selectedSizes.includes(s))
        : true;
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const searchMatch = query
        ? product.title.toLowerCase().includes(query?.toLowerCase() || "")
        : true;

      return (
        categoryMatch &&
        colorMatch &&
        sizeMatch &&
        priceMatch &&
        searchMatch &&
        materialMatch &&
        genderMatch
      );
    });

    setFilteredItems(filtered);
  }, [
    searchQuery,
    query,
    selectedCategories,
    selectedColors,
    selectedSizes,
    priceRange,
    selectedGenders,
    selectedMaterials,
    products,
  ]);

  const totalProducts = filteredItems.length;
  const totalPages = Math.ceil(totalProducts / itemsPerPage);
  const paginatedData = filteredItems.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div>
      {/* Showing Results */}
      <div className="text-gray-600 mb-4 text-lg">
        Showing {Math.min(currentPage * itemsPerPage + 1, totalProducts)}-
        {Math.min((currentPage + 1) * itemsPerPage, totalProducts)} of{" "}
        {totalProducts} Results
      </div>

      {/* Products List */}

      {isLoading ? (
        <div className="grid grid-cols-3 gap-10">
          {[...Array(9)].map((_, i) => (
            <div key={i}>
              <ProductSkeleton />
            </div>
          ))}
        </div>
      ) : paginatedData.length > 0 ? (
        <div className="grid grid-cols-3 gap-10">
          {paginatedData.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="w-full h-full">
          <EmptyState message="No Products" />
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination
          pageCount={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      )}
    </div>
  );
}
