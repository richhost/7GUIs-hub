import { splitProps, type Component, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

interface InputProps extends ComponentProps<"input"> {}

export const Input: Component<InputProps> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <input
      {...others}
      class={cn(
        "h-10 border-2 outline-none focus-within:ring-2 focus-within:ring-offset-2 px-2 min-w-0 max-w-full disabled:cursor-not-allowed disabled:opacity-50",
        local.class
      )}
    />
  );
};
