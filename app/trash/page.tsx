import { SearchBar, ViewLayout } from "@components";

const Trash = () => {
  return (
    <div className="space-y-5">
      <SearchBar />
      <ViewLayout title="Trash Notes" notes={[]} />
    </div>
  );
};

export default Trash;
