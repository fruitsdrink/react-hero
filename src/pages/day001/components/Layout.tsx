import React from "react";

type Props = {
  children: React.ReactNode;
};
export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <section className="w-full">
      <div className="flex justify-center items-center h-screen">
        {children}
      </div>
      ;
    </section>
  );
};
