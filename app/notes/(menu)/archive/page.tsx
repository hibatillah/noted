"use client";

import LayoutNotes from "@/components/LayoutNotes";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  return <LayoutNotes title="Archive" notes={[]} search={currentSearch} />;
}
