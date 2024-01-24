"use client";

import NotesLayout from "@/components/NotesLayout";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const search = searchParams.get("search");

  const labelName = params.name.split("-").join(" ");

  return <NotesLayout title={labelName} notes={[]} />;
}
