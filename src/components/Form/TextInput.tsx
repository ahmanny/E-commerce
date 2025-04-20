"use client";
import React from "react";
interface TextInputProps {
  label: string;
  name: string;
  register: any;
  errors: any;
  isReadOnly?: boolean;
}
export default function TextInput({
  label,
  name,
  register,
  errors,
  isReadOnly,
}: TextInputProps) {
  return (
    <div className=" flex-col flex ">
      <label htmlFor={label} className="label">
        {label}
      </label>
      <input
        {...register(name)}
        id={label}
        className=" input"
        readOnly={isReadOnly}
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
}
