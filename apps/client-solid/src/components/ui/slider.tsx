import { splitProps, type Component, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export const Slider: Component<Exclude<ComponentProps<"input">, "type">> = (
  props
) => {
  const [local, others] = splitProps(props, ["class"]);

  return <input {...others} type="range" class={cn("slider", local.class)} />;
};
