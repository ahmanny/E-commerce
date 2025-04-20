"use client";
import { colors, sizes } from "@/lib/utils/products.utils";

interface SizeMultiSlectorProps {
  label: string;
  name: string;
  selectedSizes: string[];
  handleSizeChange: (size: string) => void;
  errors: any;
}

export default function SizeMultiSlector({
  selectedSizes,
  errors,
  name,
  label,
  handleSizeChange,
}: SizeMultiSlectorProps) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="flex gap-2 mt-1">
        {sizes.map((size) => {
          const isSelected = selectedSizes.includes(size);
          return (
            <label
              key={size}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleSizeChange(size)}
                className="hidden"
              />
              <span
                className={` h-10 w-10 border text-sm rounded-md flex items-center  justify-center ${
                  isSelected ? "bg-gray-200" : ""
                }`}
              >
                {size}
              </span>
            </label>
          );
        })}
      </div>
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}
