import {
  Card,
  CardContent,
  CardFooter,
  CardHeader
} from "@/components/ui/card";
import React from "react";
import { AuthHeader } from "./AuthHeader.";
import { BackButton } from "./BackButton";

type Props = {
  label: string;
  title: string;
  backButtonHref: string;
  backButtonLabel: string;
  children: React.ReactNode;
};
export const CardWrapper: React.FC<Props> = ({
  label,
  title,
  backButtonHref,
  backButtonLabel,
  children
}) => {
  return (
    <Card className="shadow-md xl:w-1/4 md:w-1/2">
      <CardHeader>
        <AuthHeader label={label} title={title} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
