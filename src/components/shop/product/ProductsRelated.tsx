"use client";

import EmptyState from "@/components/states/EmptyState";
import ErrorState from "@/components/states/ErrorState";
import { useGetSimilarProducts } from "@/lib/utils/hooks/queries/products.queries";
import ProductCarousel from "../ProductCarousel";
import ProductsLoading from "@/components/shop/ui/ProductSkeleton";

interface ProductsRelatedProps {
  productId: string;
}

export default function ProductsRelated({ productId }: ProductsRelatedProps) {
  const {
    data: similarProducts,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetSimilarProducts(productId);

  if (isError)
    return <ErrorState message={error.message} onRetry={() => refetch()} />;
  return (
    <div className="space-y-16">
      <div>
        <h1 className="heading">You might also like</h1>
        <h2 className="sub_heading">SIMILAR PRODUCTS</h2>
      </div>
      <div>
        {isLoading ? (
          <div className="w-full py-[100px]">
            <ProductsLoading />
          </div>
        ) : (
          <div className="w-full px-15 py-[100px]">
            {similarProducts?.length ? (
              <ProductCarousel productsToBeDisplayed={similarProducts || []} />
            ) : (
              <EmptyState message="No similar Products available for this product" />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
