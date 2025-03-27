import { useState } from "react";

interface ImageDisplayProps {
  images: string[];
}
export default function ImageDisplay({ images }: ImageDisplayProps) {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center mt-16 h-full gap-16 relative">
      <img
        src={images[currentImage]}
        alt="Product"
        className="w-7/12 h-[400px] object-cover rounded-lg"
      />
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
  );
}
