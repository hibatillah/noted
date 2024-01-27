"use client";

import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import SearchBox from "@/components/SearchBox";
import { Menu } from "@/lib/types";
import { useSearchParams } from "next/navigation";

const folders: Menu[] = [
  {
    id: "1",
    title: "Study",
    amount: 0,
    icon: "🏫",
  },
  {
    id: "2",
    title: "Personal",
    amount: 0,
  },
  {
    id: "3",
    title: "Personal",
    amount: 0,
  },
  {
    id: "4",
    title: "Hobby",
    amount: 0,
    icon: "💻",
  },
  {
    id: "5",
    title: "Personal 4",
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
      <LayoutFolders folders={folders} search={currentSearch} type="folders" />
    </div>
  );
}
