"use client";

import Header from "@/components/Header";
import NotesLayout from "@/components/NotesLayout";
import SearchBox from "@/components/SearchBox";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  const labelName = params.name.split("-").join(" ");

  return (
    <div className="space-y-5">
      <Header back="/notes/labels" />
      <SearchBox />
      <NotesLayout
        title={labelName}
        notes={[]}
        search={currentSearch}
        type="labels"
        options
      />
    </div>
  );
}
