"use client";
import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <div className=" bg-[#0E1422] min-w-full h-[40px] flex justify-center items-center text-white gap-1">
        <p>Get 25% OFF on your first order</p> <Link href="#"> Order Now</Link>
      </div>
      <div className=" h-[85px] w-screen flex justify-center items-center shadow-sm">
        <div className="w-[1180px]  ">
          <NavBar />
        </div>
      </div>
    </div>
  );
}
