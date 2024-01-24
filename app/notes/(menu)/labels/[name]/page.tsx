export default function Page({ params }: { params: { name: string } }) {
  const labelName = params.name.split("-").join(" ");

  return (
    <div className="capitalize">
      Folder {labelName}
    </div>
  );
}
