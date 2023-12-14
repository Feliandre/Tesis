import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const asistencias = await prisma.asistencia.findMany({
    where: {
        miembroId: Number(params.id),
    },
    });
    return NextResponse.json(asistencias);
}

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    const json = await request.json();

    const newAsistencia = await prisma.asistencia.create({
    data: {
        ...json,
        miembroId: Number(params.id),
    },
    });

    return new NextResponse(JSON.stringify(newAsistencia), { status: 201 });
}
