"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoogleSignin from "./GoogleSignin";
import Link from "next/link";
import { useLogin } from "@/lib/utils/hooks/mutations/auth.mutations";
import { Spinner } from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";
import { useRouter, useSearchParams } from "next/navigation";
import TextInput from "../Form/TextInput";

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
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  // function to handle submit form click.
  function submitForm(data: any) {
    loginMutation.mutate(data, {
      onSuccess: () => {
        router.push(callbackUrl);
      },
    });
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
        {/* email input  */}
        <TextInput
          name="email"
          label="Email"
          register={register}
          errors={errors}
        />
        {/* password input */}
        <TextInput
          name="password"
          label="Password"
          register={register}
          errors={errors}
        />
        {/* forgotten password button */}
        <div className=" w-full flex justify-end">
          <Link
            href={`/forgotten-password`}
            className=" text-right mb-3 hover:text-opacity-80"
          >
            Forgotten Password?
          </Link>
        </div>
        {/* submit form button */}
        <button type="submit" className="btn">
          {loginMutation.isPending ? <BeatLoader color="#3498db" /> : "Login"}
        </button>
        {/* backend errors */}
        {loginMutation.isError && (
          <p className=" text-red-500">
            {String(loginMutation.error?.message)}
          </p>
        )}
      </form>
      <div>
        <p>
          Don't have an account? <Link href="/auth/sign-up"> Sign up</Link>
        </p>
      </div>
    </div>
  );
}
