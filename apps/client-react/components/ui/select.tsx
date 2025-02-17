import { cn } from "@/lib/utils";
import React from "react";

export function Select({
  className,
  ...props
}: React.ComponentPropsWithRef<"select">) {
  return (
    <select
      className={cn(
        "h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full",
        className
      )}
      {...props}
    />
  );
}
