import Header from "@/components/Header";

export default function Page({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container h-screen flex flex-col">
      <Header profile={false} />
      {children}
    </div>
  );
}
