import { Theme } from "@components";
import { User } from "@types";
import { IoIosArrowBack } from "react-icons/io";

const Header = ({
  user,
  isBack = false,
  isProfile = false,
}: {
  user: User;
  isBack?: boolean;
  isProfile?: boolean;
}) => {
  const initialName = user.name
    .split(" ")
    .slice(0, 2)
    .map((word: string) => word.charAt(0));

  return (
    <header className="flex items-center">
      {isBack ? (
        <div className="w-8 aspect-square grid place-items-center text-white select-none">
          <IoIosArrowBack size={20} />
        </div>
      ) : null}
      <a href="/" className="ms-2 me-auto">
        <h1>Noted</h1>
      </a>
      <Theme user={user} />
      {!isProfile ? (
        <div className="w-8 aspect-square ms-3 p-1 grid place-items-center bg-profile rounded-full text-xs text-gray-950 font-bold tracking-wider select-none cursor-pointer">
          <span>{initialName}</span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
