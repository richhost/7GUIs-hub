import { createSignal, JSX } from "solid-js";
import { Button } from "~/components/ui/button";
import { Preview } from "~/components/ui/preview";
import { Progress } from "~/components/ui/progress";
import { Slider } from "~/components/ui/slider";

export default function Page() {
  let interval: ReturnType<typeof setInterval>;
  const [elapsed, setElapsed] = createSignal(0);
  const [duration, setDuration] = createSignal(0);

  function start() {
    interval = setInterval(() => {
      let newElapsed = elapsed() + 0.1;
      if (newElapsed >= duration()) {
        newElapsed = duration();
        clearInterval(interval);
      }
      setElapsed(newElapsed);
    }, 100);
  }

  function reset() {
    setElapsed(0);
    clearInterval(interval);
    start();
  }

  const handleDurationChange: JSX.EventHandler<HTMLInputElement, InputEvent> = (
    e
  ) => {
    const value = e.currentTarget.valueAsNumber;
    setDuration(value);
    clearInterval(interval);
    start();
  };

  return (
    <>
      <h1>Timer</h1>
      <Preview class="space-y-5">
        <p class="text-2xl text-center font-head">
          {elapsed().toFixed(1)} / {duration().toFixed(1)}
        </p>

        <label class="flex items-center gap-2">
          <span>Elapsed Time:</span>
          <Progress class="grow" value={elapsed()} max={duration()} />
        </label>
        <label class="flex items-center gap-2">
          <span>Duration:</span>
          <Slider
            class="grow"
            value={duration()}
            min={0}
            max={20}
            oninput={handleDurationChange}
          />
        </label>

        <Button class="w-full" onclick={reset}>
          Reset
        </Button>
      </Preview>

      <p>
        Fourth task of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eugenkiss.github.io/7guis/tasks/#timer"
        >
          The 7 Tasks from 7GUIs
        </a>
        .
      </p>
    </>
  );
}
