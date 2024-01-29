import Header from "@/components/Header";
import LayoutFolders from "@/components/LayoutFolders";
import SearchBox from "@/components/SearchBox";
import { Label } from "@/lib/types";

const username = "Habib"
const userId = "1"
const labels: Label[] = [
  {
    id: "1",
    name: "Important Meeting Asuransi",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
    color: "text-status-red",
  },
  {
    id: "2",
    name: "Personal",
    createdAt: new Date(),
    updatedAt: new Date(),
    author: username,
    authorId: userId,
    notes: [""],
  },
];

export default function Page() {
  return (
    <div className="space-y-5">
      <Header back="/home" />
      <SearchBox />
      <LayoutFolders folders={labels} type="labels" date />
    </div>
  );
}
