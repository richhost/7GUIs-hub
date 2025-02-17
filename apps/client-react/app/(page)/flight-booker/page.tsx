"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Preview } from "@/components/ui/preview";
import { Select } from "@/components/ui/select";
import { getDate } from "@/lib/utils";
import { useMemo, useRef, useState } from "react";

type Option = "one-way" | "return";

export default function Page() {
  const [selected, setSelected] = useState<Option>("one-way");
  const [startDate, setStartDate] = useState(getDate());
  const [returnDate, setReturnDate] = useState("");
  const startDateError = useMemo(() => !startDate, [startDate]);
  const returnDateError = useMemo(() => {
    if (selected === "return" && !returnDate) return true;
    if (selected === "return" && returnDate < startDate) return true;
    return false;
  }, [selected, startDate, returnDate]);

  const disabledBook = useMemo(
    () => startDateError || returnDateError,
    [startDateError, returnDateError]
  );

  const dialog = useRef<HTMLDialogElement | null>(null);

  function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    if (disabledBook) return;
    dialog.current?.showModal();
  }

  return (
    <>
      <h1 className="font-head">Flight Booker</h1>
      <Preview>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="flex flex-col">
            <span>Select Trip Type:</span>
            <Select
              value={selected}
              onChange={(e) => setSelected(e.target.value as Option)}
            >
              <option value="one-way">one-way flight</option>
              <option value="return">return flight</option>
            </Select>
          </label>

          <label className="flex flex-col">
            <span className={startDateError ? "text-red-600" : ""}>
              Flight Date:
            </span>
            <Input
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              type="date"
            />
          </label>

          <label className="flex flex-col">
            <span className={returnDateError ? "text-red-600" : ""}>
              Return Date:
            </span>
            <Input
              value={returnDate}
              type="date"
              onChange={(e) => setReturnDate(e.target.value)}
              disabled={selected !== "return"}
            />
          </label>

          <Button disabled={disabledBook} type="submit" className="mt-4">
            Book
          </Button>
        </form>

        <dialog
          ref={dialog}
          className="backdrop:backdrop-blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full"
        >
          <div className="border-2 shadow-neo-md p-5">
            <h2 className="font-head">Booked Flight</h2>
            <p>
              You have booked a {selected} flight on {startDate}
              {selected === "return" && ` & returning on ${returnDate}`}
            </p>
            <div className="flex justify-end mt-5">
              <Button onClick={() => dialog.current?.close()}>OK</Button>
            </div>
          </div>
        </dialog>
      </Preview>

      <p>
        Third task of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eugenkiss.github.io/7guis/tasks/#flight"
        >
          The 7 Tasks from 7GUIs
        </a>
        .
      </p>
    </>
  );
}
