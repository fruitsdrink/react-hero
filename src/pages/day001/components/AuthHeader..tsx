import React from "react";

type Props = {
  label: string;
  title: string;
};
export const AuthHeader: React.FC<Props> = ({ label, title }) => {
  return (
    <div className="flex flex-col gap-y-4 justify-center items-center w-full">
      <h1 className="text-3xl font-semibold">{title}</h1>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};
