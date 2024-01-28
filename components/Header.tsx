"use client";

import ToggleThemes from "@/components/ToggleThemes";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Header({ back }: { back?: string | boolean }) {
  const router = useRouter();
  const pathname = usePathname()

  const routeBack = pathname.split("/").slice(0, -1).join("/");
  const isProfilePage = pathname === "/profile";
  const username = "M. Hibatillah Hasanin";
  const profile = true;

  return (
    <header className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {back ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={() =>
              typeof back === "string" ? router.push(back) : router.back()
            }
            className="rounded-full text-title">
            <IoIosArrowBack size={20} className="-translate-x-0.5" />
          </Button>
        ) : null}
        <h1>Noted</h1>
      </div>
      <div className="flex items-center gap-2">
        <ToggleThemes />
        {profile && !isProfilePage ? (
          <Button
            size="icon"
            onClick={() => router.push("/profile")}
            className="rounded-full bg-primary tracking-wide text-white">
            {username.split(" ")[0].charAt(0).toUpperCase() +
              username.split(" ")[1].charAt(0).toUpperCase()}
          </Button>
        ) : null}
      </div>
    </header>
  );
}
