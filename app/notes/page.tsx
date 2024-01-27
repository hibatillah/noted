"use client";

import Header from "@/components/Header";
import LayoutNotes from "@/components/LayoutNotes";
import SearchBox from "@/components/SearchBox";
import { Note } from "@/lib/types";
import { useSearchParams } from "next/navigation";

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
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <LayoutNotes title="All Notes" notes={notes} search={currentSearch} />
    </div>
  );
}
