"use client"

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const folder = searchParams.get("name");
  const userId = searchParams.get("userId");

  return (
    <div>
      Labels {folder} & {userId}
    </div>
  );
}
