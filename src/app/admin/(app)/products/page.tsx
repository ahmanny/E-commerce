"use client";

import LoadingComponent from "@/components/states/LoadingStates/LoadingState";
import DataTables from "@/components/admin/tableComponent";
import { useGetAllProducts } from "@/lib/utils/hooks/queries/products.queries";

const tableHeader = ["name", "SKU", "Price", "Stock", "Gender"];

export default function ProductsPage() {
  const { data: products, isLoading, isError, error } = useGetAllProducts();

  if (isLoading) {
    return <LoadingComponent />; // Replace with a spinner or skeleton UI
  }

  if (error) {
    return <p>Error fetching users: {error.message}</p>;
  }

  return (
    <div>
      <div className="w-[80%] h-[800px] ">
        <DataTables
          tableHeaders={tableHeader}
          componentFor="products"
          data={products}
          addBtnText="Add product"
        />
      </div>
    </div>
  );
}
