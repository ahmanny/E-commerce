"use client";

import { useUpdateUser } from "@/lib/utils/hooks/mutations/user.mutations";
import { User, useUserStore } from "@/store/userStore";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { BeatLoader } from "react-spinners";
import { z } from "zod";

const addressSchema = z.object({
  address: z.string().min(3, "Enter your Address"),
  city: z.string().min(1, "Enter your City"),
  state: z.string().min(3, "Enter your State"),
  zipCode: z.string().min(3, "Enter your Zip Code"),
  country: z.string().min(3, "Please select your Country"),
});
type AddressFormData = z.infer<typeof addressSchema>;
export default function AddressForm() {
  const updateUserMutation = useUpdateUser();
  const { user, updateUser } = useUserStore();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AddressFormData>({
    resolver: zodResolver(addressSchema),
    defaultValues: {
      address: "",
      city: "",
      state: "",
      zipCode: "",
      country: "",
    },
  });

  // ✅ Prefill form when user data is available
  useEffect(() => {
    if (user?.shippingAddress) {
      reset({
        address: user.shippingAddress.address,
        city: user.shippingAddress.city,
        state: user.shippingAddress.state,
        zipCode: user.shippingAddress.zipCode,
        country: user.shippingAddress.country,
      });
    }
  }, [user, reset]);

  function submitForm(data: AddressFormData) {
    const shippingAddress = {
      address: data.address,
      city: data.city,
      state: data.state,
      zipCode: data.zipCode,
      country: data.country,
    };
    console.log(data);
    toast.success("sumitted");
    updateUserMutation.mutate(shippingAddress, {
      onSuccess: () => {
        updateUser({
          shippingAddress: shippingAddress,
        });
        toast.success("Profile updated successfully");
      },
    });
  }
  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      className="space-y-14 py-14 w-[550px]"
    >
      <div>
        <div className=" flex flex-col gap-[15px] text-[#474B57]">
          <div className=" flex-col flex ">
            <label htmlFor="address">Street Address</label>
            <input {...register("address")} id="address" className=" input" />
            {errors.address?.message && (
              <p className="text-red-500">{String(errors.address.message)}</p>
            )}
          </div>
          {/* city and state input */}
          <div className="flex gap-8 w-full">
            <div className=" flex-col flex w-1/2">
              <label htmlFor="city">City</label>
              <input {...register("city")} id="city" className=" input" />
              {errors.city?.message && (
                <p className="text-red-500">{String(errors.city.message)}</p>
              )}
            </div>
            <div className=" flex-col flex w-1/2">
              <label htmlFor="state">State</label>
              <input {...register("state")} id="state" className=" input" />
              {errors.state?.message && (
                <p className="text-red-500">{String(errors.state.message)}</p>
              )}
            </div>
          </div>
          {/* zip code and country input  */}
          <div className="flex gap-8 w-full ">
            <div className=" flex-col flex w-1/2">
              <label htmlFor="zipCode">Zip Code</label>
              <input {...register("zipCode")} id="zipCode" className=" input" />
              {errors.zipCode?.message && (
                <p className="text-red-500">{String(errors.zipCode.message)}</p>
              )}
            </div>
            <div className=" flex-col flex w-1/2 ">
              <label htmlFor="country">Country</label>
              <input {...register("country")} id="country" className=" input" />
              {errors.country?.message && (
                <p className="text-red-500">{String(errors.country.message)}</p>
              )}
            </div>
          </div>
        </div>
      </div>
      <button type="submit" className="btn !w-1/2">
        {updateUserMutation.isPending ? (
          <BeatLoader color="#3498db" />
        ) : (
          "Save Changes"
        )}
      </button>
    </form>
  );
}
