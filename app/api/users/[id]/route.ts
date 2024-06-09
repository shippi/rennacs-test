import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";

interface Context {
  params: {
    id: string
  }
}

const invalidIdMsg = "Invalid format for ID, please submit a number.";

export async function GET(req: NextRequest, { params: {id} }: Context) {
  if (!Number(id)) return NextResponse.json({ error: invalidIdMsg }, { status: 400 });
  
  try {
    const user = await prisma.users.findFirst({
      where: { id: Number(id) }
    });

    if (!user) return NextResponse.json({ message: "User not found." }, { status: 404 });
    
    return NextResponse.json(user, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 

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

  return NextResponse.json({ message: "User successfully deleted." }, { status: 200 });
} 