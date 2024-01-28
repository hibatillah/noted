import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import SearchBox from "@/components/SearchBox";
import { Menu } from "@/lib/types";

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
  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <LayoutFolders folders={labels} type="labels" />
    </div>
  );
}
