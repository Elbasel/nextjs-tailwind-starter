import React from "react";
import { twMerge } from "tailwind-merge";

type InputProps = {
  label?: string;
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
};

const baseClassName =
  "block w-full px-4 py-2 text-3xl text-white placeholder-gray-400 bg-gray-800 rounded-lg resize-none focus:outline-none";

export const Input = ({
  label,
  name,
  placeholder,
  value,
  onChange,
  className,
  required = false,
}: InputProps): React.ReactElement => {
  return (
    <>
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-white"
      >
        {label}
      </label>
      <input
        type="text"
        className={twMerge(baseClassName, className)}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
      />
    </>
  );
};
