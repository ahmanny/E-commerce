"use client";

import ProductGallery from "@/components/shopComponents/Product.tsx/ProductGallery";
import ProductInfo from "@/components/shopComponents/Product.tsx/ProductInfo";
import ProductOptions from "@/components/shopComponents/Product.tsx/ProductOptions";
import ProductTabs from "@/components/shopComponents/Product.tsx/ProductTabs";
import ProductDetails from "@/components/shopComponents/Product.tsx/ProductTabs/ProductDetails";
import ProductReviews from "@/components/shopComponents/Product.tsx/ProductTabs/ProductReviews";
import LoadingComponent from "@/app/states/LoadingState";
import { useParams } from "next/navigation";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { useGetProduct } from "@/lib/utils/hooks/queries/products.queries";

export default function page() {
  const params = useParams();
  const { slug } = params as { slug: string };
  const productId = slug.split("-").pop();
  const {
    data: product,
    isLoading,
    isError,
  } = useGetProduct(productId as string);

  if (isLoading) return <LoadingComponent />;
  if (isError) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;
  const tabsContent = [
    {
      label: "Details",
      value: "details",
      icon: <BsThreeDots className="text-3xl" />,
      content: (
        <ProductDetails
          details={product.description}
          highlights={product.highlights}
        />
      ),
    },
    {
      label: "Reviews",
      value: "reviews",
      icon: <MdOutlineStarOutline className="text-3xl" />,
      content: (
        <ProductReviews
          averageRating={product.averageRating}
          reviewCount={product.reviewCount}
          totalSold={product.totalSold}
          productId={product._id}
        />
      ),
    },
  ];
  return (
    <div className="flex flex-col gap-48">
      <div className="flex h-[580px] gap-28">
        <ProductGallery images={product.images} />
        <div className=" flex-1 flex flex-col gap-12">
          <ProductInfo
            productReviews={product.reviews}
            title={product.title}
            image={product.images[0]}
            price={product.price}
            stock_status={product.stock_status}
          />
          <ProductOptions
            available_colors={product.colors}
            available_sizes={product.sizes}
            image={product.images[0]}
            price={product.price}
            productId={product._id}
            title={product.title}
          />
        </div>
      </div>
      <div>
        <ProductTabs tabsContent={tabsContent} />
      </div>
    </div>
  );
}
