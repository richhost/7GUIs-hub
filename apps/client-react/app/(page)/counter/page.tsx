"use client";

import { Button } from "@/components/ui/button";
import { Preview } from "@/components/ui/preview";
import { useState } from "react";

export default function Page() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="font-head">Counter</h1>

      <Preview>
        <p className="text-5xl mb-4">{count}</p>
        <Button onClick={() => setCount((prev) => prev + 1)}>Increment</Button>
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
