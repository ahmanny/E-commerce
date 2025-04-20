"use client";

import React from "react";
import CreatableSelect from "react-select/creatable";
import { Controller } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface Props {
  label: string;
  name: string;
  control: any;
  options: string[];
  placeholder?: string;
  errors?: any;
}

export const CreatableMultiSelect: React.FC<Props> = ({
  label,
  name,
  control,
  options,
  placeholder,
  errors,
}) => {
  const selectOptions: Option[] = options.map((opt) => ({
    label: opt,
    value: opt,
  }));

  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={name} className="label">
        {label}
      </label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <CreatableSelect
            isMulti
            instanceId={"category-select"}
            options={selectOptions}
            onChange={(selected) => {
              field.onChange(selected.map((opt) => opt.value));
            }}
            value={
              field.value?.map((val: string) => ({
                label: val,
                value: val,
              })) || []
            }
            className="text-black"
            placeholder={placeholder}
          />
        )}
      />
      {errors?.[name]?.message && (
        <p className="text-red-500 text-sm">{String(errors[name]?.message)}</p>
      )}
    </div>
  );
};
