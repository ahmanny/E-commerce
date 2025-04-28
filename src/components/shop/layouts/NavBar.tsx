"use client";

import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import CartDrawer from "../cart/CartDrawer";
import SearchProducts from "@/components/searchBars/SearchProducts";

export default function NavBar() {
  return (
    <div className=" flex items-center gap-5 sm:gap-[75px]">
      <div className=" flex gap-[85px]">
        <div className="flex">
          <FaCartPlus className=" text-xl sm:text-3xl " />
          <h1 className=" text-[#0E1422] font-bold text-[16px] sm:text-[22px]">
            Ecommerce
          </h1>
        </div>
        <div className="hidden lg:flex gap-8 ">
          <Link href={"/"}>Home</Link>
          <button className=" flex justify-center items-center gap-2 ">
            <p>Categories</p> <IoIosArrowDown className=" font-light mt-1" />
          </button>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-7">
        <SearchProducts />
        <CartDrawer />
        <Link href={"/my-account/orders"}>
          <CgProfile className=" text-[18px] sm:text-[28px] " />
        </Link>
      </div>
    </div>
  );
}
