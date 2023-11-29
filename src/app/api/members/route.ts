import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: NextRequest) {
    // Paginacion
    const skip = request.nextUrl.searchParams.get("skip");
    const take = request.nextUrl.searchParams.get("take");
    const members = await prisma.member.findMany({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json(members);
}

export async function POST(request: Request) {
    const json = await request.json();

    const newMember = await prisma.member.create({
    data: json,
    });

    return new NextResponse(JSON.stringify(newMember), { status: 201 });
}
