import { FaCartPlus } from "react-icons/fa";
import Navs from "./Navs";

export default function AdminNavBar() {
  return (
    <div className=" flex flex-col items-center w-full py-10 ">
      <div className="flex">
        <FaCartPlus className=" text-3xl" />
        <h1 className=" text-[#0E1422] font-extrabold text-[22px]">Admin</h1>
      </div>
      <div className=" w-full">
        <Navs />
      </div>
    </div>
  );
}
