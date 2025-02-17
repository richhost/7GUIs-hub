"use client";

import { Button } from "@/components/ui/button";
import { Preview } from "@/components/ui/preview";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { useCallback, useEffect, useRef, useState } from "react";

export default function Page() {
  const [duration, setDuration] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const interval = useRef<ReturnType<typeof setInterval> | null>(null);

  function sliderChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDuration(+e.target.value);
    clear();
    start();
  }

  function start() {
    interval.current = setInterval(() => {
      setElapsed((prev) => {
        const newElapsed = prev + 0.1;
        if (newElapsed >= duration) {
          clearInterval(interval.current!);
          return duration;
        }
        return newElapsed;
      });
    }, 100);
  }

  function reset() {
    setElapsed(0);
    clear();
    start();
  }

  const clear = useCallback(() => {
    if (interval.current) {
      clearInterval(interval.current);
    }
  }, []);

  useEffect(() => {
    return () => clear();
  }, [clear]);

  return (
    <>
      <h1 className="font-head">Timer</h1>

      <Preview className="flex flex-col gap-5">
        <div className="font-head text-center text-2xl">
          {elapsed.toFixed(1)} / {duration.toFixed(1)}
        </div>
        <label className="flex items-center gap-2">
          <span>Elapsed Time:</span>
          <Progress className="grow" value={elapsed} max={duration} />
        </label>

        <label className="flex items-center gap-2">
          <span>Duration:</span>
          <Slider
            className="w-full"
            value={duration}
            onChange={sliderChange}
            step={0.1}
            min={0}
            max={20}
          />
        </label>

        <Button onClick={reset}>Reset</Button>
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
