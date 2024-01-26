import DialogCreate from "@/components/DialogCreate";
import DialogDelete from "@/components/DialogDelete";
import DialogEdit from "@/components/DialogEdit";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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
import React from "react";
import { FiPlus } from "react-icons/fi";
import { HiMenu, HiViewGrid } from "react-icons/hi";
import { TbNotesOff } from "react-icons/tb";

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
  options = false,
}: {
  title: string;
  notes: Note[];
  search: string | null;
  type?: "notes" | "folders" | "labels";
  options?: boolean;
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
        {notes.length !== 0 ? (
          filteredNotes?.map((note) => (
            <CardNote key={note.id} data={note} isGrid={isLayoutGrid ?? true} />
          ))
        ) : (
          <div className="col-span-2 h-[50vh] flex flex-col justify-center items-center text-foreground">
            <TbNotesOff size={100} className="text-neutral-700" />
            <div className="text-lg mt-4">No {type.toLowerCase()} yet!</div>
            {type !== "notes" ? (
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
