import { SearchBar, ViewLayout } from "@components";

const Starred = () => {
  return (
    <div className="space-y-5">
      <SearchBar />
      <ViewLayout title="Starred Notes" notes={[]} />
    </div>
  );
};

export default Starred;
