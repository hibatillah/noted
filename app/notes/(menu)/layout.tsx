import Header from "@/components/Header";
import SearchBox from "@/components/SearchBox";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="space-y-5">
      <Header back />
      <SearchBox />
      {children}
    </div>
  );
}
