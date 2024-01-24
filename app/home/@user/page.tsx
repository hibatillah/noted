import CardMenu from "@/components/CardMenu";
import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";
import { Menu } from "@/lib/types";
import Link from "next/link";
import { BsArchive } from "react-icons/bs";
import { FaRegStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { HiOutlineDocumentDuplicate } from "react-icons/hi";
import { LuTrash2 } from "react-icons/lu";

const mainMenu: Menu[] = [
  {
    id: "1",
    title: "All Notes",
    href: "/notes",
    amount: 0,
    color: "text-primary",
    icon: <HiOutlineDocumentDuplicate size={20} />,
  },
  {
    id: "2",
    title: "Stared",
    href: "/notes/starred",
    amount: 0,
    color: "text-status-yellow",
    icon: <FaRegStar size={20} />,
  },
  {
    id: "3",
    title: "Archive",
    href: "/notes/archive",
    amount: 0,
    color: "text-status-green",
    icon: <BsArchive size={20} />,
  },
  {
    id: "4",
    title: "Trash",
    href: "/notes/trash",
    amount: 0,
    color: "text-status-red",
    icon: <LuTrash2 size={20} />,
  },
];

const folders: Menu[] = [
  {
    id: "1",
    title: "Study",
    amount: 0,
    icon: "🏫",
  },
  {
    id: "2",
    title: "Personal 1",
    amount: 0,
  },
  {
    id: "3",
    title: "Personal 2 ",
    amount: 0,
  },
  {
    id: "4",
    title: "Personal 3",
    amount: 0,
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

export default function Page() {
  return (
    <>
      <Header />
      <div className="h-full py-5 space-y-5">
        <SearchBox />
        <CardMenu menu={mainMenu} />
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Folders</h3>
            <Link
              href="/folders/create"
              className="px-2 py-1.5 rounded-md hover:bg-card">
              <FiPlus />
            </Link>
          </div>
          <CardMenu menu={folders} type="folders" />
        </div>
        <div>
          <div className="mb-1 flex items-center justify-between text-title">
            <h3>Labels</h3>
            <Link
              href="/labels/create"
              className="px-2 py-1.5 rounded-md hover:bg-card">
              <FiPlus />
            </Link>
          </div>
          <CardMenu menu={labels} type="labels" />
        </div>
      </div>
    </>
  );
}
