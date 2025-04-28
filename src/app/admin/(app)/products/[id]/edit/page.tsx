"use client";

import UpdateProduct from "@/components/admin/products/update/UpdateProduct";
import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import LoadingComponent from "@/components/states/LoadingStates/LoadingState";
import { useGetProduct } from "@/lib/utils/hooks/queries/products.queries";
import { useParams } from "next/navigation";
export default function page() {
  const { id: productId } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useGetProduct(productId as string);

  if (isLoading) return <LoadingComponent />;
  if (isError)
    return <ErrorState message="Error loading product" onRetry={refetch} />;
  if (!product) return <EmptyState message="Product not found" />;
  return (
    <div className="bg-white p-8 w-[85%]">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-200 mb-12">
        <h1 className=" text-xl font-semibold capitalize">{product.title}</h1>
      </div>
      {/* edit product form */}
      <UpdateProduct product={product} />
    </div>
  );
}
