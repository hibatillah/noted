import { NextResponse } from "next/server";

export const GET = async() => {
  return NextResponse.json({
    name: "Noted",
    description: "simple notes, ez use and integrated",
    author: "Hibatillah",
    sourceCode: "https://github.com/hibatillah/noted",
    message: "Welcome to Noted API!"
  })
}