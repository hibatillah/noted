"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Footer, Header } from "@components";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Noted",
  description: "Simple note app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={(inter.className, "px-5 py-6")}>
        <Header user={Profile} />
        {children}
        <Footer />
      </body>
    </html>
  );
}

const Profile = {
  name: "M Hibatillah Hasanin",
  email: "hibatillahhabib@gmail.com",
  profile: "student",
  login: false,
  darkTheme: false,
};
