import { SearchBar, ViewLayout } from "@components";

const Archive = () => {
  return (
    <div className="space-y-5">
      <SearchBar />
      <ViewLayout title="Archive Notes" notes={[]} />
    </div>
  );
};

export default Archive;
