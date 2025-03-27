"use client";

import { useFogottenPassword } from "@/lib/utils/hooks/mutations/useAuth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("invallid Email"),
});
export default function ForgottenpasswForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });
  const forgottenPasswordMutation = useFogottenPassword();
  function submitForm(data: any) {
    forgottenPasswordMutation.mutate(data);
  }
  return (
    <div className="form-container flex flex-col py-36 items-center h-screen gap-[30px]">
      <div className=" w-[350px]">
        <p className=" text-sm mb-6">
          Please enter the email address associated with your account. We'll
          promptly send you a link to reset your password.
        </p>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className=" flex-col flex gap-2 mb-6 ">
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" className="input" />
            {errors.email?.message && (
              <p className="text-red-500">{String(errors.email.message)}</p>
            )}
          </div>
          <div>
            <button type="submit" className="btn">
              {forgottenPasswordMutation.isPending ? (
                <BeatLoader color="#3498db" />
              ) : (
                "Send reset link"
              )}
            </button>

            {/* backend errors */}
            {forgottenPasswordMutation.isError && (
              <p className=" text-red-500">
                {String(forgottenPasswordMutation.error?.message)}
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
