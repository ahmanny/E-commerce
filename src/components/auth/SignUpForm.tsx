"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoogleSignin from "./GoogleSignin";
import Link from "next/link";
import { useSignup } from "@/lib/utils/hooks/mutations/useAuth";
import { BeatLoader } from "react-spinners";

const schema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  email: z.string().email("invalid Email"),
  password: z.string().min(8, "password must be  at least 8 characters"),
});
export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const signupMutation = useSignup();
  // function to handle submit form click.
  function submitForm(data: any) {
    signupMutation.mutate(data);
  }
  return (
    <div className="flex flex-col justify-center items-center py-24 gap-[30px]">
      {/* component for google sign in option */}
      <GoogleSignin />
      {/* sign up form */}
      <form
        onSubmit={handleSubmit(submitForm)}
        className=" flex flex-col gap-[15px]"
      >
        {/* name label and input */}

        <div className=" flex-col flex ">
          <label htmlFor="name">Name</label>
          <input
            {...register("name")}
            id="name"
            className=" border-neutral-300 border border-solid p-2 w-[350px] rounded-[5px] outline-none focus:border-blue-500"
          />
          {errors.name?.message && (
            <p className="text-red-500">{String(errors.name.message)}</p>
          )}
        </div>
        {/* email label and input */}

        <div className="flex-col flex">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            id="email"
            className=" border-neutral-300 border border-solid p-2 w-[350px] rounded-[5px] outline-none focus:border-blue-500"
          />
          {errors.email?.message && (
            <p className="text-red-500">{String(errors.email.message)}</p>
          )}
        </div>
        {/* password label and input */}
        <div className=" flex-col flex ">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            id="password"
            className=" border-neutral-300 border border-solid p-2 w-[350px] rounded-[5px] outline-none focus:border-blue-500"
          />
          {errors.password?.message && (
            <p className="text-red-500">{String(errors.password.message)}</p>
          )}
        </div>
        <div className=" w-[350px] flex justify-end ">
          <p className=" capitalize text-sm">
            by creating An account you agree with our terms or services, Privacy
            policy.
          </p>
        </div>

        <div>
          <button
            type="submit"
            className=" bg-black text-white w-[350px] h-[43px] rounded-md"
          >
            {signupMutation.isPending ? (
              <BeatLoader color="#3498db" />
            ) : (
              "Create Account"
            )}
          </button>
          {/* backend errors */}
          {signupMutation.isError && (
            <p className=" text-red-500">
              {String(signupMutation.error?.message)}
            </p>
          )}
        </div>
      </form>
      <div>
        <p>
          Already have an account? <Link href="/login"> Login Up</Link>
        </p>
      </div>
    </div>
  );
}
