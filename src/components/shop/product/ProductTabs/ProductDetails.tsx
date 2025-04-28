import React from "react";
interface ProductDetailsProps {
  details: string;
  highlights: string[];
}

export default function ProductDetails({
  details,
  highlights,
}: ProductDetailsProps) {
  return (
    <div className="w-[727px] pb-12 ">
      <h1 className="text-2xl font-sans font-semibold mb-10">Detail</h1>
      <div className="flex flex-col gap-16">
        <p className="text-[#5C5F6A] text-xl font-medium">{details}</p>
        <div className="text-[#5C5F6A] text-xl font-semibold">
          <ul className=" list-disc pl-4">
            {highlights.map((highlight, index) => (
              <li key={index}>{highlight}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
