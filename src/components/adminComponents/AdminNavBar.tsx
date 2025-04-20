import { FaCartPlus, FaPlus, FaRegStar } from "react-icons/fa";
import Navs from "../NavsComponent";
import { LuLayoutDashboard } from "react-icons/lu";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";

const adminDashBoardNavs = [
  { title: "dashboard", href: "/dashboard", icon: <LuLayoutDashboard /> },
  { title: "products", href: "/products", icon: <LiaBoxOpenSolid /> },
  { title: "orders", href: "/orders", icon: <TiShoppingCart /> },
  { title: "customers", href: "/customers", icon: <GoPeople /> },
  { title: "reviews", href: "/reviews", icon: <FaRegStar /> },
  { title: "settings", href: "/settings", icon: <IoSettingsOutline /> },
];

export default function AdminNavBar() {
  return (
    <div className=" flex flex-col items-center w-full py-10 ">
      <div className="flex">
        <FaCartPlus className=" text-3xl" />
        <h1 className=" text-[#0E1422] font-extrabold text-[22px]">Admin</h1>
      </div>
      <div className=" w-full">
        <div className=" flex flex-col gap-16">
          <div className="py-[70px]">
            <Navs navs={adminDashBoardNavs} parentHref="/admin" />
          </div>
          <hr />
          <button className="capitalize text-[#5C5F6A] flex h-[51px] w-[212px] mx-auto px-4 gap-2 hover:bg-[#F6F6F6] items-center rounded-md ">
            <span className=" text-2xl">
              <FaPlus />
            </span>
            <span className=" text-[20px]">Extras</span>
          </button>
        </div>
      </div>
    </div>
  );
}
