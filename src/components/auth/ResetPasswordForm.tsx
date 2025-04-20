"use client";

import { useResetPassword } from "@/lib/utils/hooks/mutations/auth.mutations";
import { zodResolver } from "@hookform/resolvers/zod";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const passwordResetSchema = z
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

export default function ResetPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const resetPasswordMutation = useResetPassword();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(passwordResetSchema),
  });

  // Function to reset password{ newPassword: string; confirmPassword: string }
  function onsubmit(data: any) {
    if (token) {
      const credentials = {
        newPassword: data.newPassword,
        token: token,
      };
      resetPasswordMutation.mutate(credentials);
      console.log(credentials);
    }
  }

  return (
    <div className=" w-[350px] py-24">
      <form
        onSubmit={handleSubmit(onsubmit)}
        className="flex flex-col justify-center items-center  gap-6"
      >
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
            <p className="text-red-500">{String(errors.newPassword.message)}</p>
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

        {/* submit button */}
        <button type="submit" className="btn mt-8">
          Reset Password
        </button>
      </form>
    </div>
  );
}
