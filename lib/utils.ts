import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const tmx = (...props: ClassValue[]) => twMerge(clsx(props));

export const getInitial = (username: string) => {
  return username
    .toUpperCase()
    .split(" ")
    .slice(0, 2)
    .map((word) => word.charAt(0));
};
