import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest, context: { params: { id: string } }) => {
  const id = context.params.id.toString();

  const user = await prisma.users.findUnique({
    where: {
      id: id,
    },
  });

  return NextResponse.json({ user });
};
