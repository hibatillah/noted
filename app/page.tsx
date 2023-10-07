import { SearchBar } from "@components";
import Link from "next/link";
import { AiOutlinePlus } from "react-icons/ai";
import {
  HiOutlineArchive,
  HiOutlineDocumentDuplicate,
  HiOutlineStar,
  HiOutlineTrash,
} from "react-icons/hi";
import { Menu } from "@lib/types";

export default function Home() {
  return (
    <div className="space-y-5">
      <SearchBar />
      <section className="card py-1 divide-y divide-y-divider">
        {mainMenu.map((item, index) => (
          <Menu data={item} key={index} />
        ))}
      </section>
      <div id="folders">
        <div className="mb-2 flex justify-between items-center text-title">
          <h2>Folders</h2>
          <div className="p-1 cursor-pointer">
            <AiOutlinePlus size={18} />
          </div>
        </div>
        <section className="card py-1 divide-y divide-y-divider">
          {folders.length !== 0 ? (
            folders.map((item, index) => <Menu data={item} key={index} />)
          ) : (
            <Empty title="folders" />
          )}
        </section>
      </div>
      <div id="labels">
        <div className="mb-2 flex justify-between items-center text-title">
          <h2>Labels</h2>
          <div className="p-1 cursor-pointer">
            <AiOutlinePlus size={18} />
          </div>
        </div>
        <section className="card py-1 divide-y divide-y-divider">
          {label.length !== 0 ? (
            label.map((item, index) => <Menu data={item} key={index} />)
          ) : (
            <Empty title="labels" />
          )}
        </section>
      </div>
    </div>
  );
}

const Menu = ({ data, key }: { data: Menu; key: number }) => {
  return (
    <Link href={data.path} key={key}>
      <div className="flex items-center gap-4 py-2.5">
        <span className={data.color}>{data.icon}</span>
        <div className="text-title">
          {data.title}
          <span className="ms-2 text-sm text-text">{data.amount}</span>
        </div>
      </div>
    </Link>
  );
};

const Empty = ({ title }: { title: string }) => {
  return (
    <div className="py-4 grid place-items-center text-text">
      <span>No {title} yet</span>
    </div>
  );
};

const folders: Menu[] = [];
const label: Menu[] = [];

const mainMenu: Menu[] = [
  {
    icon: <HiOutlineDocumentDuplicate size={20} />,
    title: "All Notes",
    amount: 8,
    color: "text-status-blue",
    path: "/notes",
  },
  {
    icon: <HiOutlineStar size={20} />,
    title: "Starred",
    amount: 5,
    color: "text-status-yellow",
    path: "/starred",
  },
  {
    icon: <HiOutlineArchive size={20} />,
    title: "Archive",
    amount: 2,
    color: "text-status-green",
    path: "/archive",
  },
  {
    icon: <HiOutlineTrash size={20} />,
    title: "Trash",
    amount: 2,
    color: "text-status-red",
    path: "/trash",
  },
];
