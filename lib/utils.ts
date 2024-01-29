import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getInitials(name: string) {
  const firstLetter = name.split(" ")[0].charAt(0).toUpperCase();
  const secondLetter = name.split(" ")[1]?.charAt(0).toUpperCase() || "";
  const initials  = firstLetter + secondLetter;

  return initials;
}

export function dateFormat(date: Date, year?: boolean) {
  const monthFormat = new Intl.DateTimeFormat("en", { month: "short" });

  const getDate = date.toLocaleDateString().split("/")[1];
  const getYear = date.toLocaleDateString().split("/")[2];
  const formattedDate = `${monthFormat.format(date)} ${getDate} ${year ? getYear : ""}`;

  return formattedDate;
}
