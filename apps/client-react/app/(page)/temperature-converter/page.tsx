"use client";

import { Input } from "@/components/ui/input";
import { Preview } from "@/components/ui/preview";
import { useState } from "react";

export default function Page() {
  const [c, setC] = useState<number | string>("");
  const [f, setF] = useState<number | string>("");

  const handleChangeC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const c = e.target.value;
    setC(c);
    const f = c === "" ? "" : Number(c) * (9 / 5) + 32;
    setF(f);
  };

  const handleChangeF = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.value;
    setF(f);
    const c = f === "" ? "" : Number(f) * (5 / 9) + 32;
    setC(c);
  };

  return (
    <>
      <h1 className="font-head">Temperature Converter</h1>

      <Preview className="grid grid-cols-2 gap-5">
        <label className="flex flex-col">
          <span>Celsius:</span>
          <Input type="number" value={c} onChange={handleChangeC} />
        </label>
        <label className="flex flex-col">
          <span>Fahrenheit:</span>
          <Input type="number" value={f} onChange={handleChangeF} />
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
