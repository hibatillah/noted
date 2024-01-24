import { Note } from "@/lib/types";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";

const notes: Note[] = [
  {
    id: "1",
    title: "Buku 1",
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
    title: "Buku 3",
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
];

export default function Page() {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-title">
        <h2>Folders</h2>
        <Link
          href="/folders/create"
          className="px-2 py-1.5 rounded-md hover:bg-card">
          <FiPlus />
        </Link>
      </div>
    </div>
  );
}
