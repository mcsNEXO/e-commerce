import prisma from "@/lib/prismadb";
import { GenderType } from "@/types";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { params: [GenderType, string, string] } }
) {
  try {
    const [gender, category, type] = params.params;
    const types = await prisma.type.findMany({
      where: {
        category: {
          some: {
            value: category ?? undefined,
            gender: { some: { value: gender } },
          },
        },
      },
    });
    return NextResponse.json(types);
  } catch (error) {
    console.log("error", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
