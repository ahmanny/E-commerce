"use client";

import { useUpdateUser } from "@/lib/utils/hooks/mutations/user.mutations";
import { User, useUserStore } from "@/store/userStore";
import { Avatar } from "@chakra-ui/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const accountDetailSchema = z.object({
  name: z.string().min(3, "Enter your full name"),
  email: z.string().email("invalid Email"),
});

export default function AccountDetail() {
  const updateUserMutation = useUpdateUser();
  const { user, updateUser } = useUserStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(accountDetailSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user) {
      reset({
        email: user.email,
        name: user.name,
      });
    }
  }, [user, reset]);

  function submitChanges(data: Partial<User>) {
    console.log(data);
    toast.success("sumitted");
    updateUserMutation.mutate(data, {
      onSuccess: () => {
        updateUser(data);
        toast.success("Profile updated successfully");
      },
    });
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitChanges)}
        className=" flex flex-col py-14 gap-[45px] w-[320px] text-[#474B57]"
      >
        <Avatar.Root size={"2xl"}>
          <Avatar.Fallback name={user?.name} />
          <Avatar.Image src={user?.profilePicture} />
        </Avatar.Root>
        <div className="flex flex-col gap-[18px]">
          <div className=" flex-col flex ">
            <label htmlFor="name" className="font-medium">
              Full Name
            </label>
            <input {...register("name")} id="name" className=" input" />
            {errors?.name && (
              <p className="text-red-500">{String(errors.name.message)}</p>
            )}
          </div>
          <div className=" flex-col flex ">
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" className=" input" />
            {errors?.email && (
              <p className="text-red-500">{String(errors.email.message)}</p>
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
