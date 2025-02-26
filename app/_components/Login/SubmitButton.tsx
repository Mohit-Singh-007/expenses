"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

interface iSubmiButton {
  text: string;
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link"
    | null
    | undefined;
  width?: string;
  icon?: ReactNode;
}

export default function SubmitButton({
  text,
  variant,
  width,
  icon,
}: iSubmiButton) {
  const { pending } = useFormStatus();
  return (
    <Button variant={variant} className={width} disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          <span>Please wait...</span>
        </>
      ) : (
        <>
          {icon ? icon : ""}
          <span>{text}</span>
        </>
      )}
    </Button>
  );
}
