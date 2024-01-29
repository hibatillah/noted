"use client";

import CardMenu from "@/components/CardMenu";
import DialogCreate from "@/components/DialogCreate";
import { Folder, Label } from "@/lib/types";
import { useSearchParams } from "next/navigation";
import { FiFolderMinus } from "react-icons/fi";

export default function LayoutFolders({
  folders,
  type,
  hideIcon,
  date
}: {
  folders: Folder[] | Label[];
  type: "folders" | "labels";
  hideIcon?: boolean;
  date?: boolean;
}) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const filteredFolders =
    search !== null
      ? folders?.filter((folder) =>
          folder.name.toLowerCase().includes(search.toLowerCase())
        )
      : folders;

  return (
    <div className="space-y-2">
      <div className="mb-1 flex items-center justify-between text-title">
        <h2 className="capitalize">{type}</h2>
        {!hideIcon && (
          <DialogCreate type={type === "folders" ? "folder" : "label"} />
        )}
      </div>

      <div className="flex flex-col gap-3">
        {folders?.length !== 0 ? (
          filteredFolders?.map((folder) => (
            <CardMenu key={folder.id} data={folder} type={type} date={date} />
          ))
        ) : (
          <div className="col-span-2 h-[70vh] flex flex-col justify-center items-center text-foreground">
            <FiFolderMinus
              size={100}
              className="text-neutral-300 dark:text-neutral-700"
            />
            <div className="text-lg mt-4">No {type.toLowerCase()} yet!</div>
            <DialogCreate
              type={type === "folders" ? "folder" : "label"}
              trigger="link"
            />
          </div>
        )}
      </div>
    </div>
  );
}
