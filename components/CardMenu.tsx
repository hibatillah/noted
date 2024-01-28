import { Separator } from "@/components/ui/separator";
import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CardMenu({
  menu,
  type,
  separator,
}: {
  menu: Menu;
  type?: "menu" | "folders" | "labels";
  separator?: boolean;
}) {
  const { id, title, amount, icon, color, href } = menu;

  const routeMenu = () => {
    const name = title.split(" ").join("-").toLowerCase();
    return `/notes/${type}/${name}?id=${id}`;
  };

  const iconMenu = () => {
    const menu = icon;
    const folder = icon || "📂";
    const label = "●";

    return type === "folders" ? folder : type === "labels" ? label : menu;
  };

  return (
    <>
      <Link
        key={id}
        href={href || routeMenu()}
        className="px-3 py-2.5 flex items-center rounded-md bg-card hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
        <span
          className={cn("w-5 object-contain text-center text-primary", color)}>
          {iconMenu()}
        </span>
        <span className="text-title mx-3 line-clamp-1">{title}</span>
        <span className="me-5 flex-none text-sm text-foreground">{amount}</span>
      </Link>
      {separator && (
        <Separator className="w-[99%] my-0 mx-auto bg-neutral-300 dark:bg-neutral-700 last:hidden" />
      )}
    </>
  );
}
