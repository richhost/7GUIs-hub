import { createMemo, createSignal, Show } from "solid-js";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Preview } from "~/components/ui/preview";
import { Select } from "~/components/ui/select";
import { getDate } from "~/lib/utils";

type Option = "one-way" | "return";

export default function Page() {
  const [selected, setSelected] = createSignal<Option>("one-way");
  const [startDate, setStartDate] = createSignal(getDate());
  const [returnDate, setReturnDate] = createSignal("");
  let dialog!: HTMLDialogElement;

  const startDateError = createMemo(() => !startDate());
  const returnDateError = createMemo(() => {
    if (selected() === "return" && !returnDate()) return true;
    if (selected() === "return" && returnDate() < startDate()) return true;
    return false;
  });

  const disabledBook = createMemo(() => startDateError() || returnDateError());

  function handleSubmit(e: SubmitEvent) {
    e.preventDefault();
    if (disabledBook()) return;
    dialog.showModal();
  }

  return (
    <>
      <h1 class="font-head">Flight Booker</h1>
      <Preview>
        <form onSubmit={handleSubmit} class="flex flex-col gap-5">
          <label class="flex flex-col">
            <span>Select Trip type:</span>
            <Select
              value={selected()}
              onChange={(e) => {
                setSelected(e.target.value as Option);
              }}
            >
              <option value="one-way">one-way flight</option>
              <option value="return">return flight</option>
            </Select>
          </label>

          <label class="flex flex-col">
            <span>Flight Date:</span>
            <Input
              type="date"
              value={startDate()}
              onInput={(e) => setStartDate(e.target.value)}
            />
          </label>

          <label class="flex flex-col">
            <span>Return Date:</span>
            <Input
              type="date"
              value={returnDate()}
              onInput={(e) => setReturnDate(e.target.value)}
            />
          </label>

          <Button disabled={disabledBook()} type="submit" class="mt-4">
            Book
          </Button>
        </form>

        <dialog
          ref={dialog}
          class="backdrop:backdrop-blur-sm backdrop:bg-white/90 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-full"
        >
          <div class="border-2 shadow-neo-md p-5">
            <h2 class="font-head">Booked Flight</h2>
            <p>
              You have booked a {selected()} flight on {startDate()}
              <Show when={selected() === "return"}>
                {" "}
                & returning on {returnDate()}
              </Show>
            </p>
            <div class="flex justify-end mt-5">
              <Button onclick={() => dialog.close()}>OK</Button>
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
