export default function Page({ children }: { children: React.ReactNode }) {
  return <div className="container h-screen flex flex-col">{children}</div>;
}
