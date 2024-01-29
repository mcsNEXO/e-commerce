import prismadb from "@/lib/prismadb";
import { GenderType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  params: { params: { gender: GenderType } }
) {
  try {
    const categories = await prisma?.category.findMany({
      where: {
        gender: { some: { value: params.params.gender } },
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.log("error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
