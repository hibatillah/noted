import { FaMoon } from "react-icons/fa";

const DarkToggle = () => {
  return (
    <button className="w-8 aspect-square rounded-full grid place-items-center bg-card text-white select-none cursor-pointer">
      <FaMoon />
    </button>
  );
};

export default DarkToggle;
