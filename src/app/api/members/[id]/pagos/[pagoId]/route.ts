import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params: { id, pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    const getPago = await prisma.pago.findFirst({
        where: {
        id: Number(pagoId),
        miembroId: Number(id)
        }
    })
    return NextResponse.json(getPago)
}

export async function PUT(
    request: Request,
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    const json = await request.json()
    const updatePago = await prisma.pago.update({
        where: {
        id: parseInt(pagoId, 10)
        },
        data: {
        fecha: json.fecha //|| null,
        }
        })
    return NextResponse.json(updatePago)
}

export async function PATCH(
    request: Request,
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    const json = await request.json()
    const updatePago = await prisma.pago.update({
        where: {
        id: Number(pagoId)
        },
        data: json
    })
    return NextResponse.json(updatePago)
}

export async function DELETE(
    request: Request,
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    const deletePago = await prisma.pago.delete({
        where: {
        id: Number(pagoId)
        }
    })
    return NextResponse.json(deletePago)
}