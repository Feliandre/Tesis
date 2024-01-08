import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params: { id, asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    try {
    const miembro = await prisma.asistencia.findFirst({
        where: {
        id: Number(asistenciaId),
        miembroId: Number(id)
        }
    })
    if (miembro) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha encontrado con éxito.",
            data: miembro,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "No se encuentra la asistencia o ID. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function PUT(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    try {
    const json = await request.json()
    const updateAsistencia = await prisma.asistencia.update({
        where: {
        id: parseInt(asistenciaId, 10)
        },
        data: {
        fecha: json.fecha //|| null,
        }
        })
    if (updateAsistencia) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha actualizado con éxito.",
            data: updateAsistencia,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function PATCH(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    try {
    const json = await request.json()
    const updateAsistencia = await prisma.asistencia.update({
        where: {
        id: Number(asistenciaId)
        },
        data: json
    })
    if (updateAsistencia) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha actualizado con éxito.",
            data: updateAsistencia,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function DELETE(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    try {
    const deleteAsistencia = await prisma.asistencia.delete({
        where: {
        id: Number(asistenciaId)
        }
    })
    if (deleteAsistencia) {
        return new NextResponse(JSON.stringify({
            success: "La asistencia se ha eliminado con éxito.",
            data: deleteAsistencia,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "No existe la asistencia o ID. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}