import { splitProps, type Component, type ComponentProps } from "solid-js";
import { cn } from "~/lib/utils";

export const Preview: Component<ComponentProps<"div">> = (props) => {
  const [local, others] = splitProps(props, ["class"]);

  return (
    <div
      class={cn("not-prose p-5 border-2 shadow-neo-xl bg-white", local.class)}
      {...others}
    ></div>
  );
};
