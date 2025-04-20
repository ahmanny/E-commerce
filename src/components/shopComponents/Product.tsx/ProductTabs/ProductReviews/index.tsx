import React from "react";
import ProductReviewsHeader from "./ProductReviewsHeader";
import ProductReviewCard from "./ProductReviewCard";
import { useGetProductReviews } from "@/lib/utils/hooks/queries/reviews.queries";
import LoadingComponent from "@/app/states/LoadingState";
import ErrorState from "@/app/states/ErrorState";
import EmptyState from "@/app/states/EmptyState";

interface ProductReviewsProps {
  productId: string;
  reviewCount: number;
  totalSold: number;
  averageRating: number;
}

export default function ProductReviews({
  productId,
  averageRating,
  totalSold,
  reviewCount,
}: ProductReviewsProps) {
  const {
    data: reviews,
    isLoading,
    isError,
    error,
    refetch,
  } = useGetProductReviews(productId);
  if (isLoading) {
    return <LoadingComponent />;
  }
  // const { averageRating, totalReviews } = getAverageRating(productReviews);
  return (
    <div className="w-[727px]">
      {isError && (
        <ErrorState message={error.message} onRetry={() => refetch()} />
      )}
      <div>
        <ProductReviewsHeader
          productId={productId}
          rating={averageRating.toFixed(1)}
          totalReviews={reviewCount}
        />
        <hr />
        {reviews && reviews.length > 0 ? (
          <div>
            {reviews.map((review, index) => (
              <ProductReviewCard
                key={index}
                comment={review.comment}
                rating={review.rating}
                user={review.user}
                date="last month"
              />
            ))}
          </div>
        ) : (
          <EmptyState
            message="No reviews yet."
            subtitle="Be the first to write a review."
          />
        )}
      </div>
    </div>
  );
}
