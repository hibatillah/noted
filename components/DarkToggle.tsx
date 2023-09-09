import { FaMoon } from "react-icons/fa";

const DarkToggle = () => {
  return (
    <div className="w-8 aspect-square rounded-full grid place-items-center bg-card text-white select-none pointer-events-none cursor-pointer">
      <FaMoon />
    </div>
  );
};

export default DarkToggle;
