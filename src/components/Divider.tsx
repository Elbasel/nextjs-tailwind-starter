import React from "react";
import { twMerge } from "tailwind-merge";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps): React.ReactElement => {
  return (
    <hr className={twMerge("mb-4 h-0.5 border-t border-white/80", className)} />
  );
};
