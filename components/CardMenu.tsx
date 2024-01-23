import { Separator } from "@/components/ui/separator";
import { Menu } from "@/lib/types";
import Link from "next/link";

export default function CardMenu({
  menu,
  type = "menu",
}: {
  menu: Menu[];
  type?: "menu" | "folder" | "label";
}) {
  return (
    <div className="bg-card rounded-lg p-1 space-y-1">
      {menu?.map((item, index) => (
        <>
          <Link
            key={index}
            href={
              type === "folder"
                ? `/notes/folders?name=${item.href}&userId=${item.userId}`
                : type === "label"
                  ? `/notes/labels?name=${item.href}&userId=${item.userId}`
                  : item.href
            }
            className="px-3 py-2.5 flex items-center rounded-md hover:bg-background dark:hover:bg-neutral-800 cursor-pointer">
            <div
              className={`w-5 object-contain text-center ${
                item.color || "text-primary"
              }`}>
              {type === "folder"
                ? item.icon || "📂"
                : type === "label"
                  ? "●"
                  : item.icon}
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
