"use client";

"use client";

interface ShippingFormProps {
  register: any;
  errors: any;
}
export default function ShippingForm({ register, errors }: ShippingFormProps) {
  return (
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
        {/* email and full name input */}
        <div className="flex gap-8 w-full mt-8 ">
          <div className=" flex-col flex w-1/2">
            <label htmlFor="email">Email</label>
            <input {...register("email")} id="email" className=" input" />
            {errors.email?.message && (
              <p className="text-red-500">{String(errors.email.message)}</p>
            )}
          </div>
          <div className=" flex-col flex w-1/2 ">
            <label htmlFor="name">Full name</label>
            <input {...register("name")} id="name" className=" input" />
            {errors.name?.message && (
              <p className="text-red-500">{String(errors.name.message)}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
