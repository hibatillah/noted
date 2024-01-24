import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Notes - Noted",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container h-screen flex flex-col">
      <main>{children}</main>
    </div>
  );
}
