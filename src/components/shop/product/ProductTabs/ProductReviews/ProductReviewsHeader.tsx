"use client";

import AddReview from "./AddReview";

interface ProductReviewsHeaderProps {
  rating: any;
  totalReviews: number;
  productId: string;
}

export default function ProductReviewsHeader({
  rating,
  totalReviews,
  productId,
}: ProductReviewsHeaderProps) {
  return (
    <div className="w-full flex flex-col gap-6 pb-10">
      <h1 className="text-lg font-semibold">Reviews</h1>
      <div className="flex gap-4 items-center ">
        <h1 className="font-extrabold text-xl">{rating}</h1>
        <p className="text-[#5C5F6A]"> —{totalReviews} Reviews</p>
      </div>
      <AddReview productId={productId} />
    </div>
  );
}
