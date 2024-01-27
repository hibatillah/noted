"use client";

import Header from "@/components/Header";
import LayoutNotes from "@/components/LayoutNotes";
import SearchBox from "@/components/SearchBox";
import { useSearchParams } from "next/navigation";

export default function Page({ params }: { params: { name: string } }) {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  const folderName = params.name.split("-").join(" ");

  return (
    <div className="space-y-5">
      <Header back="/notes/folders" />
      <SearchBox />
      <LayoutNotes
        title={folderName}
        notes={[]}
        search={currentSearch}
        type="folders"
        options
      />
    </div>
  );
}
