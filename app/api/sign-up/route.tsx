import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, firstName, phone } = body;

    if (!email || !password || !firstName || !phone) {
      return new NextResponse("Complete all fields!");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await prisma.user.create({
      data: {
        email,
        hashedPassword,
        firstName,
        phone: Number(phone),
      },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    if (
      error?.code === "P2002" &&
      error?.meta?.modelName === "User" &&
      error?.meta?.target === "User_email_key"
    ) {
      return new NextResponse("unique-email", { status: 409 });
    }
    return new NextResponse("Server error", { status: 500 });
  }
}
