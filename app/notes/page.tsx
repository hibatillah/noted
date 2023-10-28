import { SearchBar, ViewLayout } from "@components";

const Notes = () => {
  return (
    <div className="space-y-5">
      <SearchBar />
      <ViewLayout
        title="All Notes"
        notes={catatan}
      />
    </div>
  );
}

export default Notes;

const catatan = [
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "blue",
    }
  },
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "red",
    }
  },
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "red",
    }
  },
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "red",
    }
  },
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "red",
    }
  },
  {
    id: "dfaldka",
    title: "Tugas",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    createdAt: "2021-10-10T10:10:10.000Z",
    updatedAt: "2021-10-10T10:10:10.000Z",
    authorId: "dfaldka",
    label: {
      name: "important",
      color: "red",
    }
  },
]