import { createSignal } from "solid-js";
import { Button } from "~/components/ui/button";
import { Preview } from "~/components/ui/preview";

export default function Page() {
  const [count, setCount] = createSignal(0);

  return (
    <>
      <h1 class="font-head">Counter</h1>
      <Preview>
        <p class="text-5xl mb-4">{count()}</p>

        <Button onClick={() => setCount(count() + 1)}>Increment</Button>
      </Preview>

      <p>
        First task of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eugenkiss.github.io/7guis/tasks#counter"
        >
          The 7 Tasks from 7GUIs
        </a>
        .
      </p>
    </>
  );
}
