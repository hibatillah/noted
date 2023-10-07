import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  const users = await prisma.users.findMany({});
  return NextResponse.json({ users });
};

export const POST = async (req: NextRequest) => {
  const { email, username, password, profile } = await req.json();

  const users = await prisma.users.create({
    data: {
      email,
      username,
      password,
      profile,
    },
  });

  return NextResponse.json({ users });
};

export const PUT = async (req: NextRequest) => {
  const { id, email, username, password, profile } = await req.json();

  const users = await prisma.users.update({
    where: {
      id
    },
    data: {
      email,
      username,
      password,
      profile,
    },
  });

  return NextResponse.json({ users });
};

export const DELETE = async (req: NextRequest) => {
  const url = req.nextUrl.pathname;
  const id = url.split("/")[-1];

  const users = await prisma.users.delete({
    where: {
      id: id,
    },
  });

  if (!users)
    return NextResponse.json({ message: "User not found" }, { status: 404 });

  return NextResponse.json({ users });
};
