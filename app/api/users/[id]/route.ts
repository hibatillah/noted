import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  context: { params: { id: string } }
) => {
  const id = context.params.id.toString();

  try {
    const user = await prisma.users.findUnique({
      where: {
        id: id,
      },
    });
    return NextResponse.json({ user });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
};
