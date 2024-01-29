import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const gender = await prismadb.gender.findMany({
      orderBy: { createdAt: "asc" },
    });

    return NextResponse.json(gender);
  } catch (error) {
    console.log("error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
