import { cn } from "@/lib/utils";
import React from "react";

export function Preview({
  className,
  ...props
}: React.ComponentPropsWithRef<"div">) {
  return (
    <div
      className={cn(
        "not-prose bg-white shadow-neo-xl mx-auto p-5 border",
        className
      )}
      {...props}
    />
  );
}
