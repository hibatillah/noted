import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getSessionLayout, swapSessionLayout } from "@/lib/layout";
import { Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { HiMenu, HiViewGrid } from "react-icons/hi";

const CardNote = ({ data, layout }: { data: Note; layout: boolean }) => {
  const { id, title, content, updatedAt } = data;
  const dateFormatter = new Intl.DateTimeFormat("en", { month: "short" });

  const getDate = updatedAt.toISOString().slice(5, 7);
  const updatedDate = `${dateFormatter.format(updatedAt)} ${getDate}`;
  const noteName = title.split(" ").join("-").toLowerCase();

  return (
    <Link href={`/notes/${noteName}?id=${id}`} key={id}>
      <Card
        className={cn({
          "h-[100px]": !layout,
          "h-40": layout,
        })}>
        <CardHeader
          className={cn("mb-2", {
            "flex justify-between items-start": !layout,
            "block space-y-1": layout,
          })}>
          <CardTitle className="line-clamp-1">{title}</CardTitle>
          <div className="flex-none text-xs text-foreground">{updatedDate}</div>
        </CardHeader>
        <CardDescription
          className={cn({
            "line-clamp-4": layout,
            "line-clamp-2": !layout,
          })}>
          {content}
        </CardDescription>
      </Card>
    </Link>
  );
};

export default function NotesLayout({
  title,
  notes,
}: {
  title: string;
  notes: Note[];
}) {
  const [isLayoutGrid, setIsLayoutGrid] = React.useState(getSessionLayout());

  const changeLayout = () => {
    swapSessionLayout();
    setIsLayoutGrid(getSessionLayout());
  };

  return (
    <div className="space-y-2">
      <div className="mb-1 flex items-center justify-between text-title">
        <h2 className="w-4/5 line-clamp-1 capitalize">{title}</h2>
        <div
          onClick={changeLayout}
          className="p-1 rounded-md hover:bg-card cursor-pointer select-none">
          {isLayoutGrid ? <HiViewGrid size={18} /> : <HiMenu size={18} />}
        </div>
      </div>
      <div
        className={cn("gap-3", {
          "grid grid-cols-2": isLayoutGrid,
          "flex flex-col": !isLayoutGrid,
        })}>
        {notes?.map((note) => (
          <CardNote key={note.id} data={note} layout={isLayoutGrid} />
        ))}
      </div>
    </div>
  );
}
