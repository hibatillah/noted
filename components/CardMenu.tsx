import { Separator } from "@/components/ui/separator";
import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FiPlus } from "react-icons/fi";
import { IoIosArrowRoundForward } from "react-icons/io";

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

  const routeMenu = (title: string) => {
    const name = title.split(" ").join("-").toLowerCase();
    return `/notes/${type}/${name}`;
  };

  const iconMenu = (icon: string | React.ReactNode) => {
    const menu = icon;
    const folder = icon || "📂";
    const label = "●";

    return type === "folders" ? folder : type === "labels" ? label : menu;
  };

  return (
    <nav
      className={cn("bg-card rounded-lg p-1 space-y-1", {
        "h-24 grid place-items-center": isEmpty,
      })}>
      {filteredMenu?.map((item) => (
        <>
          <Link
            key={item.id}
            href={item.href || routeMenu(item.id)}
            className="px-3 py-2.5 flex items-center rounded-md hover:bg-background dark:hover:bg-neutral-800 cursor-pointer">
            <span
              className={cn(
                "w-5 object-contain text-center text-primary",
                item.color
              )}>
              {iconMenu(item.icon)}
            </span>
            <span className="text-title mx-3 line-clamp-1">{item.title}</span>
            <span className="flex-none text-sm text-foreground">
              {item.amount}
            </span>
          </Link>
          <Separator className="w-[99%] my-1 mx-auto bg-background dark:bg-neutral-700 last:hidden" />
        </>
      ))}
      {isMany && (
        <Link
          href={type === "folders" ? "/notes/folders" : "/notes/labels"}
          className="px-3 py-1.5 text-sm text-foreground font-light flex items-center gap-1 hover:gap-2.5 rounded-md hover:bg-background dark:hover:bg-neutral-800 cursor-pointer transition-all ease-out group">
          See more <IoIosArrowRoundForward size={18} />
        </Link>
      )}
      {isEmpty && (
        <div className="text-center text-foreground text-sm space-y-0.5">
          <div>No {type.toLowerCase()} yet!</div>
          <Link
            className="flex items-center justify-center gap-1 text-title group *:transition-all *:ease-out"
            href={
              type === "folders"
                ? "/notes/folders/create"
                : "/notes/labels/create"
            }>
            <span className="translate-x-2 group-hover:-translate-x-0">
              Create one
            </span>
            <FiPlus className="-translate-x-2 invisible opacity-0 group-hover:translate-x-0 group-hover:visible group-hover:opacity-100" />
          </Link>
        </div>
      )}
    </nav>
  );
}
