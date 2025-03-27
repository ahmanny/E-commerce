"use client";

import { useGetAllProducts } from "@/lib/utils/hooks/queries/useProducts.queries";
import TableComponent from "../TableComponent";
const tableHeader = ["name", "SKU", "Price", "Stock", "categories"];
export default function ProductsComponent() {
  const { data: products, isLoading, isError } = useGetAllProducts();
  // console.log("came:", products);
  if (isLoading) return <p>Fetching Products.....</p>;
  if (isError) return <p>Error fetching Products. Please try again later. </p>;
  return (
    <div className="w-[80%] h-[800px] ">
      <TableComponent
        tableHeaders={tableHeader}
        componentFor="products"
        data={products}
        addBtnText="Add product"
      />
    </div>
  );
}
