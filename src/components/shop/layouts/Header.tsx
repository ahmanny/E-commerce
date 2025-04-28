"use client";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div className=" sticky top-0 z-40 shadow bg-white h-[45px] pt-2  w-full flex justify-center items-center ">
      <div>
        <NavBar />
      </div>
    </div>
  );
}
