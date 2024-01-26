import { Separator } from "@/components/ui/separator";
import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function MenuCard({
  menu,
  type,
}: {
  menu: Menu;
  type?: "menu" | "folders" | "labels";
}) {
  const { id, title, amount, icon, color, href } = menu;

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
    <>
      <Link
        key={id}
        href={href || routeMenu(title)}
        className="px-3 py-2.5 flex items-center rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 cursor-pointer">
        <span
          className={cn("w-5 object-contain text-center text-primary", color)}>
          {iconMenu(icon)}
        </span>
        <span className="text-title mx-3 line-clamp-1">{title}</span>
        <span className="me-5 flex-none text-sm text-foreground">{amount}</span>
      </Link>
      <Separator className="w-[99%] my-1 mx-auto bg-neutral-300 dark:bg-neutral-700 last:hidden" />
    </>
  );
}
