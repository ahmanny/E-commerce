"use client";

import { Textarea } from "@chakra-ui/react";
import React from "react";
interface TextereaInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
}
export default function TextereaInput({
  label,
  name,
  register,
  errors,
}: TextereaInputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <Textarea
        id={label}
        {...register(name)}
        size={"xl"}
        autoresize
        className="border-gray-200 border border-solid p-2 w-full rounded-[5px] outline-none focus:border-blue-500"
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}
