import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegStar } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { GoPeople } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { LuLayoutDashboard } from "react-icons/lu";
import { TiShoppingCart } from "react-icons/ti";

const dashBoardNavs = [
  { title: "dashboard", href: "/dashboard", icon: <LuLayoutDashboard /> },
  { title: "products", href: "/products", icon: <LiaBoxOpenSolid /> },
  { title: "orders", href: "/orders", icon: <TiShoppingCart /> },
  { title: "customers", href: "/customers", icon: <GoPeople /> },
  { title: "reviews", href: "/reviews", icon: <FaRegStar /> },
  { title: "settings", href: "/settings", icon: <IoSettingsOutline /> },
];

export default function Navs() {
  const pathName = usePathname();
  const path = pathName.split("/").pop()?.replace(/-/g, " ") || "Home";
  return (
    <div className=" flex flex-col gap-16">
      <div className="flex gap-4 flex-col w-full border-b-2 border-solid border-[#E9E9EB] py-[70px] ">
        {dashBoardNavs.map((nav, index) => (
          <Link
            key={index}
            href={`/admin${nav.href}`}
            className={` capitalize hover:bg-[#f6f6f6] items-center rounded-lg w-[212px] h-[51px] flex mx-auto px-4 gap-2 ${
              nav.title === path
                ? "text-[#0E1422] bg-[#f6f6f6]"
                : "text-[#5C5F6A]"
            }`}
          >
            <span className=" text-2xl">{nav.icon}</span>
            <span className=" text-[20px]">{nav.title}</span>
          </Link>
        ))}
      </div>
      <button className="capitalize text-[#5C5F6A] flex h-[51px] w-[212px] mx-auto px-4 gap-2 hover:bg-[#F6F6F6] items-center rounded-md ">
        <span className=" text-2xl">
          <FaPlus />
        </span>
        <span className=" text-[20px]">Extras</span>
      </button>
    </div>
  );
}
