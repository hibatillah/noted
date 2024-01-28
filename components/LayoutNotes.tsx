"use client";

import CardNote from "@/components/CardNote";
import DialogCreate from "@/components/DialogCreate";
import DialogDelete from "@/components/DialogDelete";
import DialogEdit from "@/components/DialogEdit";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { getStorageLayout, swapStorageLayout } from "@/lib/layout";
import { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiMenu, HiViewGrid } from "react-icons/hi";
import { TbNotesOff } from "react-icons/tb";

export default function LayoutNotes({
  title,
  notes,
  type = "notes",
  options = false,
}: {
  title: string;
  notes: Note[];
  type?: "notes" | "folders" | "labels";
  options?: boolean;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

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

  return (
    <div className="space-y-2">
      <div className="mb-1 flex items-center justify-between text-title">
        <h2 className="w-2/3 line-clamp-1 capitalize">{title}</h2>

        <div className="flex items-center">
          {options && (
            <>
              <DialogDelete type={type} />
              <DialogEdit type={type} />
            </>
          )}
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button size="icon" variant="ghost" onClick={changeLayout}>
                  {isLayoutGrid ? (
                    <HiViewGrid size={20} />
                  ) : (
                    <HiMenu size={20} />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent side="bottom">
                <p>Change Layout</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>

      <div
        className={cn("gap-3", {
          "grid grid-cols-2": isLayoutGrid,
          "flex flex-col": !isLayoutGrid,
        })}>
        {notes?.length !== 0 ? (
          filteredNotes?.map((note) => (
            <CardNote key={note.id} data={note} isGrid={isLayoutGrid ?? true} />
          ))
        ) : (
          <div className="col-span-2 h-[70vh] flex flex-col justify-center items-center text-foreground">
            <TbNotesOff
              size={100}
              className="text-neutral-300 dark:text-neutral-700"
            />
            <div className="text-lg mt-4">No notes yet!</div>
            {type !== "notes" && !options ? (
              <DialogCreate
                type={type === "folders" ? "folder" : "label"}
                trigger="link"
              />
            ) : (
              <Link
                href="/notes/create"
                className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out">
                <span className="translate-x-2 group-hover:-translate-x-0">
                  Create one
                </span>
                <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
