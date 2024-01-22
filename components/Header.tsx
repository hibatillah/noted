"use client";
import ToggleThemes from "@/components/ToggleThemes";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { IoIosArrowBack } from "react-icons/io";

export default function Header({
  profile = true,
  back
}: {
  profile?: boolean,
  back?: string | boolean
}) {
  const router = useRouter();
  const pathname = usePathname();
  const username = "M. Hibatillah Hasanin";

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        {back ? (
          <Button
            size="icon"
            variant="ghost"
            onClick={() => typeof back === 'string' ? router.push(back) : router.back()}
            className="rounded-full text-title">
            <IoIosArrowBack size={20} className="-translate-x-0.5" />
          </Button>
        ) : null}
        <h1>Noted</h1>
      </div>
      <div className="flex items-center gap-2">
        <ToggleThemes />
        {profile ? (
          <Button
            size="icon"
            onClick={() => router.push("/profile")}
            className="rounded-full bg-primary tracking-wide text-white">
            {username.split(" ")[0].charAt(0).toUpperCase() +
              username.split(" ")[1].charAt(0).toUpperCase()}
          </Button>
        ) : null}
      </div>
    </div>
  );
}
