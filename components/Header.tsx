import { BackButton, Theme } from "@components";
import { swr } from "@lib/req";
import { getInitial } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  const { data } = swr("/users/1234")
  console.log(data)

  const initialName = getInitial("M hibatillah Hasanin")
  const hideProfile = () =>
    pathname.includes("/auth") || pathname === "/profile";

  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {pathname === "/" || pathname === "/auth" ? null : <BackButton />}
        <a href="/">
          <h1>Noted</h1>
        </a>
      </div>
      <div className="flex items-center gap-3">
        <Theme />
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
