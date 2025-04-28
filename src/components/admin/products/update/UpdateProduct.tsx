"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useUpdateProduct } from "@/lib/utils/hooks/mutations/product.mutations";
import { productsinterface } from "@/lib/types/products.types";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { BeatLoader } from "react-spinners";
import { AiOutlineClose } from "react-icons/ai";
import { useRouter } from "next/navigation";
import {
  genders,
  generateSKU,
  HIGHLIGHT_OPTIONS,
  materials,
  slugify,
  stockStatus,
} from "@/lib/utils/products.utils";
import { CreatableMultiSelect } from "../../../Form/CreatableMultiSelect";
import toast from "react-hot-toast";
import SizeMultiSlector from "../../../Form/SizeMultiSlector";
import ColorMultiSelector from "../../../Form/ColorMultiSelector";
import SelectInput from "../../../Form/SelectInput";
import TextInput from "@/components/Form/TextInput";
import NumberInput from "../../../Form/NumberInput";
import TextereaInput from "@/components/Form/TextereaInput";
import { useCategoryStore } from "@/store/categoryStore";

interface UpdateProductFormProps {
  product: productsinterface;
}

export default function UpdateProduct({ product }: UpdateProductFormProps) {
  const updateProductMutation = useUpdateProduct();
  const { categories } = useCategoryStore();
  const router = useRouter();
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<productsinterface>();

  // watch for changes in colors,sizes
  const selectedColors: string[] = watch("colors") || [];
  const selectedSizes: string[] = watch("sizes") || [];
  const selectedHighligts: string[] = watch("highlights") || [];
  const formTitle = watch("title");

  const [newimageFiles, setNewImageFiles] = useState<File[]>([]);
  const [images, setImages] = useState<string[]>([]);

  // handle file uploads for images
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setNewImageFiles([...newimageFiles, ...Array.from(e.target.files)]);
    }
  };
  // Remove images
  const removeImage = (index: number) => {
    setNewImageFiles(newimageFiles.filter((_, i) => i !== index));
  };
  // Remove an uploaded image
  const removeUploadedImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    setImages(updatedImages);
    setValue("images", updatedImages);
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
      reset({
        ...product,
        categories: product.categories.map((cat) =>
          typeof cat === "string" ? cat : cat.name
        ),
      });
      setImages(product.images);
    }
  }, [product, reset, setImages]);
  // only update the slug and sku when the title changes
  useEffect(() => {
    if (formTitle) {
      const slug = slugify(formTitle);
      const sku = generateSKU(formTitle);
      setValue("sku", sku);
      setValue("slug", slug);
    }
  }, [formTitle, setValue]);

  // submit update products form
  const onSubmit = (data: productsinterface) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "images") {
        formData.append("images", JSON.stringify(value));
      } else if (
        key === "colors" ||
        key === "sizes" ||
        key === "categories" ||
        key === "highlights" ||
        key === "reviews"
      ) {
        formData.append(key, JSON.stringify(value));
      } else {
        formData.append(key, value.toString());
      }
    });

    newimageFiles.forEach((file) => {
      formData.append("newImages", file);
    });

    updateProductMutation.mutate(
      { id: product._id, product: formData },
      {
        onSuccess: () => {
          toast.success("Product updated successfully!");
          router.push("/admin/products");
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
          <div className="w-96 flex flex-col gap-5 text-[#474B57]">
            {/* title input */}
            <TextInput
              label="Title"
              name="title"
              register={register}
              errors={errors}
            />
            {/* price input */}
            <NumberInput
              label="Price (USD)"
              name="price"
              register={register}
              errors={errors}
            />
            {/* category input/dropdown */}
            <CreatableMultiSelect
              label="Category"
              errors={errors}
              name="categories"
              control={control}
              options={categories}
              placeholder="select or type categories"
            />
            {/* slug input */}
            <TextInput
              label="Slug"
              name="slug"
              register={register}
              errors={errors}
              isReadOnly={true}
            />
            {/* sku input */}
            <TextInput
              label="SKU"
              name="sku"
              register={register}
              errors={errors}
              isReadOnly={true}
            />
            {/* category input/dropdown */}
            <CreatableMultiSelect
              label="Highlights"
              errors={errors}
              name="highlights"
              control={control}
              options={HIGHLIGHT_OPTIONS}
              placeholder="select or type highlights"
            />
            {/* description input */}
            <TextereaInput
              label="Description"
              name="description"
              register={register}
              errors={errors}
            />
          </div>
          {/* Right side of the foorm */}
          <div className="w-96 flex flex-col gap-5 text-[#474B57]">
            {/* select shoe material */}
            <SelectInput
              label="Material"
              name="material"
              options={materials}
              register={register}
              errors={errors}
            />
            {/* select shoe gender */}
            <SelectInput
              label="Gender"
              name="gender"
              options={genders}
              register={register}
              errors={errors}
            />
            {/* stock_status input */}
            <SelectInput
              label="Stock status"
              name="stock_status"
              options={stockStatus}
              register={register}
              errors={errors}
            />
            {/* quantity_available input */}
            <NumberInput
              label="Available quantity"
              name="quantity_available"
              register={register}
              errors={errors}
            />
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
                {newimageFiles.map((file, index) => (
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
            <ColorMultiSelector
              handleColorChange={(color) => handleColorChange(color)}
              errors={errors}
              label="Colors"
              name="colors"
              selectedColors={selectedColors}
            />
            {/* size selection check */}
            <SizeMultiSlector
              errors={errors}
              handleSizeChange={(size) => handleSizeChange(size)}
              label="Sizes"
              name="sizes"
              selectedSizes={selectedSizes}
            />
          </div>
        </div>

        {/* submit button and error display */}
        <div>
          {updateProductMutation.isError && (
            <p className="text-red-500">
              {updateProductMutation.error.message}
            </p>
          )}
          <button type="submit" className="btn !w-48">
            {updateProductMutation.isPending ? (
              <BeatLoader color="#3498db" />
            ) : (
              "update"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
