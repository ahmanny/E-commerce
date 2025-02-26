"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { FaCartPlus } from "react-icons/fa";

const schema = z.object({
  email: z.string().email("invalid Email"),
  password: z.string().min(8, "password must be  at least 8 characters"),
});
export default function AdminLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  // function to handle submit form click.
  function submitForm(data: any) {
    console.log(data);
  }
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-[30px] min-h-screen">
      <div className="flex">
        <FaCartPlus className=" text-3xl" />
        <h1 className=" text-[#0E1422] font-bold text-[22px]">Admin</h1>
      </div>
      {/* login form */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className=" flex flex-col gap-[15px] w-[320px] text-[#474B57]"
      >
        <div className=" flex-col flex ">
          <label htmlFor="email">Email</label>
          <input {...register("email")} id="email" className=" input" />
          {errors.email?.message && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
        </div>
        <div className=" flex-col flex ">
          <label htmlFor="password">Password</label>
          <input {...register("password")} id="password" className=" input" />
          {errors.password?.message && (
            <p className="text-red-500">{String(errors.password.message)}</p>
          )}
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
    </div>
  );
}
