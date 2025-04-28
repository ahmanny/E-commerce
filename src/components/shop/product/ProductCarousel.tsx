"use client";

import { productsinterface } from "@/lib/types/products.types";
import React from "react";
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductSkeleton from "../ui/ProductSkeleton";
import ProductCard from "./ProductCard";

interface ProductCarouselProps {
  productsToBeDisplayed: productsinterface[];
  isLoading: boolean;
}

export default function ProductCarousel({
  productsToBeDisplayed,
  isLoading,
}: ProductCarouselProps) {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      pagination={{ clickable: true }}
      onSlideChange={() => console.log("slide change")}
      breakpoints={{
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {isLoading
        ? Array.from({ length: 4 }).map((_, i) => (
            <SwiperSlide key={i}>
              <ProductSkeleton />
            </SwiperSlide>
          ))
        : productsToBeDisplayed.map((product) => (
            <SwiperSlide key={product._id}>
              <ProductCard product={product}/>
            </SwiperSlide>
          ))}
      .
    </Swiper>
  );
}
