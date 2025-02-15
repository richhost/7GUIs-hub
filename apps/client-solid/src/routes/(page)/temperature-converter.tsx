import { createSignal, JSX } from "solid-js";
import { Input } from "~/components/ui/input";
import { Preview } from "~/components/ui/preview";

type InputEventFn = JSX.EventHandler<HTMLInputElement, InputEvent>;

export default function Page() {
  const [c, setC] = createSignal<number | string>("");
  const [f, setF] = createSignal<number | string>("");

  const handleChangeC: InputEventFn = (e) => {
    const c = e.currentTarget.value;
    setC(c);
    const f = c === "" ? "" : Number(c) * (9 / 5) + 32;
    setF(f);
  };

  const handleChangeF: InputEventFn = (e) => {
    const f = e.currentTarget.value;
    setF(f);
    const c = f === "" ? "" : Number(f) * (5 / 9) + 32;
    setC(c);
  };

  return (
    <>
      <h1 class="font-head">Temperature Converter</h1>

      <Preview class="grid grid-cols-2 gap-5">
        <label class="flex flex-col">
          <span>Celsius:</span>
          <Input type="number" value={c()} onInput={handleChangeC} />
        </label>

        <label class="flex flex-col">
          <span>Fahrenheit:</span>
          <Input type="number" value={f()} onInput={handleChangeF} />
        </label>
      </Preview>

      <p>
        Second task of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eugenkiss.github.io/7guis/tasks/#temp"
        >
          The 7 Tasks from 7GUIs
        </a>
        .
      </p>
    </>
  );
}
