"use client"

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const folder = searchParams.get("name");

  return (
    <div>
      Labels {folder}
    </div>
  );
}
