export default function Page({ children }: { children: React.ReactNode }) {
  return <main className="container h-screen flex flex-col">{children}</main>;
}
