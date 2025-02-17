import { cn } from "@/lib/utils";
import React, { useMemo } from "react";

type Props = {
  min?: number;
  max?: number;
  value?: number;
} & React.ComponentPropsWithRef<"div">;

export function Progress({
  min = 0,
  max = 100,
  value = 0,
  className,
  ...props
}: Props) {
  const percentage = useMemo(
    () => (max === 0 ? 0 : (1 - (value - min) / (max - min)) * 100),
    [min, max, value]
  );

  return (
    <div
      role="progressbar"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(
        "border-2 flex items-center justify-center overflow-hidden h-4 relative",
        className
      )}
      {...props}
    >
      <div
        className="absolute w-full h-full bg-amber-400 transition-all"
        style={{ transform: `translateX(-${percentage}%)` }}
      ></div>
    </div>
  );
}
