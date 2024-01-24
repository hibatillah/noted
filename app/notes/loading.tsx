import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
      <Skeleton className="w-full h-11" />
      <div className="space-y-3">
        <Skeleton className="mb-2 w-24 h-4" />
        <Skeleton className="w-full h-24 p-3 space-y-3">
          <Skeleton className="w-24 h-4 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
        </Skeleton>
        <Skeleton className="w-full h-24 p-3 space-y-3">
          <Skeleton className="w-24 h-4 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
        </Skeleton>
        <Skeleton className="w-full h-24 p-3 space-y-3">
          <Skeleton className="w-24 h-4 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
        </Skeleton>
        <Skeleton className="w-full h-24 p-3 space-y-3">
          <Skeleton className="w-24 h-4 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
        </Skeleton>
      </div>
    </div>
  );
}
