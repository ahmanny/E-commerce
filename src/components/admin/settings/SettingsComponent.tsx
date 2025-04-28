"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const settingsFormSchema = z.object({
  siteName: z.string().min(3, "site name must be more than 3 characters"),
  supportEmail: z.string().email("invalid Email"),
  monthlyGoal: z.coerce.number().min(100, "monthly goal must be more than 100"),
});

export default function SettingsComponent() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(settingsFormSchema) });

  function submitChanges(data: any) {
    console.log(data);
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col gap-[45px] w-[320px] text-[#474B57]"
      >
        <div className="flex flex-col gap-[18px]">
          <div className=" flex-col flex ">
            <label htmlFor="name" className="font-medium">
              Site Name
            </label>
            <input {...register("siteName")} id="name" className=" input" />
            {errors?.siteName && (
              <p className="text-red-500">{String(errors.siteName.message)}</p>
            )}
          </div>
          <div className=" flex-col flex ">
            <label htmlFor="email">Support Email</label>
            <input
              {...register("supportEmail")}
              id="email"
              className=" input"
            />
            {errors?.supportEmail && (
              <p className="text-red-500">
                {String(errors.supportEmail.message)}
              </p>
            )}
          </div>
          <div className=" flex-col flex ">
            <label htmlFor="goal">Monthly Order Goal</label>
            <input {...register("monthlyGoal")} id="goal" className=" input" />
            {errors?.monthlyGoal && (
              <p className="text-red-500">
                {String(errors.monthlyGoal.message)}
              </p>
            )}
          </div>
        </div>
        <button type="submit" className="btn !w-1/2">
          Save Changes
        </button>
      </form>
    </div>
  );
}
