import { FaCartPlus, FaRegHeart, FaRegStar } from "react-icons/fa";
import { LiaBoxOpenSolid } from "react-icons/lia";
import { TiShoppingCart } from "react-icons/ti";
import { GoPeople } from "react-icons/go";
import { IoPersonOutline, IoSettingsOutline } from "react-icons/io5";
import Navs from "@/components/NavsComponent";
import { FaCartFlatbed, FaCartShopping } from "react-icons/fa6";
import { RiKey2Line } from "react-icons/ri";
import { BsTruck } from "react-icons/bs";
import { TbLogout } from "react-icons/tb";

const adminDashBoardNavs = [
  { title: "orders", href: "/orders", icon: <TiShoppingCart /> },
  { title: "wishlist", href: "/wishlist", icon: <FaRegHeart /> },
  { title: "address", href: "/address", icon: <BsTruck /> },
  { title: "password", href: "/change-password", icon: <RiKey2Line /> },
  {
    title: "account detail",
    href: "/account-detail",
    icon: <IoPersonOutline />,
  },
];

export default function ProfileNavBar() {
  return (
    <div className=" flex flex-col items-center w-full py-10 border-r">
      <div className=" w-full">
        <div className=" flex flex-col gap-4">
          <Navs parentHref="/my-account" navs={adminDashBoardNavs} />
          <button className="capitalize text-[#5C5F6A] flex h-[51px] w-[212px] mx-auto px-4 gap-3 hover:bg-[#F6F6F6] items-center rounded-md ">
            <TbLogout className="text-3xl" />
            <span className=" text-[20px]">Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
