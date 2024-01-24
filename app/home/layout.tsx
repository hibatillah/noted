import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home - Noted",
};

export default function Layout({
  user,
  admin,
}: {
  user: React.ReactNode;
  admin: React.ReactNode;
}) {
  const isAdmin = false;

  return (
    <main className="container min-h-screen flex flex-col">
      {isAdmin ? admin : user}
    </main>
  );
}
