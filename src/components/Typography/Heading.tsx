import React from "react";
import { twMerge } from "tailwind-merge";

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  level: 1 | 2 | 3 | 4;
};

export const Heading = ({
  children,
  level,
  className,
}: HeadingProps): React.ReactElement => {
  const sharedClassNames = "font-bold mt-8 mb-2";

  return (
    <>
      {level === 1 && (
        <h1 className={twMerge(sharedClassNames, "text-5xl", className)}>
          {children}
        </h1>
      )}
      {level === 2 && (
        <h2 className={twMerge(sharedClassNames, "text-4xl", className)}>
          {children}
        </h2>
      )}
      {level === 3 && (
        <h3 className={twMerge(sharedClassNames, "text-3xl", className)}>
          {children}
        </h3>
      )}
      {level === 4 && (
        <h4 className={twMerge(sharedClassNames, "text-2xl", className)}>
          {children}
        </h4>
      )}
    </>
  );
};
