import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
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
    url: "https://hibatillah.site",
  },
  applicationName: "Noted",
  themeColor: "#202123",
  colorScheme: "dark light",
  keywords: ["note", "app", "simple", "modern", "minimalist"],
  openGraph: {
    type: "website",
    url: "https://noted.up.railway.app",
    title: "Noted",
    description: "Simple note app",
    siteName: "Noted",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
