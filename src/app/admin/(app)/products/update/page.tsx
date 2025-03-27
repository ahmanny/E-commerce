"use client";

import ProductForm from "@/components/adminComponents/products/ProductForm";
import UpdateProduct from "@/components/adminComponents/products/update/UpdateProduct";
import { useGetProduct } from "@/lib/utils/hooks/queries/useProducts.queries";
import { useParams, usePathname, useSearchParams } from "next/navigation";

const product = {
  __v: 102983,
  _id: "quyu3882758739wteyr24536271",
  title: "Shoe",
  colors: ["blue", "red", "yellow"],
  description: "string is for characters while the rest well i dont know",
  sku: "string",
  price: 27,
  quantity_available: 47,
  sizes: ["S", "M", "X", "XXL"],
  stock_status: "pending",
  slug: "slug",
  category: "Dress shoes",
  images: ["/file.svg", "/globe.svg", "/vercel.svg"],
};

export default function page() {
  const searchParams = useSearchParams();
  const productId = searchParams.get("productId");
  // const {
  //   data: product,
  //   isLoading,
  //   isError,
  // } = useGetProduct(productId as string);

  // if (isLoading) return <p> loading product {productId}....</p>;
  // if (isError) return <p>Error loading product</p>;
  if (!product) return <p>Product not found</p>;

  return (
    <div className="bg-white p-8 w-[85%]">
      {/* page heading */}
      <div className=" pb-8 border-b-[1px] border-solid border-gray-200 mb-12">
        <h1 className=" text-xl font-semibold ">Update {product.title}</h1>
      </div>
      {/* Update product form */}
      <UpdateProduct product={product} />
    </div>
  );
}
