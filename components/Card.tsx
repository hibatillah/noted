import { Note } from "@lib/types";

export default function NoteCard({ data }: { data: Note }) {
  const { title, content, label } = data;

  const labelColor: { [key: string]: string } = {
    red: "bg-red-500",
    green: "bg-green-500",
    blue: "bg-blue-500",
    yellow: "bg-yellow-500",
    purple: "bg-purple-500",
  };

  return (
    <abbr title={title}>
      <div className="card space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="line-clamp-1">{title}</h3>
          {label && (
            <div
              className={`w-2 aspect-square rounded-full ${
                labelColor[label?.color]
              }`}
            />
          )}
        </div>
        <div className="line-clamp-3 text-text text-sm">{content}</div>
      </div>
    </abbr>
  );
}
