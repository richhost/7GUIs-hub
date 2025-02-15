import { RouteSectionProps } from "@solidjs/router";
import { Index } from "solid-js";

const navigation = [
  { name: "Counter", link: "/counter" },
  { name: "Temperature Converter", link: "/temperature-converter" },
  { name: "Flight Booker", link: "/flight-booker" },
  { name: "Timer", link: "/timer" },
  { name: "CRUD", link: "/crud" },
];

export default function PageLayout(props: RouteSectionProps) {
  return (
    <div class="md:grid md:grid-cols-[240px_1fr_240px] h-dvh">
      <aside class="hidden md:flex flex-col">
        <Index each={navigation}>
          {(item) => <a href={item().link}>{item().name}</a>}
        </Index>
      </aside>
      <main class="prose mx-auto w-full py-10">{props.children}</main>
      <div class="hidden md:block"></div>
    </div>
  );
}
