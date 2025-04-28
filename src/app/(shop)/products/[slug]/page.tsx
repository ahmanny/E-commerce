"use client";

import ProductGallery from "@/components/shop/product/ProductGallery";
import ProductInfo from "@/components/shop/product/ProductInfo";
import ProductOptions from "@/components/shop/product/ProductOptions";
import ProductTabs from "@/components/shop/product/ProductTabs";
import ProductDetails from "@/components/shop/product/ProductTabs/ProductDetails";
import ProductReviews from "@/components/shop/product/ProductTabs/ProductReviews";
import { useParams } from "next/navigation";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { MdOutlineStarOutline } from "react-icons/md";
import { useGetProduct } from "@/lib/utils/hooks/queries/products.queries";
import ProductsRelated from "@/components/shop/product/ProductsRelated";
import ErrorState from "@/components/states/ErrorState";
import EmptyState from "@/components/states/EmptyState";
import LoadingComponent from "@/components/states/LoadingStates/LoadingState";
import BreadcrumbSub from "@/components/breadcrumbs/BreadcrumbSub";

export default function page() {
  const siteName = "Ecommerce";
  const params = useParams();
  const { slug } = params as { slug: string };
  const productId = slug.split("-").pop();
  const {
    data: product,
    isLoading,
    isError,
    refetch,
  } = useGetProduct(productId as string);

  if (isLoading) return <LoadingComponent />;
  if (isError)
    return <ErrorState message="Error loading product" onRetry={refetch} />;
  if (!product)
    return (
      <EmptyState message={`Product with the ID-${productId} was not found`} />
    );
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
    <div>
      <div className="py-5">
        <BreadcrumbSub
          breadcrumbItems={[siteName, "products", product.title]}
        />
      </div>
      <div className="flex flex-col gap-48">
        <div className="flex h-[580px] gap-28">
          <ProductGallery images={product.images} />
          <div className=" flex-1 flex flex-col gap-12">
            <ProductInfo
              averageRating={product.averageRating}
              reviewCount={product.reviewCount}
              totalSold={product.reviewCount}
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
        <div>
          <ProductsRelated productId={product._id} />
        </div>
      </div>
    </div>
  );
}
