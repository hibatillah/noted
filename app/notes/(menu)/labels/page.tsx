"use client";

import NotesLayout from "@/components/NotesLayout";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  return <NotesLayout title="Labels" notes={[]} />;
}
