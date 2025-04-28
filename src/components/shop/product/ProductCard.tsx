import { productsinterface } from "@/lib/types/products.types";
import Link from "next/link";

interface ProductCardProps {
  product: productsinterface;
}
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.slug}-${product._id}`} className="w-fit">
      <div className=" flex flex-col gap-4 w-[150px] h-[250px] md:w-[190px] md:h-[290px] lg:w-[220px] lg:h-[370px]  xl:w-[264px] xl:h-[434px]">
        <div className=" p-4 rounded-lg w-full h-3/4   bg-[#F6F6F6] flex justify-center items-center">
          <img
            src={product.images[0]}
            alt="Product"
            className="w-3/4 h-5/6 object-cover rounded-lg"
          />
        </div>
        <div>
          <h1 className="font- text-2xl capitalize text-[#0E1422]">
            {product.title}
          </h1>
          <div className="flex items-center justify-between">
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
