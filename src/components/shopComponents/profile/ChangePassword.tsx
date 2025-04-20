"use client";

import { useResetPassword } from "@/lib/utils/hooks/mutations/auth.mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const passwordChangeSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Must contain at least one uppercase letter")
      .regex(/[a-z]/, "Must contain at least one lowercase letter")
      .regex(/[0-9]/, "Must contain at least one number")
      .regex(/[^A-Za-z0-9]/, "Must contain at least one special character"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ChangePassword() {
  //   const changePasswordMutation = useResetPassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordChangeSchema),
  });

  const submitChanges = (data: any) => {
    const credentials = {
      newPassword: data.newPassword,
    };
    //   changePasswordMutation.mutate(credentials);
    console.log(credentials);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col py-14 gap-[45px] w-[320px] text-[#474B57]"
      >
        <div className="flex flex-col gap-[18px]">
          {/* new password input */}
          <div className="flex-col flex w-full">
            <label htmlFor="new-password">New Password</label>
            <input
              id="new-password"
              type="password"
              {...register("newPassword")}
              className="input"
            />
            {errors.newPassword?.message && (
              <p className="text-red-500">
                {String(errors.newPassword.message)}
              </p>
            )}
          </div>
          {/* confirm password input */}
          <div className="flex-col flex w-full">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              id="confirm-password"
              type="password"
              {...register("confirmPassword")}
              className="input"
            />
            {errors.confirmPassword?.message && (
              <p className="text-red-500">
                {String(errors.confirmPassword.message)}
              </p>
            )}
          </div>
        </div>
        {/* submit button */}
        <button type="submit" className="btn !w-1/2">
          change password
        </button>
      </form>
    </div>
  );
}
