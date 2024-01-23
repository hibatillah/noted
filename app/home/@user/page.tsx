"use client"

import CardMenu from "@/components/CardMenu";
import Header from "@/components/Header";
import { Menu } from "@/lib/types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { BsArchive } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

const userId = "jfa24akfa0khn4";

const mainMenu: Menu[] = [
  {
    userId: userId,
    title: "All Notes",
    href: "/notes",
    amount: 0,
    color: "text-primary",
    icon: <HiOutlineDocumentDuplicate size={20} />,
  },
  {
    userId: userId,
    title: "Stared",
    href: "/notes/starred",
    amount: 0,
    color: "text-status-yellow",
    icon: <FaRegStar size={20} />,
  },
  {
    userId: userId,
    title: "Archive",
    href: "/notes/archive",
    amount: 0,
    color: "text-status-green",
    icon: <BsArchive size={20} />,
  },
  {
    userId: userId,
    title: "Trash",
    href: "/notes/trash",
    amount: 0,
    color: "text-status-red",
    icon: <LuTrash2 size={20} />,
  },
];

const folders: Menu[] = [
  {
    userId: userId,
    title: "Study",
    href: "study",
    amount: 0,
    icon: "🏫",
  },
  {
    userId: userId,
    title: "Personal",
    href: 'personal',
    amount: 0,
  },
];

const labels: Menu[] = [
  {
    userId: userId,
    title: "Important",
    href: "important",
    amount: 0,
    color: "text-status-red",
  },
  {
    userId: userId,
    title: "Personal",
    href: "personal",
    amount: 0,
  },
];

export default function Page() {
  return (
    <>
      <Header />
      <div className="h-full py-5 space-y-5">
        <label
          htmlFor="search"
          className="px-4 py-2.5 flex items-center gap-px bg-input rounded-lg cursor-text placeholder:text-muted-foreground has-[:focus-visible]:outline-none has-[:focus]:bg-background has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-primary">
          <IoSearch size={20} />
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Search notes..."
            className="bg-transparent text-title ms-3 w-full focus:outline-none"
          />
        </label>
        <CardMenu menu={mainMenu} />
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Folders</h3>
            <Link href="/folders/create" className="p-1.5">
              <FiPlus />
            </Link>
          </div>
          <CardMenu type="folder" menu={folders} />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Labels</h3>
            <Link href="/labels/create" className="p-1.5">
              <FiPlus />
            </Link>
          </div>
          <CardMenu type="label" menu={labels} />
        </div>
      </div>
    </>
  );
}
