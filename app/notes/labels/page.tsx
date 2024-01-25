"use client";

import Header from "@/components/Header";
import NotesLayout from "@/components/NotesLayout";
import SearchBox from "@/components/SearchBox";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <NotesLayout
        title="Labels"
        notes={[]}
        search={currentSearch}
        type="labels"
      />
    </div>
  );
}
