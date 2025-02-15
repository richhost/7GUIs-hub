import { splitProps, type Component, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export const Button: Component<ComponentProps<"button">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <button
      class={cn(
        "h-10 flex items-center justify-center font-head cursor-pointer px-4 border-2 shadow-neo-md disabled:cursor-not-allowed disabled:opacity-50 disabled:shadow-neo-md active:shadow-neo-sm transition",
        local.class
      )}
      {...others}
    ></button>
  );
};
