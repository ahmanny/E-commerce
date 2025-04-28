import React from "react";
import ProductReviewsHeader from "./ProductReviewsHeader";
import ProductReviewCard from "./ProductReviewCard";
import { useGetProductReviews } from "@/lib/utils/hooks/queries/reviews.queries";
import { formatRelativeDate } from "@/lib/utils/formatRelativeDate.utils";
import ErrorState from "@/components/states/ErrorState";
import EmptyState from "@/components/states/EmptyState";
import LoadingComponent from "@/components/states/LoadingStates/LoadingState";

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
                date={formatRelativeDate(review.createdAt)}
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
