import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params: { id, asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    const miembro = await prisma.asistencia.findFirst({
        where: {
        id: Number(asistenciaId),
        miembroId: Number(id)
        }
    })
    return NextResponse.json(miembro)
}

export async function PUT(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    const json = await request.json()
    const updateAsistencia = await prisma.asistencia.update({
        where: {
        id: parseInt(asistenciaId, 10)
        },
        data: {
        fecha: json.fecha //|| null,
        }
        })
    return NextResponse.json(updateAsistencia)
}

export async function PATCH(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    const json = await request.json()
    const updateAsistencia = await prisma.asistencia.update({
        where: {
        id: Number(asistenciaId)
        },
        data: json
    })
    return NextResponse.json(updateAsistencia)
}

export async function DELETE(
    request: Request,
    { params: { asistenciaId } }: { params: { id: string; asistenciaId: string } }
    ) {
    const deleteAsistencia = await prisma.asistencia.delete({
        where: {
        id: Number(asistenciaId)
        }
    })
    return NextResponse.json(deleteAsistencia)
}