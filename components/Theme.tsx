import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";

const Theme = () => {
  const isSystemDarkTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const [isDarkTheme, setIsDarkTheme] = React.useState(isSystemDarkTheme);

  const applyDarkTheme = () => {
    document.documentElement.setAttribute("data-theme", "dark");
    setIsDarkTheme(true);
  };

  const switchTheme = () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "light" : "dark"
    );
    setIsDarkTheme(!isDarkTheme);
  };

  // set initial theme
  React.useEffect(() => {
    isSystemDarkTheme ? applyDarkTheme() : setIsDarkTheme(false);
  }, [isSystemDarkTheme]);

  return (
    <button
      onClick={switchTheme}
      className="w-8 aspect-square rounded-full grid place-items-center bg-card text-title select-none cursor-pointer">
      {isDarkTheme ? <FaMoon /> : <BsFillSunFill />}
    </button>
  );
};

export default Theme;
