"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import React from "react";
import { useGetProduct } from "@/lib/utils/hooks/queries/useProducts.queries";
import { useUpdateProduct } from "@/lib/utils/hooks/mutations/useProduct.hooks";
import { productsinterface } from "@/lib/types/productsTypes";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import { useRouter } from "next/router";
import { AiOutlineClose } from "react-icons/ai";
import ColorSelector from "./ColorSelector";

interface UpdateProductFormProps {
  product: productsinterface;
}

const colors = ["blue", "red", "yellow", "green", "orange"];

export default function UpdateProduct({ product }: UpdateProductFormProps) {
  const updateProductMutation = useUpdateProduct();
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<productsinterface>();

  const selectedImages = watch("images") || [];
  const selectedColors: string[] = watch("colors") || [];
  const selectedSizes: string[] = watch("sizes") || [];

  const [imageFiles, setImageFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImageFiles([...imageFiles, ...Array.from(e.target.files)]);
    }
  };

  const removeImage = (index: number) => {
    setImageFiles(imageFiles.filter((_, i) => i !== index));
  };
  const removeUploadedImage = (index: number) => {
    console.log(index);
    setImages(images.filter((_, i) => i !== index));
  };

  // color upload
  const handleColorChange = (color: string) => {
    const updatedColors = selectedColors.includes(color)
      ? selectedColors.filter((c: any) => c !== color)
      : [...selectedColors, color];
    setValue("colors", updatedColors);
  };

  // Handle size change
  const handleSizeChange = (size: string) => {
    const updatedSizes = selectedSizes.includes(size)
      ? selectedSizes.filter((s: any) => s !== size)
      : [...selectedSizes, size];
    setValue("sizes", updatedSizes);
  };

  //   update form values when product data changes
  useEffect(() => {
    if (product && Object.keys(product).length > 0) {
      reset(product);
      setValue("colors", product.colors || []);
      setImages(product.images);
    }
  }, [product, reset, setValue, setImages]);

  const onSubmit = (data: any) => {
    updateProductMutation.mutate(
      { id: product._id, product: data },
      {
        onSuccess: () => {
          alert("updated");
        },
      }
    );
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="gap-16 flex flex-col bg-ora"
      >
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
            {/* stock_status input */}
            <div className=" flex-col flex ">
              <label
                htmlFor="stock_status"
                className="block text-sm font-medium"
              >
                Stock status
              </label>
              <input
                {...register("stock_status")}
                id="stock_status"
                className=" input"
              />
              {errors.stock_status?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.stock_status.message)}
                </p>
              )}
            </div>
            {/* quantity_available input */}
            <div className=" flex-col flex ">
              <label
                htmlFor="quantity_available"
                className="block text-sm font-medium"
              >
                Available quantity
              </label>
              <input
                type="number"
                {...register("quantity_available")}
                id="quantity_available"
                className=" input"
              />
              {errors.quantity_available?.message && (
                <p className="text-red-500 text-sm">
                  {String(errors.quantity_available.message)}
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
                {/* Display images from backend */}
                {images?.map((image, index) => (
                  <div
                    key={index}
                    className="relative w-14 h-14 p-3 bg-[#F6F6F6] flex items-center justify-center rounded-md"
                  >
                    <img
                      src={image} // Use backend image URL
                      alt={`Existing Image ${index}`}
                      className="w-full h-full object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeUploadedImage(index)}
                      className="absolute top-[-13px] right-[-13px] bg-[#f6f6f6] text-black rounded-full w-5 h-5 flex items-center justify-center text-xs"
                    >
                      <AiOutlineClose />
                    </button>
                  </div>
                ))}
                {/* Display newly uploaded images */}
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
                      type="button"
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
              <ColorSelector
                handleColorChange={(color) => handleColorChange(color)}
                selectedColors={selectedColors}
              />
            </div>
            {/* size selection check */}
            <div>
              <label className="block text-sm font-medium">Sizes</label>
              <div>
                <div className="flex gap-2 mt-1">
                  {product?.sizes.map((size) => {
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
            {updateProductMutation.isPending ? (
              <BeatLoader color="#3498db" />
            ) : (
              "update"
            )}
          </button>
          {updateProductMutation.isError && (
            <p className="text-red-500">
              {updateProductMutation.error.message}
            </p>
          )}
        </div>
      </form>
    </div>
  );
}
