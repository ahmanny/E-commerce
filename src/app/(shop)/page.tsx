"use client";
import BestsellingProducts from "@/components/shop/homepage/BestsellingProducts";
import BrowseFashion from "@/components/shop/homepage/BrowseFashion";
import Hero from "@/components/shop/homepage/Hero";
import HomeProductTabs from "@/components/shop/homepage/HomeProductTabs";
import SpecialOffer from "@/components/shop/homepage/SpecialOffer";
import { useGetHomeProducts } from "@/lib/utils/hooks/queries/products.queries";

export default function page() {
  const { data, isPending, isLoading, isError } = useGetHomeProducts();
  return (
    <div className="w-full flex flex-col justify-center">
      <Hero />
      <div className=" py-20">
        <SpecialOffer />
      </div>
      <div className="px-14">
        <BestsellingProducts
          isLoading={isLoading}
          bestSelling={data?.bestSelling || []}
        />
      </div>
      <BrowseFashion />
      <div className=" py-40 px-14">
        <HomeProductTabs
          isLoading={isLoading}
          featuredProducts={data?.featured || []}
          latestProducts={data?.latest || []}
        />
      </div>
    </div>
  );
}
