import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Register - Noted",
};

export default function layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
