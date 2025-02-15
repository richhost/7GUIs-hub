import { splitProps, type Component, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export const Select: Component<ComponentProps<"select">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <select
      class={cn(
        "h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full",
        local.class
      )}
      {...others}
    ></select>
  );
};
