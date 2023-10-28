"use client";

import { Card, Empty } from "@components";
import { Note } from "@lib/types";
import clsx from "clsx";
import React from "react";
import { HiMenu, HiViewGrid } from "react-icons/hi";

export default function ViewLayout({
  title,
  notes,
}: {
  title: string;
  notes: Note[];
}) {
  const [layout, setLayout] = React.useState("row");
  const changeLayout = () => {
    setLayout((prev) => (prev === "row" ? "grid" : "row"));
  };

  return (
    <section className="space-y-2">
      <div className="flex items-center justify-between">
        <h2>{title}</h2>
        <div
          className="p-1 text-title cursor-pointer select-none"
          onClick={changeLayout}>
          {layout === "row" ? <HiMenu size={20} /> : <HiViewGrid size={20} />}
        </div>
      </div>
      <ul className="grid grid-cols-2 gap-3">
        {notes.length !== 0 ? (
          notes?.map((note, index) => (
            <li key={index} className={clsx({
              "col-span-2": layout === "row",
              "col-span-1": layout === "grid",
            })}>
              <Card data={note} />
            </li>
          ))
        ) : (
          <Empty title="notes" />
        )}
      </ul>
    </section>
  );
}
