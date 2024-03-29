"use client"

import Header from "@/components/Header";
import LayoutNotes from "@/components/LayoutNotes";
import SearchBox from "@/components/SearchBox";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { name: string, id: string } }) {
  const searchParams = useSearchParams();
  const labelId = searchParams.get("id");
  const labelName = params.name.split("-").join(" ");

  return (
    <div className="space-y-5">
      <Header back="/notes/labels" />
      <SearchBox />
      <LayoutNotes title={labelName} notes={[]} type="labels" options />
    </div>
  );
}
