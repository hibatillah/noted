"use client";

import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import LayoutNotes from "@/components/LayoutNotes";
import SearchBox from "@/components/SearchBox";
import { Menu } from "@/lib/types";
import { useSearchParams } from "next/navigation";

const labels: Menu[] = [
  {
    id: "1",
    title: "Important Meeting Asuransi",
    amount: 0,
    color: "text-status-red",
  },
  {
    id: "2",
    title: "Personal",
    amount: 0,
  },
];

export default function Page() {
  const searchParams = useSearchParams();
  const currentSearch = searchParams.get("search");

  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <LayoutFolders folders={labels} search={currentSearch} type="labels" />
    </div>
  );
}
