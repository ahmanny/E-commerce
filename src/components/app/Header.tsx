import Link from "next/link";
import NavBar from "./NavBar";

export default function Header() {
  return (
    <div>
      <div className=" bg-[#0E1422] w-screen h-[40px] flex justify-center items-center text-white gap-1">
        <p>Get 25% OFF on your first order</p> <Link href="#"> Order Now</Link>
      </div>
      <div className=" h-[85px]  flex justify-center items-center shadow-xl">
        <NavBar />
      </div>
    </div>
  );
}
