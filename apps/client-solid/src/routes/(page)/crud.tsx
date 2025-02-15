import { createEffect, createMemo, createSignal, For } from "solid-js";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Preview } from "~/components/ui/preview";
import { cn } from "~/lib/utils";

type Person = { name: string; surname: string };

export default function Page() {
  const [people, setPeople] = createSignal<Person[]>([]);
  const [selected, setSelected] = createSignal<number>();
  const [person, setPerson] = createSignal<Person>({ name: "", surname: "" });
  const [prefix, setPrefix] = createSignal("");

  const filteredPeople = createMemo(() => {
    return prefix()
      ? people().filter((p) =>
          p.surname.toLowerCase().startsWith(prefix().toLowerCase()),
        )
      : people();
  });

  function handleSelected(index: number) {
    setSelected(index);
    const target = people()[index];
    setPerson({ ...target });
  }

  function createPerson() {
    if (!person().name || !person().surname) return;
    setPeople([...people(), { ...person() }]);
    clearField();
  }

  function updatePerson() {
    const index = selected();
    if (index === undefined || !person().name || !person().surname) return;
    const newPeople = people().toSpliced(index, 1, { ...person() });
    clearField();
    setSelected(undefined);
    setPeople(newPeople);
  }

  function deletePerson() {
    const index = selected();
    if (index === undefined) return;
    const newPeople = people().filter((_, idx) => idx !== index);
    setPeople(newPeople);
  }

  function clearField() {
    setPerson({ name: "", surname: "" });
  }

  return (
    <>
      <h1 class="font-head">CRUD</h1>

      <Preview>
        <label>
          <span>Filter prefix:</span>
          <Input
            value={prefix()}
            oninput={(e) => setPrefix(e.currentTarget.value)}
            class="grow w-full"
          />
        </label>
        <form
          onsubmit={(e) => {
            e.preventDefault();
            createPerson();
          }}
          class="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"
        >
          <div class="border-2 min-h-40">
            <For each={filteredPeople()}>
              {(item, index) => (
                <button
                  class={cn("px-2 cursor-default w-full text-left", {
                    "bg-green-500 text-white": selected() === index(),
                  })}
                  type="button"
                  onClick={() => handleSelected(index())}
                >
                  {item.surname}, {item.name}
                </button>
              )}
            </For>
          </div>
          <div>
            <label class="flex flex-col mb-5">
              <span>Name: </span>
              <Input
                required
                value={person().name}
                onInput={(e) => {
                  setPerson({ ...person(), name: e.target.value });
                }}
              />
            </label>
            <label class="flex flex-col">
              <span>Surname: </span>
              <Input
                required
                value={person().surname}
                onInput={(e) => {
                  setPerson({ ...person(), surname: e.target.value });
                }}
              />
            </label>
          </div>

          <div class="flex flex-wrap gap-5 md:col-span-2">
            <Button type="submit" class="bg-green-500 text-white">
              Create
            </Button>
            <Button
              type="button"
              onClick={updatePerson}
              class="bg-amber-500 text-white"
            >
              Update
            </Button>
            <Button
              type="button"
              onClick={deletePerson}
              class="bg-red-500 text-white"
            >
              Delete
            </Button>
          </div>
        </form>
      </Preview>

      <p>
        Fifth task of{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://eugenkiss.github.io/7guis/tasks/#crud"
        >
          The 7 Tasks from 7GUIs
        </a>
        .
      </p>
    </>
  );
}
