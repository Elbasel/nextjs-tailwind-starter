import React from "react";
import { twMerge } from "tailwind-merge";

type TerminalOutputProps = {
  className?: string;
  children?: React.ReactNode;
};

export const TerminalOutput = ({
  className,
  children,
}: TerminalOutputProps): React.ReactElement => {
  const baseClassName =
    "bg-gray-800 block rounded-lg py-2 leading-loose text-gray-300 font-mono text-base max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800 scrollbar-thumb-rounded-lg";
  return (
    <output className={twMerge(baseClassName, className)}>
      {children || "No output"}
    </output>
  );
};
