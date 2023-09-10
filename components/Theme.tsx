"use client";

import { User } from "@types";
import React from "react";
import { BiSolidSun } from "react-icons/bi";
import { FaMoon } from "react-icons/fa";

const Theme = ({ user }: { user: User }) => {
  const isSystemDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDarkTheme, setIsDarkTheme] = React.useState(isSystemDarkTheme);

  const setDarkTheme = () => {
    document.documentElement.classList.add("dark");
    setIsDarkTheme(true);
  };

  const switchTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDarkTheme(!isDarkTheme);
  };

  // initial theme
  React.useEffect(() => {
    if (!user.login) {
      if (isSystemDarkTheme) setDarkTheme();
    }
    user.darkTheme ? setDarkTheme() : setIsDarkTheme(false);
  }, [user, isSystemDarkTheme]);

  return (
    <button
      onClick={switchTheme}
      className="w-8 aspect-square rounded-full grid place-items-center bg-card text-title select-none cursor-pointer">
      {isDarkTheme ? <FaMoon /> : <BiSolidSun />}
    </button>
  );
};

export default Theme;
