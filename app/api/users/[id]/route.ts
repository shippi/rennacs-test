import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string
  }
}

const invalidIdMsg = "Invalid format for ID, please submit a number."

export async function DELETE(req: NextRequest, { params: {id} }: Context) {
  if (!Number(id)) return NextResponse.json({ error: invalidIdMsg }, { status: 400 });
  
  try {
    await prisma.users.delete({
      where: { id: Number(id) }
    });
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  return NextResponse.json({ message: "User successfully deleted." }, {status: 200});
} 