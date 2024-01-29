import { Separator } from "@/components/ui/separator";
import { Folder, Label, Menu } from "@/lib/types";
import { cn, dateFormat } from "@/lib/utils";
import Link from "next/link";

export default function CardMenu({
  data,
  type,
  separator,
  date,
}: {
  data: Menu | Folder | Label;
  type: "menu" | "folders" | "labels";
  separator?: boolean;
  date?: boolean;
}) {
  const { id, name, notes, updatedAt } = data;
  const formattedDate = dateFormat(updatedAt);
  const amount = notes?.length;
  const labelColor = (data as Label)?.color || "text-primary";

  const routeMenu = () => {
    const name = data.name.split(" ").join("-").toLowerCase();

    if (type !== "menu") {
      return `/notes/${type}/${name}?id=${id}`;
    } else if ((data as Menu).id !== "1") {
      return `/notes/${name.toLowerCase()}`;
    } else {
      return "/notes";
    }
  };

  const iconMenu = () => {
    const menu = (data as Menu).icon;
    const folder = (data as Folder)?.icon || "📂";
    const label = "●";

    return type === "folders" ? folder : type === "labels" ? label : menu;
  };

  return (
    <>
      <Link
        key={id}
        href={routeMenu()}
        className="px-3 py-2.5 flex items-center rounded-md bg-card hover:bg-neutral-200 dark:hover:bg-neutral-700 cursor-pointer">
        <span className={cn("w-5 object-contain text-center", labelColor)}>
          {iconMenu()}
        </span>
        <span className="text-title mx-3 line-clamp-1">{name}</span>
        <span className="me-5 flex-none text-sm text-foreground">{amount}</span>
        {date && (
          <span className="ms-auto flex-none text-xs text-neutral-400 dark:text-neutral-500">
            {formattedDate}
          </span>
        )}
      </Link>
      {separator && (
        <Separator className="w-[97%] my-0 mx-auto bg-neutral-300 dark:bg-neutral-700 last:hidden" />
      )}
    </>
  );
}
