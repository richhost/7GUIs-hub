import { cn } from "@/lib/utils";
import React from "react";

export function Input({
  className,
  ...props
}: React.ComponentPropsWithRef<"input">) {
  return (
    <input
      {...props}
      className={cn(
        "h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
    />
  );
}
