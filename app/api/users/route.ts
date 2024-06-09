import prisma from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const createUserSchema = z.object({
	first_name: z.string().min(1).max(255),
	last_name: z.string().min(1).max(255),
	address: z.string().min(1).max(255),
	email: z.string().min(1).max(255),
	phone_number: z.string().min(1).max(255),
});

export async function POST(req: NextRequest) {
		const body = await req.json();
		const bodyValidation = createUserSchema.safeParse(body);
		if (!bodyValidation.success) return NextResponse.json(bodyValidation.error.errors, { status: 400 });

    try {
			await prisma.users.create({ data: body });
      return NextResponse.json({ "message": "User successfully added." },  {status: 201 });
    }
    catch (error) {
      return NextResponse.json({ error }, { status: 500 });
    }
  }