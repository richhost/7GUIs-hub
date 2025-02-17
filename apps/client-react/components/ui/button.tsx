import { cn } from "@/lib/utils";
import React from "react";

export function Button({
  className,
  ...props
}: React.ComponentPropsWithRef<"button">) {
  return (
    <button
      {...props}
      className={cn(
        "h-10 flex items-center justify-center font-head cursor-pointer px-4 border-2 shadow-neo-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-neo-md active:shadow-neo-sm transition",
        className
      )}
    />
  );
}
