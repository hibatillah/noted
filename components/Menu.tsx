import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";
import MenuCard from "./MenuCard";

const ManyItem = ({ type }: { type: string }) => {
  return (
    <Link
      href={type === "folders" ? "/notes/folders" : "/notes/labels"}
      className="px-3 py-1.5 text-sm text-foreground font-light flex items-center gap-1 hover:gap-2.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer transition-all ease-out group">
      See more <IoIosArrowRoundForward size={18} />
    </Link>
  );
};

const EmptyItem = ({ type }: { type: string }) => {
  return (
    <div className="text-center text-foreground text-sm space-y-0.5">
      <div>No {type.toLowerCase()} yet!</div>
      
      <Link
        className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out"
        href={
          type === "folders" ? "/notes/folders/create" : "/notes/labels/create"
        }>
        <span className="translate-x-2 group-hover:-translate-x-0">
          Create one
        </span>
        <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
      </Link>
    </div>
  );
};

export default function CardMenu({
  menu,
  type = "menu",
}: {
  menu: Menu[];
  type?: "menu" | "folders" | "labels";
}) {
  const filteredMenu = menu.slice(0, 4);
  const isMany = menu.length > 4;
  const isEmpty = menu.length === 0;

  return (
    <nav
      className={cn("bg-card rounded-lg p-1 space-y-1", {
        "h-24 grid place-items-center": isEmpty,
      })}>
      {filteredMenu?.map((item) => (
        <MenuCard key={item.id} menu={item} type={type} />
      ))}
      {isMany && <ManyItem type={type} />}
      {isEmpty && <EmptyItem type={type} />}
    </nav>
  );
}
