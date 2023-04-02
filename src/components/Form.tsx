import React from "react";

type FormProps = {
  children?: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
};

export const Form = ({ children, onSubmit , className}: FormProps): React.ReactElement => {
  return <form onSubmit={onSubmit} className={className}>{children}</form>;
};
