"use client";

import { colors } from "@/lib/utils/products.utils";

interface ColorMultiSelectorProps {
  label: string;
  name: string;
  selectedColors: string[];
  handleColorChange: (color: string) => void;
  errors: any;
}

export default function ColorMultiSelector({
  selectedColors,
  errors,
  name,
  label,
  handleColorChange,
}: ColorMultiSelectorProps) {
  return (
    <div>
      <label className="label">{label}</label>
      <div className="flex gap-2 mt-1">
        {colors.map((color) => {
          const isSelected = selectedColors.includes(color);

          return (
            <label
              key={color}
              className="flex items-center space-x-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={isSelected}
                onChange={() => handleColorChange(color)}
                className="hidden"
              />
              <span
                className={`h-8 w-8 rounded-full border block transition-opacity ${
                  !isSelected ? "opacity-100" : "opacity-40"
                }`}
                style={{ backgroundColor: color }}
              ></span>
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
