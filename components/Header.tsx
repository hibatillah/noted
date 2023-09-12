"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Theme } from "@components";
import { User } from "@types";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({ user }: { user: User }) => {
  const router = useRouter();
  const pathname = usePathname();

  const initialName = user.name
    .split(" ")
    .slice(0, 2)
    .map((word: string) => word.charAt(0));

  const hideProfile = () => pathname === "/profile" || pathname === "/auth";

  const backPage = () => {
    const pagePath = pathname.split("/");
    return pagePath.length === 2 ? "/" : pagePath.slice(0, -1).join("/");
  }

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {pathname !== "/" ? (
          <button
            onClick={() => router.push(backPage())}
            className="w-8 aspect-square grid place-items-center text-title select-none">
            <IoIosArrowBack size={20} />
          </button>
        ) : null}
        <a href="/">
          <h1>Noted</h1>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Theme user={user} />
        {!hideProfile() ? (
          <Link href="/profile">
            <div className="w-8 aspect-square p-1 grid place-items-center bg-profile rounded-full text-xs text-gray-950 font-bold tracking-wider select-none cursor-pointer">
              <span>{initialName}</span>
            </div>
          </Link>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
