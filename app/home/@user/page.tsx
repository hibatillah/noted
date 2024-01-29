import DialogCreate from "@/components/DialogCreate";
import Header from "@/components/Header";
import MenuCard from "@/components/Menu";
import SearchBox from "@/components/SearchBox";
import { Folder, Label, Menu } from "@/lib/types";
import Link from "next/link";
import { BsArchive } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";

const username = "Habib";
const userId = "1";

const mainMenu: Menu[] = [
  {
    id: "1",
    name: "All Notes",
    amount: 0,
    color: "text-primary",
    icon: <HiOutlineDocumentDuplicate size={18} className="stroke-2" />,
    updatedAt: new Date(),
    notes: ["", ""]
  },
  {
    id: "2",
    name: "Starred",
    amount: 0,
    color: "text-status-yellow",
    icon: <FaRegStar size={18} className="stroke-2" />,
    updatedAt: new Date(),
    notes: ["", ""]
  },
  {
    id: "3",
    name: "Archive",
    amount: 0,
    color: "text-status-green",
    icon: <BsArchive size={18} className="stroke-1 dark:stroke-[0.5]" />,
    updatedAt: new Date(),
    notes: ["", ""]
  },
  {
    id: "4",
    name: "Trash",
    amount: 0,
    color: "text-status-red",
    icon: <LuTrash2 size={18} className="stroke-2" />,
    updatedAt: new Date(),
    notes: ["", ""]
  },
];

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

const labels: Label[] = [
  {
    id: "1",
    name: "Important Meeting Asuransi",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
    color: "text-status-red",
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
];

export default function Page() {
  return (
    <>
      <Header />
      <div className="h-full py-5 space-y-5">
        <Link href="/home/search">
          <SearchBox />
        </Link>
        <MenuCard menu={mainMenu} />
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Folders</h3>
            <DialogCreate type="folder" />
          </div>
          <MenuCard menu={folders} type="folders" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Labels</h3>
            <DialogCreate type="label" />
          </div>
          <MenuCard menu={labels} type="labels" />
        </div>
      </div>
    </>
  );
}
