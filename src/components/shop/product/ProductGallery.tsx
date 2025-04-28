"use client";

import { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface ProductGalleryProps {
  images: string[];
}
export default function ProductGallery({ images }: ProductGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [showArrows, setShowArrows] = useState(false);

  const nextImage = () => {
    if (currentImage < images.length - 1) {
      setCurrentImage(currentImage + 1);
    }
  };

  const prevImage = () => {
    if (currentImage > 0) {
      setCurrentImage(currentImage - 1);
    }
  };

  return (
    <div className=" bg-[#f6f6f6] w-1/2 rounded-md ">
      <div
        className="flex flex-col items-center justify-center mt-16 h-full gap-4 relative"
        onMouseEnter={() => setShowArrows(true)}
        onMouseLeave={() => setShowArrows(false)}
      >
        <div className="relative w-7/12">
          <img
            src={images[currentImage]}
            alt="Product"
            className="w-full h-[400px] object-cover rounded-lg"
          />

          {/* Previous Arrow */}
          {showArrows && currentImage > 0 && (
            <button
              onClick={prevImage}
              className="absolute left-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full"
            >
              <IoIosArrowBack className="text-5xl" />
            </button>
          )}

          {/* Next Arrow */}
          {showArrows && currentImage < images.length - 1 && (
            <button
              onClick={nextImage}
              className="absolute right-[-50px] top-1/2 transform -translate-y-1/2 bg-gray-200 p-2  rounded-full"
            >
              <IoIosArrowForward className="text-5xl" />
            </button>
          )}
        </div>

        {/* Dots for Navigation */}
        <div className="flex justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentImage(index)}
              className={`h-3 w-3 rounded-full ${
                index === currentImage ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
