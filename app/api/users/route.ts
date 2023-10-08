import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async () => {
  try {
    const users = await prisma.users.findMany({});
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const data = await req.json();

  try {
    const users = await prisma.users.create({
      data: data,
    });
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
  const url = req.nextUrl.pathname;
  const id = url.split("/")[-1];
  const data = await req.json();

  try {
    const users = await prisma.users.update({
      where: {
        id: id,
      },
      data: data,
    });
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  const url = req.nextUrl.pathname;
  const id = url.split("/")[-1];

  try {
    const users = await prisma.users.delete({
      where: {
        id: id,
      },
    });

    if (!users) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }
    return NextResponse.json({ users });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
