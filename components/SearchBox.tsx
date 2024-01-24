"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { IoSearch } from "react-icons/io5";

export default function SearchBox() {
  const router = useRouter();
  const pathname = usePathname();

  const searchNotes = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = event.currentTarget.search;

    if (search.value !== "") {
      const query = search.value.split(" ").join("+");
      router.push(`${pathname}?search=${query}`);
    } else {
      const path = pathname.split("?")[0];
      router.push(path)
    }
    router.refresh()
  };

  return (
    <search>
      <form onSubmit={searchNotes}>
        <label
          htmlFor="search"
          className="px-4 py-2.5 flex items-center gap-px bg-input rounded-lg cursor-text placeholder:text-muted-foreground has-[:focus-visible]:outline-none has-[:focus]:bg-background has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary has-[button:focus-within]:bg-input has-[button:active]:ring-2 has-[button:active]:ring-primary">
          <button type="submit" className="active:text-title">
            <IoSearch size={20} />
          </button>
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search folders, labels or notes..."
            className="bg-transparent text-title ms-3 w-full focus:outline-none"
            autoComplete="off"
            autoCorrect="off"
          />
        </label>
      </form>
    </search>
  );
}
