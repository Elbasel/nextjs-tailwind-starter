import React from "react";

type MainProps = {
  children?: React.ReactNode;
};

export const Main = ({ children }: MainProps): React.ReactElement => {
  return (
    <main className="container min-h-screen px-8 py-4 mx-auto text-white bg-slate-950 dark">
      {children}
    </main>
  );
};
