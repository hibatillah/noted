"use client";

import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import LayoutNotes from "@/components/LayoutNotes";
import SearchBox from "@/components/SearchBox";
import { Button } from "@/components/ui/button";
import { Menu, Note } from "@/lib/types";
import { cn } from "@/lib/utils";
import React from "react";

const folders: Menu[] = [
  {
    id: "1",
    title: "Study",
    amount: 0,
    icon: "🏫",
  },
  {
    id: "2",
    title: "Personal",
    amount: 0,
  },
  {
    id: "3",
    title: "Personal",
    amount: 0,
  },
  {
    id: "4",
    title: "Hobby",
    amount: 0,
    icon: "💻",
  },
  {
    id: "5",
    title: "Personal 4",
    amount: 0,
  },
];

const labels: Menu[] = [
  {
    id: "1",
    title: "Important Meeting Asuransi",
    amount: 0,
    color: "text-status-red",
  },
  {
    id: "2",
    title: "Personal",
    amount: 0,
  },
];

const notes: Note[] = [
  {
    id: "1",
    title: "Buku 1",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quod asperiores voluptas tempora placeat delectus non dolorem quaerat nemo autem nobis voluptatem, cumque aut repellat cum quae, eos laborum fugit.",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Habib",
    authorId: "1",
    starred: false,
    archived: false,
    trash: false,
    folders: ["Study", "Personal"],
    labels: ["Important", "Work"],
  },
  {
    id: "2",
    title: "Buku 2",
    content: "halfajflakf",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: "Habib",
    authorId: "1",
    starred: false,
    archived: false,
    trash: false,
    folders: ["Study", "Personal"],
    labels: ["Important", "Work"],
  },
  {
    id: "3",
    title: "halo",
    content: "halfajflakf",
    createdAt: new Date(),
    updatedAt: new Date(2024, 4, 5),
    author: "Habib",
    authorId: "1",
    starred: false,
    archived: false,
    trash: false,
    folders: ["Study", "Personal"],
    labels: ["Important", "Work"],
  },
];

export default function Page() {
  type IsActive = {
    folders: boolean;
    labels: boolean;
    notes: boolean;
    [key: string]: boolean; // index signature
  };

  const [warnLabel, setWarnLabel] = React.useState(false);
  const [isActive, setIsActive] = React.useState<IsActive>({
    folders: true,
    labels: true,
    notes: true,
  });

  const handleActive = (type: "folders" | "labels" | "notes") => {
    const excludeClicked = Object.keys(isActive).filter((key) => key !== type);

    if (isActive[excludeClicked[0]] || isActive[excludeClicked[1]]) {
      setIsActive((prev) => ({ ...prev, [type]: !prev[type] }));
    } else {
      setWarnLabel(true);
      setTimeout(() => {
        setWarnLabel(false);
      }, 3000);
    }
  };

  return (
    <>
      <Header back="/home" />
      <div className="h-full py-5 space-y-6">
        <div className="space-y-3">
          <SearchBox focus />
          <div className="grid grid-cols-3 gap-3">
            <Button
              variant={isActive.folders ? "secondary" : "outline"}
              onClick={() => handleActive("folders")}
              className="rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 active:text-title">
              Folders
            </Button>
            <Button
              variant={isActive.labels ? "secondary" : "outline"}
              onClick={() => handleActive("labels")}
              className="rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 active:text-title">
              Labels
            </Button>
            <Button
              variant={isActive.notes ? "secondary" : "outline"}
              onClick={() => handleActive("notes")}
              className="rounded-full hover:bg-neutral-200 dark:hover:bg-neutral-700 active:text-title">
              Notes
            </Button>
          </div>
          <p
            className={cn("text-xs text-destructive dark:text-status-red", {
              hidden: !warnLabel,
            })}>
            At least one menu active
          </p>
        </div>
        <div className="block space-y-5">
          <div className="space-y-5">
            {isActive.folders && (
              <LayoutFolders folders={folders} type="folders" hideIcon />
            )}
            {isActive.labels && (
              <LayoutFolders folders={labels} type="labels" hideIcon />
            )}
            {isActive.notes && <LayoutNotes notes={notes} title="Notes" />}
          </div>
        </div>
      </div>
    </>
  );
}
