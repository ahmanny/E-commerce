"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";

interface formProps {
  btnText: string;
}

const productSchema = z.object({
  title: z.string().min(3, "Title is required"),
  slug: z.string().min(1, "Slug is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  availableQuantity: z.string().min(1, "Available quantity is required"),
  stockStatus: z.string().min(1, "Stock status is required"),
  colors: z.array(z.string()).min(1, "At least one color must be selected"),
  images: z.array(z.any()).min(1, "At least one image is required"),
  sizes: z.array(z.any()).min(1, "select a size"),
});

const colorClasses: Record<string, string> = {
  blue: "bg-blue-500",
  red: "bg-red-500",
  yellow: "bg-yellow-500",
  green: "bg-green-500",
};

const sizes = ["S", "M", "X", "XL", "XXL"];
export default function ProductForm({ btnText }: formProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm({ resolver: zodResolver(productSchema) });

  const [imageFiles, setImageFies] = useState<File[]>([]);

  const selectedImages = watch("images") || [];
  const selectedColors = watch("colors") || [];
  const selectedSizes = watch("sizes") || [];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const newImages = Array.from(files);
      setImageFies((prev) => [...prev, ...newImages]);
      setValue("images", [...selectedImages, ...newImages]);
    }
  };

  // remove images
  const removeImage = (index: number) => {
    const updatedImages = imageFiles.filter((_, i) => i != index);
    setImageFies(updatedImages), setValue("images", updatedImages);
  };

  // color upload
  const handleColorChange = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c: any) => c !== color)
      : [...selectedColors, color];
    setValue("colors", updatedColors);
  };
  const handleSizeChange = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s: any) => s !== size)
      : [...selectedSizes, size];
    setValue("sizes", updatedSizes);
  };

  const onSubmit = (data: any) => {
    console.log("Form submitted", data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="gap-16 flex flex-col">
        <div className="flex gap-20">
          <div className="w-80 flex flex-col gap-5 text-[#474B57]">
            {/* title input */}
            <div className=" flex-col flex ">
              <label htmlFor="title" className="block text-sm font-medium">
                Title
              </label>
              <input {...register("title")} id="title" className=" input" />
              {errors.title?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.title.message)}
                </p>
              )}
            </div>
            {/* price input */}
            <div className=" flex-col flex ">
              <label htmlFor="price" className="block text-sm font-medium">
                Price
              </label>
              <input
                type="number"
                {...register("price", { valueAsNumber: true })}
                id="price"
                className=" input"
              />
              {errors.price?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.price.message)}
                </p>
              )}
            </div>
            {/* category input/dropdown */}
            <div className=" flex-col flex ">
              <label htmlFor="category" className="block text-sm font-medium">
                Category
              </label>
              <select
                id="category"
                {...register("category")}
                className="input bg-white cursor-pointer"
              >
                <option value=""></option>
                <option value="dress">Dress shoes</option>
                <option value="casual">Casual Shoes</option>
                <option value="boots">Boots</option>
                <option value="sandals">Sandals</option>
              </select>
              {errors.category?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.category.message)}
                </p>
              )}
            </div>
            {/* slug input */}
            <div className=" flex-col flex ">
              <label htmlFor="slug" className="block text-sm font-medium">
                Slug
              </label>
              <input {...register("slug")} id="slug" className=" input" />
              {errors.slug?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.slug.message)}
                </p>
              )}
            </div>
            {/* sku input */}
            <div className=" flex-col flex ">
              <label htmlFor="sku" className="block text-sm font-medium">
                SKU
              </label>
              <input {...register("sku")} id="sku" className=" input" />
              {errors.sku && (
                <p className="text-red-500 text-sm">
                  {String(errors.sku.message)}
                </p>
              )}
            </div>
            {/* description input */}
            <div className=" flex-col flex ">
              <label
                htmlFor="description"
                className="block text-sm font-medium"
              >
                Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                className=" input h-28"
              />
              {errors.description?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.description.message)}
                </p>
              )}
            </div>
          </div>
          <div className="w-80 flex flex-col gap-5 text-[#474B57]">
            {/* stockStatus input */}
            <div className=" flex-col flex ">
              <label
                htmlFor="stockStatus"
                className="block text-sm font-medium"
              >
                Stock status
              </label>
              <input
                {...register("stockStatus")}
                id="stockStatus"
                className=" input"
              />
              {errors.stockStatus?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.stockStatus.message)}
                </p>
              )}
            </div>
            {/* availableQuantity input */}
            <div className=" flex-col flex ">
              <label
                htmlFor="availableQuantity"
                className="block text-sm font-medium"
              >
                Available quantity
              </label>
              <input
                {...register("availableQuantity")}
                id="availableQuantity"
                className=" input"
              />
              {errors.availableQuantity?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.availableQuantity.message)}
                </p>
              )}
            </div>
            {/* upload product image */}
            <div className=" flex-col flex ">
              <label className="block text-sm font-medium">Images</label>
              <input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
              <label
                htmlFor="images"
                className=" cursor-pointer border-solid border border-gray-400 rounded-lg p-2 flex gap-2 items-center text-gray-500 hover:bg-gray-100"
              >
                <MdOutlineDriveFolderUpload className="text-2xl" />
                Choose product images
              </label>
              {/* image previews */}
              <div className="mt-3 flex gap-4">
                {imageFiles.map((file, index) => (
                  <div
                    key={index}
                    className="relative w-14  h-14 p-3  bg-[#F6F6F6] flex items-center justify-center rounded-md"
                  >
                    <img
                      src={URL.createObjectURL(file)}
                      alt={`Preview ${index}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      onClick={() => removeImage(index)}
                      className="absolute top-[-13px] right-[-13px] bg-[#f6f6f6] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                ))}
              </div>
              {errors.images && (
                <p className="text-red-500 text-sm">
                  {String(errors.images.message)}
                </p>
              )}
            </div>
            {/* color selection input */}
            <div>
              <label className="block text-sm font-medium">Colors</label>
              <div>
                <div className="flex gap-2 mt-1">
                  {Object.keys(colorClasses).map((color) => {
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
                          className={`w-6 h-6 rounded-full border ${
                            isSelected ? "bg-opacity-50" : ""
                          } ${colorClasses[color]}`}
                        />
                      </label>
                    );
                  })}
                </div>
                {errors.colors?.message && (
                  <p className="text-red-500 text-sm ">
                    {String(errors.colors.message)}
                  </p>
                )}
              </div>
            </div>
            {/* size selection check */}
            <div>
              <label className="block text-sm font-medium">Sizes</label>
              <div>
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
                {errors.sizes?.message && (
                  <p className="text-red-500 text-sm ">
                    {String(errors.sizes.message)}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-48">
          <button type="submit" className="btn">
            {btnText}
          </button>
        </div>
      </form>
    </div>
  );
}
