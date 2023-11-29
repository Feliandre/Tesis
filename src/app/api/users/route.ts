import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: NextRequest) {
    // Paginacion
    const skip = request.nextUrl.searchParams.get("skip");
    const take = request.nextUrl.searchParams.get("take");
    const usuarios = await prisma.usuario.findMany({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json(usuarios);
}

export async function POST(request: Request) {
    const json = await request.json();

    const newUsuario = await prisma.usuario.create({
    data: json,
    });

    return new NextResponse(JSON.stringify(newUsuario), { status: 201 });
}
