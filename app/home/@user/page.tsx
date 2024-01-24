"use client";

import CardMenu from "@/components/CardMenu";
import Header from "@/components/Header";
import { Menu } from "@/lib/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BsArchive } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

const mainMenu: Menu[] = [
  {
    title: "All Notes",
    href: "/notes",
    amount: 0,
    color: "text-primary",
    icon: <HiOutlineDocumentDuplicate size={20} />,
  },
  {
    title: "Stared",
    href: "/notes/starred",
    amount: 0,
    color: "text-status-yellow",
    icon: <FaRegStar size={20} />,
  },
  {
    title: "Archive",
    href: "/notes/archive",
    amount: 0,
    color: "text-status-green",
    icon: <BsArchive size={20} />,
  },
  {
    title: "Trash",
    href: "/notes/trash",
    amount: 0,
    color: "text-status-red",
    icon: <LuTrash2 size={20} />,
  },
];

const folders: Menu[] = [
  {
    title: "Study",
    href: "study",
    amount: 0,
    icon: "🏫",
  },
  {
    title: "Personal",
    href: "personal",
    amount: 0,
  },
];

const labels: Menu[] = [
  {
    title: "Important",
    href: "important",
    amount: 0,
    color: "text-status-red",
  },
  {
    title: "Personal",
    href: "personal",
    amount: 0,
  },
];

export default function Page() {
  const router = useRouter();

  const searchNotes = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const search = event.currentTarget.search;

    if (search.value !== "") {
      const query = search.value.split(" ").join("+");
      router.push(`/notes?search=${query}`);
    }
  };

  return (
    <>
      <Header />
      <div className="h-full py-5 space-y-5">
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
        <CardMenu menu={mainMenu} />
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Folders</h3>
            <Link href="/folders/create" className="p-1.5">
              <FiPlus />
            </Link>
          </div>
          <CardMenu menu={folders} type="folder" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Labels</h3>
            <Link href="/labels/create" className="p-1.5">
              <FiPlus />
            </Link>
          </div>
          <CardMenu menu={labels} type="label" />
        </div>
      </div>
    </>
  );
}
