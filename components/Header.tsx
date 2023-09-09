import { DarkToggle } from "@components";
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
  return (
    <header className="flex items-center">
      {isBack ? (
        <div className="w-8 aspect-square grid place-items-center text-white non-selectable">
          <IoIosArrowBack size={20} />
        </div>
      ) : null}
      <a href="/" className="ms-2 me-auto non-selectable">
        <h1>Noted</h1>
      </a>
      <DarkToggle />
      {!isProfile ? (
        <div className="w-8 aspect-square ms-3 p-1 grid place-items-center bg-profile rounded-full text-sm text-gray-950 font-bold tracking-wider non-selectable cursor-pointer">
          <span>
            {user.name.split(" ").map((word: string) => word.charAt(0))}
          </span>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
