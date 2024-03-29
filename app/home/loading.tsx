import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>
      <div className="py-5 space-y-5">
        <Skeleton className="w-full h-11" />
        <Skeleton className="w-full p-3 space-y-3">
          <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-48 h-6 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-52 h-6 bg-neutral-100 dark:bg-neutral-700" />
          <Skeleton className="w-60 h-6 bg-neutral-100 dark:bg-neutral-700" />
        </Skeleton>
        <div>
          <Skeleton className="mb-2 w-24 h-4" />
          <Skeleton className="w-full p-3 space-y-3">
            <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
            <Skeleton className="w-48 h-6 bg-neutral-100 dark:bg-neutral-700" />
            <Skeleton className="w-52 h-6 bg-neutral-100 dark:bg-neutral-700" />
          </Skeleton>
        </div>
        <div>
          <Skeleton className="mb-2 w-24 h-4" />
          <Skeleton className="w-full p-3 space-y-3">
            <Skeleton className="w-44 h-6 bg-neutral-100 dark:bg-neutral-700" />
            <Skeleton className="w-48 h-6 bg-neutral-100 dark:bg-neutral-700" />
            <Skeleton className="w-52 h-6 bg-neutral-100 dark:bg-neutral-700" />
          </Skeleton>
        </div>
      </div>
    </>
  );
}
