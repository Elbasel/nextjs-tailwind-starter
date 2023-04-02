import React from "react";
import { twMerge } from "tailwind-merge";

// TODO create a new generic input component that can morph into sub types of inputs
// TODO The generic component will have a unified interface (props) that are shared among all input types
type RangeInputProps = {
  name?: string;
  label?: string;
  className?: string;
  min?: number;
  max?: number;
  value?: number;
  onChange?: (e?: undefined | React.ChangeEvent<HTMLInputElement>) => any;
};

export const RangeInput = ({
  name,
  label,
  className,
  min = 0,
  max = 10,
  value = min,
  onChange,
}: RangeInputProps): React.ReactElement => {
  return (
    <div className={twMerge("flex items-center", className)}>
      <label
        htmlFor={name || label}
        className="block mr-4 text-sm font-medium capitalize shrink-0"
      >
        {label}
      </label>
      <input
        id={name || label}
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={onChange}
        className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
      />
      <output className="ml-4 text-lg">{value}</output>
    </div>
  );
};
