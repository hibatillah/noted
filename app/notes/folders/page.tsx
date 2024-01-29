import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import SearchBox from "@/components/SearchBox";
import { Folder } from "@/lib/types";

const username = "Habib"
const userId = "1"
const folders: Folder[] = [
  {
    id: "1",
    name: "Study",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
    icon: "🏫",
  },
  {
    id: "2",
    name: "Personal",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
  },
  {
    id: "3",
    name: "Personal",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
  },
  {
    id: "4",
    name: "Hobby",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
    icon: "💻",
  },
  {
    id: "5",
    name: "Personal 4",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
  },
];

export default function Page() {
  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <LayoutFolders folders={folders} type="folders" date />
    </div>
  );
}
