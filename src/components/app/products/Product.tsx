"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaShareAlt, FaStar } from "react-icons/fa";
import { z } from "zod";
import SizeSelector from "./SizeSelector";
import ColorSelector from "./ColorSelector";
import QuantityInput from "./QuantityInput";
import { AiOutlineHeart } from "react-icons/ai";
import ImageDisplay from "./ImageDisplay";
import { productsinterface } from "@/lib/types/productsTypes";

interface PageProps {
  product: productsinterface;
}

const productSchema = z.object({
  quantity: z.number().min(1, "Quantity must be atleast 1"),
  color: z.string().min(1, "Please select a color"),
  size: z.string().min(1, "Please select a size"),
});

const images = ["/file.svg", "/globe.svg", "/vercel.svg"];
const sizes = ["S", "M", "X", "XL", "XXL"];
const colors = ["blue", "red", "yellow"];

type ProductFormData = z.infer<typeof productSchema>;

export default function Product({ product }: PageProps) {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(productSchema),
    defaultValues: {
      size: "",
      color: "",
      quantity: 1,
    },
  });

  const quantity = watch("quantity");
  const selectedColor = watch("color");
  const selectedSizes = watch("size");

  const onSubmit = (data: ProductFormData) => {
    console.log(data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex h-[580px] gap-28">
          <div className="w-1/2 bg-[#F6F6F6] rounded-md">
            <div>
              <ImageDisplay images={images} />
            </div>
          </div>
          <div className=" flex-1 flex flex-col gap-8">
            {/* name and review star display */}
            <div>
              <div className=" flex justify-between">
                <h1 className="font-extrabold text-2xl">
                  Raw Black T-Shirt Lineup
                </h1>
                <FaShareAlt className="text-[#5C5F6A] text-2xl" />
              </div>
              <div className="flex justify-center items-center w-fit gap-3">
                <div className="bg-[#f6f6f6] rounded-full flex p-2 justify-center items-center gap-3">
                  <FaStar className=" text-[#5C5F6A] text-xl" />
                  <p>4.2 — 54 Reviews</p>
                </div>
                <div className="uppercase border rounded-full p-2">
                  in stock
                </div>
              </div>
            </div>
            {/* price of product display */}
            <div>
              <h1 className="text-2xl font-extrabold text-[#5C5F6A]">$74.00</h1>
            </div>
            {/* available colors display */}
            <div>
              <div>
                <label className="block text-base uppercase font-semibold text-[#5C5F6A]">
                  Available Colors
                </label>
                <div>
                  <ColorSelector
                    colors={colors}
                    selectedColor={selectedColor}
                    setSelectedColor={(color) => setValue("color", color)}
                  />
                  {errors.color?.message && (
                    <p className="text-red-500 text-sm ">
                      {String(errors.color.message)}
                    </p>
                  )}
                </div>
              </div>
            </div>
            {/* available sizes */}
            <div>
              <label className="block text-base uppercase font-semibold text-[#5C5F6A]">
                select size
              </label>
              <SizeSelector
                sizes={sizes}
                selectedSize={selectedSizes}
                setSelectedsize={(size) => setValue("size", size)}
              />
              {errors.size?.message && (
                <p className="text-red-500 text-sm ">
                  {String(errors.size.message)}
                </p>
              )}
            </div>
            {/* choose quantity */}
            <div>
              <label className="block text-base uppercase font-semibold text-[#5C5F6A]">
                quantity
              </label>
              <QuantityInput
                quantity={quantity}
                setQuantity={(value) => setValue("quantity", value)}
              />
              {errors.quantity?.message && (
                <p className="text-red-500 text-sm ">
                  {String(errors.quantity.message)}
                </p>
              )}
            </div>
            {/* submit button */}
            <div className="flex gap-5">
              <button type="submit" className="btn">
                Add to cart
              </button>
              <button
                type="button"
                className="w-12 h-12 border flex items-center justify-center rounded-md"
              >
                <AiOutlineHeart className="text-3xl" />
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
