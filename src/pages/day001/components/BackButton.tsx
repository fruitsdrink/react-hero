import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";

type Props = {
  label: string;
  href: string;
};
export const BackButton: React.FC<Props> = ({ label, href }) => {
  return (
    <Button variant={"link"} className="w-full font-normal" size={"sm"} asChild>
      <Link to={href}>{label}</Link>
    </Button>
  );
};
