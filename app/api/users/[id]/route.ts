import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

/**
 * General comment for these routes/handlers:
 * All handlers contain an if statement to check if the id in the URL is a valid number.
 * Unfortunately, in Next.js there is currently no clean/easy way to get the value in a 
 * slug (id) of a URL from the middleware. 
 */

interface Context {
  params: {
    id: string
  }
}
const createUserSchema = z.object({
	first_name: z.string().min(1).max(255).optional(),
	last_name: z.string().min(1).max(255).optional(),
	address: z.string().min(1).max(255).optional(),
	email: z.string().min(1).max(255).optional(),
	phone_number: z.string().min(1).max(255).optional(),
});

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

export async function PUT(req: NextRequest, { params: {id} }: Context) {
  const parsedId = Number(id);
  if (!parsedId) return NextResponse.json({ error: invalidIdMsg }, { status: 400 });

  const body = await req.json();
  const bodyValidation = createUserSchema.safeParse(body);
  if (!bodyValidation.success) return NextResponse.json(bodyValidation.error.errors, { status: 400 });

  try {
    const updateUser = await prisma.users.update({
      where: {
        id: parsedId
      },
      data: {
        first_name: body.first_name,
        last_name: body.last_name,
        phone_number: body.phone_number,
        address: body.address,
        email: body.email
      }
    })
    return NextResponse.json(updateUser, { status: 200 });
  }
  catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}