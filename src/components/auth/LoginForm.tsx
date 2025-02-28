"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoogleSignin from "./GoogleSignin";
import Link from "next/link";
import { useLogin } from "@/lib/utils/hooks/useLogin";

const schema = z.object({
  email: z.string().email("invalid Email"),
  password: z.string().min(8, "password must be  at least 8 characters"),
});
export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const loginMutation = useLogin();
  // function to handle submit form click.
  function submitForm(data: any) {
    loginMutation.mutate(data);
    console.log(data);
  }
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-[30px]">
      {/* component for google sign in option */}
      <GoogleSignin />
      {/* login form */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className=" flex flex-col gap-[15px] w-[350px]"
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
        <div className=" w-full flex justify-end">
          <Link
            href={`/forgotten-password`}
            className=" text-right mb-3 hover:text-opacity-80"
          >
            Forgotten Password?
          </Link>
        </div>
        <button type="submit" className="btn">
          Login
        </button>
      </form>
      <div>
        <p>
          Don't have an account? <Link href="/sign-up"> Sign up</Link>
        </p>
      </div>
    </div>
  );
}
