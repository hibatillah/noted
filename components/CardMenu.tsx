import { Separator } from "@/components/ui/separator";
import { Menu } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function CardMenu({
  menu,
  type = "menu",
}: {
  menu: Menu[];
  type?: "menu" | "folder" | "label";
}) {
  const routeMenu = (href: string, type: string) => {
    const menu = href;
    const folder = `/notes/folders?name=${href}`;
    const label = `/notes/labels?name=${href}`;

    return type === "folder" ? folder : type === "label" ? label : menu;
  };

  const iconMenu = (icon: string | React.ReactNode, type: string) => {
    const menu = icon;
    const folder = icon || "📂";
    const label = "●";

    return type === "folder" ? folder : type === "label" ? label : menu;
  };

  return (
    <div className="bg-card rounded-lg p-1 space-y-1">
      {menu?.map((item, index) => (
        <>
          <Link
            key={index}
            href={routeMenu(item.href, type)}
            className="px-3 py-2.5 flex items-center rounded-md hover:bg-background dark:hover:bg-neutral-800 cursor-pointer">
            <div
              className={cn(
                "w-5 object-contain text-center text-primary",
                item.color
              )}>
              {iconMenu(item.icon, type)}
            </div>
            <div className="text-title ms-3 mr-2">{item.title}</div>
            <div className="text-foreground">{item.amount}</div>
          </Link>
          <Separator className="w-[99%] my-1 mx-auto bg-background dark:bg-neutral-700 last:hidden" />
        </>
      ))}
    </div>
  );
}
