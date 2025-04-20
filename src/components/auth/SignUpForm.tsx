"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import GoogleSignin from "./GoogleSignin";
import Link from "next/link";
import { useSignup } from "@/lib/utils/hooks/mutations/auth.mutations";
import { BeatLoader } from "react-spinners";
import TextInput from "../Form/TextInput";
import { useRouter, useSearchParams } from "next/navigation";

const schema = z.object({
  name: z.string().min(3, "name must be at least 3 characters"),
  email: z.string().email("invalid Email"),
  password: z.string().min(8, "password must be  at least 8 characters"),
});
export default function SignUpForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const signupMutation = useSignup();
  // function to handle submit form click.
  function submitForm(data: any) {
    signupMutation.mutate(data, {
      onSuccess: () => {
        router.push(callbackUrl);
      },
    });
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
        <TextInput
          label="Name"
          name="name"
          register={register}
          errors={errors}
        />
        {/* email label and input */}
        <TextInput
          label="Email"
          errors={errors}
          name="email"
          register={register}
        />
        {/* password label and input */}
        <TextInput
          name="password"
          label="Password"
          register={register}
          errors={errors}
        />
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
          Already have an account? <Link href="/auth/login"> Login Up</Link>
        </p>
      </div>
    </div>
  );
}
