"use client";

import NotesLayout from "@/components/NotesLayout";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  return <NotesLayout title="Trash" notes={[]} search={currentSearch} />;
}
