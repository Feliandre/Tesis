import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const asistencias = await prisma.asistencia.findMany({
    where: {
        miembroId: Number(params.id),
    },
    });
    if (asistencias) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha encontrado con éxito.",
            data: asistencias,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "La asistencia no se encuentra. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const json = await request.json();

    const newAsistencia = await prisma.asistencia.create({
    data: {
        ...json,
        miembroId: Number(params.id),
    },
    });

    if (newAsistencia) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha creado con éxito.",
            data: newAsistencia,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}
