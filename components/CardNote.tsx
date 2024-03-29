import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Note } from "@/lib/types";
import { cn, dateFormat } from "@/lib/utils";
import Link from "next/link";

export default function CardNote({
  data,
  isGrid,
}: {
  data: Note;
  isGrid: boolean;
}) {
  const { id, title, content, updatedAt } = data;
  const noteTitle = title.split(" ").join("-").toLowerCase();
  const formattedDate = dateFormat(updatedAt);

  return (
    <Link href={`/notes/${noteTitle}?id=${id}`}>
      <Card
        className={cn("col-span-1", {
          "h-28": !isGrid,
          "h-40": isGrid,
        })}>
        <CardHeader
          className={cn("mb-2", {
            "flex justify-between items-start": !isGrid,
            "block space-y-1": isGrid,
          })}>
          <CardTitle className="line-clamp-1">
            {title || (
              <span className="text-neutral-400 dark:text-neutral-500">
                Untitled
              </span>
            )}
          </CardTitle>

          <div
            className={cn("flex-none text-xs text-foreground", {
              hidden: !title,
            })}>
            {formattedDate}
          </div>
        </CardHeader>

        <CardDescription
          className={cn({
            "line-clamp-4": isGrid,
            "line-clamp-2": !isGrid,
          })}>
          {content || (
            <span className="text-neutral-400 dark:text-neutral-500">
              Write something here...
            </span>
          )}
        </CardDescription>
      </Card>
    </Link>
  );
}
