"use client";

interface SelectInputProps {
  label: string;
  options: string[];
  name: string;
  register: any;
  errors?: any;
}

export default function SelectInput({
  errors,
  label,
  name,
  options,
  register,
}: SelectInputProps) {
  return (
    <div>
      {/* category input/dropdown */}
      <div className=" flex-col flex ">
        <label htmlFor={label} className="label">
          {label}
        </label>
        <select
          id={label}
          {...register(name)}
          className="input bg-white cursor-pointer"
        >
          <option value="">Select...</option>
          {options.map((option, index) => (
            <option key={index} value={option} className="capitalize">
              {option}
            </option>
          ))}
        </select>
        {errors?.[name]?.message && (
          <p className="text-red-500 text-sm">
            {String(errors[name]?.message)}
          </p>
        )}
      </div>
    </div>
  );
}
