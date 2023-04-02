import React from "react";

type CheckboxProps = {
  name: string;
  label: string;
  placeholder: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Checkbox = ({
  name,
  label,
  placeholder,
  checked,
  onChange,
}: CheckboxProps): React.ReactElement => {
  return (
    <>
      <div className="flex items-center">
        <input
          type="checkbox"
          id={name || label}
          name={name || label}
          placeholder={placeholder}
          checked={checked}
          onChange={onChange}
          className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:border-2"
        />
        <label
          htmlFor={name || label}
          className="ml-2 text-sm font-medium text-gray-300 capitalize"
        >
          {label}
        </label>
      </div>
      
    </>
  );
};
