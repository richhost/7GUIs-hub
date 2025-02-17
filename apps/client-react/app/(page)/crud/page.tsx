"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Preview } from "@/components/ui/preview";
import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type Person = { name: string; surname: string };

export default function Page() {
  const [selected, setSelected] = useState<number>();
  const [prefix, setPrefix] = useState("");
  const [person, setPerson] = useState<Person>({ name: "", surname: "" });
  const [people, setPeople] = useState<Person[]>([]);

  const filteredPeople = useMemo(() => {
    return prefix
      ? people.filter((p) =>
          p.surname.toLowerCase().startsWith(prefix.toLowerCase())
        )
      : people;
  }, [prefix, people]);

  function createPerson() {
    if (!person.name || !person.surname) return;
    setPeople([...people, { ...person }]);
    clearFiled();
    clearSelected();
  }

  function updatePerson() {
    if (selected === undefined || !person.name || !person.surname) return;
    const newPeople = people.toSpliced(selected, 1, { ...person });
    setPeople(newPeople);
    clearSelected();
    clearFiled();
  }

  function deletePerson() {
    if (selected === undefined) return;
    const newPeople = people.toSpliced(selected, 1);
    setPeople(newPeople);
    clearSelected();
    clearFiled();
  }

  function clearFiled() {
    setPerson({ name: "", surname: "" });
    clearSelected();
  }

  function clearSelected() {
    setSelected(undefined);
  }

  return (
    <>
      <h1 className="font-head">CRUD</h1>

      <Preview>
        <label>
          <span>Filter prefix:</span>
          <Input
            value={prefix}
            onChange={(e) => setPrefix(e.target.value)}
            className="grow w-full"
          />
        </label>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            createPerson();
          }}
          className="grid grid-cols-1 md:grid-cols-2 mt-5 gap-5"
        >
          <div className="border-2 min-h-40">
            {filteredPeople.map((item, index) => (
              <button
                type="button"
                key={index}
                onClick={() => {
                  setSelected(index);
                  setPerson({ ...item });
                }}
                className={cn("px-2 cursor-default w-full text-left", {
                  "bg-green-500 text-white": selected === index,
                })}
              >
                {item.surname}, {item.name}
              </button>
            ))}
          </div>
          <div>
            <label className="flex flex-col mb-5">
              <span>Name: </span>
              <Input
                required
                value={person.name}
                onChange={(e) => setPerson({ ...person, name: e.target.value })}
              />
            </label>
            <label className="flex flex-col">
              <span>Surname: </span>
              <Input
                required
                value={person.surname}
                onChange={(e) =>
                  setPerson({ ...person, surname: e.target.value })
                }
              />
            </label>
          </div>

          <div className="flex flex-wrap gap-5 md:col-span-2">
            <Button type="submit" className="bg-green-500 text-white">
              Create
            </Button>
            <Button
              type="button"
              onClick={updatePerson}
              className="bg-amber-500 text-white"
            >
              Update
            </Button>
            <Button
              type="button"
              onClick={deletePerson}
              className="bg-red-500 text-white"
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
