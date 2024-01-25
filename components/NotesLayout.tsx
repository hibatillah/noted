import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getStorageLayout, swapStorageLayout } from "@/lib/layout";
import { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiMenu, HiViewGrid } from "react-icons/hi";

const CardNote = ({ data, isGrid }: { data: Note; isGrid: boolean }) => {
  const { id, title, content, updatedAt } = data;
  const dateFormatter = new Intl.DateTimeFormat("en", { month: "short" });

  const getDate = updatedAt.toLocaleDateString().split("/")[1];
  const updatedDate = `${dateFormatter.format(updatedAt)} ${getDate}`;
  const noteTitle = title.split(" ").join("-").toLowerCase();

  return (
    <Link href={`/notes/${noteTitle}?id=${id}`}>
      <Card
        className={cn({
          "h-[100px]": !isGrid,
          "h-40": isGrid,
        })}>
        <CardHeader
          className={cn("mb-2", {
            "flex justify-between items-start": !isGrid,
            "block space-y-1": isGrid,
          })}>
          <CardTitle className="line-clamp-1">
            {title || (
              <span className="text-neutral-400 dark:text-neutral-500">
                Untitled
              </span>
            )}
          </CardTitle>
          <div
            className={cn("flex-none text-xs text-foreground", {
              hidden: !title,
            })}>
            {updatedDate}
          </div>
        </CardHeader>
        <CardDescription
          className={cn({
            "line-clamp-4": isGrid,
            "line-clamp-2": !isGrid,
          })}>
          {content || (
            <span className="text-neutral-400 dark:text-neutral-500">
              Write something here...
            </span>
          )}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default function NotesLayout({
  title,
  notes,
  search,
  type = "notes",
}: {
  title: string;
  notes: Note[];
  search: string | null;
  type?: "notes" | "folders" | "labels";
}) {
  const [isLayoutGrid, setIsLayoutGrid] = React.useState(getStorageLayout());

  const changeLayout = () => {
    swapStorageLayout();
    setIsLayoutGrid(getStorageLayout());
  };

  const filteredNotes =
    search !== null
      ? notes?.filter((note) =>
          note.title.toLowerCase().includes(search.toLowerCase())
        )
      : notes;

  const linkCreate = {
    notes: "/notes/create",
    folders: "/notes/folders/create",
    labels: "/notes/labels/create",
  };

  return (
    <div className="space-y-2">
      <div className="mb-1 flex items-center justify-between text-title">
        <h2 className="w-4/5 line-clamp-1 capitalize">{title}</h2>
        <button
          onClick={changeLayout}
          className="p-1 rounded-md hover:bg-card cursor-pointer select-none disabled:hover:bg-transparent disabled:cursor-default"
          disabled={notes.length === 0}>
          {isLayoutGrid ? <HiViewGrid size={18} /> : <HiMenu size={18} />}
        </button>
      </div>
      <div
        className={cn("gap-3", {
          "grid grid-cols-2": isLayoutGrid,
          "flex flex-col": !isLayoutGrid,
        })}>
        {notes.length !== 0 ? (
          filteredNotes?.map((note) => (
            <CardNote key={note.id} data={note} isGrid={isLayoutGrid ?? true} />
          ))
        ) : (
          <div className="col-span-2 h-[50vh] flex flex-col justify-center items-center text-foreground">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              className="size-20 fill-neutral-700">
              <path d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z" />
              <path d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z" />
            </svg>
            <div className="text-lg mt-4">No {type.toLowerCase()} yet!</div>
            <Link
              className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out"
              href={linkCreate[type]}>
              <span className="translate-x-2 group-hover:-translate-x-0">
                Create one
              </span>
              <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
