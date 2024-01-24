"use client";

import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { IoIosSunny, IoMdMoon } from "react-icons/io";

export default function ToggleThemes() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      size="icon"
      variant="secondary"
      className="rounded-full"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? <IoIosSunny size={22} /> : <IoMdMoon size={22} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
