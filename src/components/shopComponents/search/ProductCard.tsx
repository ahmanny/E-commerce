import { productsinterface } from "@/lib/types/products.types";
import Link from "next/link";

interface ProductCardProps {
  product: productsinterface;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}-${product._id}`} className=" mb-9">
      <div className=" flex flex-col gap-10 px-2 py-3 ">
        <div className="border p-4 rounded-lg  w-[260px] h-[320px] bg-[#F6F6F6] flex justify-center items-center">
          <img
            src={product.images[0]}
            alt="Product"
            className="w-[200px] h-[250px] object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="font- text-2xl capitalize text-[#0E1422]">
            {product.title}
          </h1>
          <div className="flex items-center gap-6">
            <div className="uppercase border rounded-full p-2">
              {product.stock_status}
            </div>
            <h1 className="text-xl font-extrabold text-[#5C5F6A]">
              {new Intl.NumberFormat("en-Us", {
                style: "currency",
                currency: "USD",
              }).format(product.price)}
            </h1>
          </div>
        </div>
      </div>
    </Link>
  );
}
