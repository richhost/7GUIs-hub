import {
  createMemo,
  mergeProps,
  splitProps,
  type Component,
  type ComponentProps,
} from "solid-js";
import { cn } from "~/lib/utils";

export const Progress: Component<
  Exclude<ComponentProps<"div">, "children"> & {
    min?: number;
    value?: number;
    max?: number;
  }
> = (props) => {
  const mergedProps = mergeProps({ min: 0, max: 100, value: 0 }, props);
  const [local, others] = splitProps(mergedProps, [
    "class",
    "min",
    "max",
    "value",
  ]);

  const percentage = createMemo(() => {
    return local.max === 0
      ? 0
      : (1 - (local.value - local.min) / (local.max - local.min)) * 100;
  });

  return (
    <div
      class={cn(
        "border-2 flex items-center justify-center overflow-hidden h-4 relative",
        local.class
      )}
      aria-valuemin={local.min}
      aria-valuemax={local.max}
      aria-valuenow={local.value}
      {...others}
    >
      <div
        class="absolute w-full h-full bg-amber-400 transition-all"
        style={{ transform: `translateX(-${percentage()}%)` }}
      ></div>
    </div>
  );
};
