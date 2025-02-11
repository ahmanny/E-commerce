import { FaCartPlus } from "react-icons/fa";
import SearchProducts from "./SearchProducts";
import { BsCart4 } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

export default function NavBar() {
  return (
    <div className=" flex justify-center items-center gap-[85px]">
      <div className=" flex  items-center gap-[103px]">
        <div className="flex">
          <FaCartPlus className=" text-3xl" />
          <h1 className=" text-[#0E1422] font-bold text-[22px]">Ecommerce</h1>
        </div>
        <div className=" flex gap-8">
          <button className="">Home</button>
          <button className=" flex justify-center items-center gap-2 ">
            <p>Categories</p> <IoIosArrowDown className=" font-light mt-1" />
          </button>
          <button className="">About</button>
          <button className=" ">Contact</button>
        </div>
      </div>
      <div className=" flex justify-center items-center gap-10">
        <SearchProducts />
        <button>
          <BsCart4 className=" text-[28px]" />
        </button>
        <button>
          <CgProfile className=" text-[28px]" />
        </button>
      </div>
    </div>
  );
}
