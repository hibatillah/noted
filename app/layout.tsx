import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Noted",
  description: "Simple note app",
  authors: {
    name: "Hibatillah",
    url: "hibatillah.site",
  },
  colorScheme: "dark light",
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const role = true

  return (
    <html lang="en">
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
