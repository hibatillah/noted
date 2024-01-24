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
    <div className="container h-screen flex flex-col">
      {isAdmin ? admin : user}
    </div>
  );
}
