import Link from "next/link";
import React from "react";

const navigation = [
  { name: "Counter", link: "/counter" },
  { name: "Temperature Converter", link: "/temperature-converter" },
  { name: "Flight Booker", link: "/flight-booker" },
  { name: "Timer", link: "/timer" },
  { name: "CRUD", link: "/crud" },
];

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="md:grid md:grid-cols-[240px_1fr_240px] h-dvh">
      <aside className="hidden md:flex flex-col">
        {navigation.map((item) => (
          <Link href={item.link} key={item.name}>
            {item.name}
          </Link>
        ))}
      </aside>
      <main className="prose mx-auto w-full py-10">{children}</main>
      <div className="hidden md:block"></div>
    </div>
  );
}
