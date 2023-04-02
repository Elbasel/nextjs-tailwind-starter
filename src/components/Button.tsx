import React from "react";
import Ripples from "react-ripples";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./Spinner";

type ButtonProps = {
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  withRipple?: boolean;
};

const baseClassName =
  "flex items-center w-full px-4 py-2 my-2 text-xl font-medium text-white transition-all border border-transparent rounded-md max-w-fit bg-slate-800 hover:bg-slate-900 focus:outline-none focus:border-blue-200 disabled:bg-gray-800 disabled:text-gray-400 disabled:border-gray-600  disabled:hover:cursor-not-allowed";

export const Button = ({
  onClick,
  className,
  children,
  disabled,
  withRipple,
}: ButtonProps): React.ReactElement => {
  const ButtonContainer = withRipple ? React.Fragment : Ripples;

  return (
    <ButtonContainer>
      <button
        type="button"
        className={twMerge(baseClassName, className)}
        onClick={onClick}
        disabled={disabled}
      >
        <>
          {disabled && <Spinner />}
          {children}
        </>
      </button>
    </ButtonContainer>
  );
};
