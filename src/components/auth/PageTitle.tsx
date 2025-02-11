import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";

type props = {
  title: string;
};
export default function PageTitle(prop: props) {
  return (
    <div className=" flex justify-center items-center bg-[#F6F6F6] w-screen h-[160px]">
      <div className=" w-3/5 ">
        <h1 className=" text-[26px] font-bold mb-3"> {prop.title} </h1>
        <p className=" flex gap-2 items-center">
          <Link href={"/"}>Ecommerce</Link> <IoIosArrowForward />{" "}
          <span> {prop.title} </span>
        </p>
      </div>
    </div>
  );
}
