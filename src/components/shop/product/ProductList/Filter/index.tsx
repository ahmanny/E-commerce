"use client";

import { colors, genders, materials, sizes } from "@/lib/utils/products.utils";
import { useFilterStore } from "@/store/filterStore";
import { useCategoryStore } from "@/store/categoryStore";
import FilterCheckbox from "./FilterCheckbox";

export default function Filter() {
  const { categories } = useCategoryStore();
  const {
    selectedCategories,
    selectedColors,
    selectedSizes,
    priceRange,
    addRemoveCategory,
    addRemoveColor,
    addRemoveSize,
    setPriceRange,
    addRemoveGender,
    addRemoveMaterial,
    selectedGenders,
    selectedMaterials,
  } = useFilterStore();

  return (
    <div className="text-[#474B57] w-full space-y-8">
      {/* Categories */}
      <FilterCheckbox
        addRemoveItem={(item) => addRemoveCategory(item)}
        selectedItems={selectedCategories}
        label="Categories"
        items={categories}
      />
      {/* Materials */}
      <FilterCheckbox
        addRemoveItem={(item) => addRemoveMaterial(item)}
        selectedItems={selectedMaterials}
        label="Materials"
        items={materials}
      />
      {/* Genders */}
      <FilterCheckbox
        addRemoveItem={(item) => addRemoveGender(item)}
        selectedItems={selectedGenders}
        label="Gender"
        items={genders}
      />
      <div>
        <h1 className="text-xl font-semibold mb-3">Colors</h1>
        <div className="flex flex-wrap gap-1">
          {colors.map((color) => (
            <button
              key={color}
              type="button"
              className={`p-0.5 rounded-full flex justify-center items-center ${
                selectedColors.includes(color)
                  ? "border-black border-2"
                  : "border-2 border-transparent"
              }`}
              onClick={() => addRemoveColor(color)}
            >
              <span
                className="h-7 w-7 rounded-full block"
                style={{ backgroundColor: color }}
              ></span>
            </button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h1 className="text-xl font-semibold mb-3">Size</h1>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size}
              className={`px-3 py-1 border rounded ${
                selectedSizes.includes(size)
                  ? "bg-white border-black border-1"
                  : "bg-white border-gray-200 border-1"
              }`}
              onClick={() => addRemoveSize(size)}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="pb-6">
        <h1 className="text-xl font-semibold mb-3">Price</h1>
        <div>
          <input
            type="range"
            min="0"
            max="5000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([0, Number(e.target.value)])}
            className="w-full"
          />
          <p>${priceRange[1].toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}
