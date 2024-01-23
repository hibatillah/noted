import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="flex items-center justify-between">
        <Skeleton className="w-24 h-4" />
        <Skeleton className="w-10 h-10 rounded-full" />
      </div>

      <div className="my-auto">
        <Skeleton className="w-20 h-4" />
        <Skeleton className="w-full h-4 my-3" />
        <Skeleton className="w-60 h-4 my-3" />

        <div className="my-7 space-y-3">
          <div className="space-y-3">
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-full h-10" />
          </div>
          <div className="space-y-3">
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-full h-10" />
          </div>
          <div className="space-y-3">
            <Skeleton className="w-24 h-3" />
            <Skeleton className="w-full h-10" />
          </div>
        </div>

        <Skeleton className="w-full h-10" />
        <Skeleton className="w-full h-px my-5" />
        <Skeleton className="w-full h-10" />
      </div>
    </>
  );
}
