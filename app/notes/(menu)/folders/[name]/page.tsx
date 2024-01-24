export default function Page({ params }: { params: { name: string } }) {
  const folderName = params.name.split("-").join(" ");

  return (
    <div>
      Folder {folderName}
    </div>
  );
}
