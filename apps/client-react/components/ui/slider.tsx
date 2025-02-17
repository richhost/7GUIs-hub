import { cn } from "@/lib/utils";
import React from "react";

export function Slider({
  className,
  ...props
}: Exclude<React.ComponentPropsWithRef<"input">, "type">) {
  return <input {...props} type="range" className={cn("slider", className)} />;
}
