import React, { useEffect, useRef } from "react";

type TextareaProps = {
  name?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  label?: string;
  autoFocus?: boolean;
};

export const Textarea = ({
  name,
  placeholder,
  value,
  onChange,
  required = false,
  autoFocus = false,
  label = "textarea",
}: TextareaProps): React.ReactElement => {
  const textAreaRef = useRef<any>(null);
  useEffect(() => {
    if (autoFocus && textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <>
      <label htmlFor={name} className="sr-only">
        {label}
      </label>
      <textarea
        ref={textAreaRef}
        name={name}
        id={name}
        className="block w-full h-40 px-4 py-2 text-4xl text-white placeholder-gray-400 bg-gray-800 rounded-lg resize-none focus:outline-none"
        placeholder={placeholder}
        required
        value={value}
        onChange={onChange}
      ></textarea>
    </>
  );
};
