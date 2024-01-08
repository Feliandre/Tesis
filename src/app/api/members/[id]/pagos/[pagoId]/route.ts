import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params: { id, pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    try {
    const getPago = await prisma.pago.findFirst({
        where: {
        id: Number(pagoId),
        miembroId: Number(id)
        }
    })
    if (getPago) {
        return new NextResponse(JSON.stringify({
            success: "El pago se ha encontrado con éxito.",
            data: getPago,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El pago o ID no se encuentran. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function PUT(
    request: Request,
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    try {
    const json = await request.json()
    const updatePago = await prisma.pago.update({
        where: {
        id: parseInt(pagoId, 10)
        },
        data: {
        fecha: json.fecha //|| null,
        }
        })
        if (updatePago) {
            return new NextResponse(JSON.stringify({
                success: "El pago se ha actualizado con éxito.",
                data: updatePago,
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
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    try {
    const json = await request.json()
    const updatePago = await prisma.pago.update({
        where: {
        id: Number(pagoId)
        },
        data: json
    })
    if (updatePago) {
        return new NextResponse(JSON.stringify({
            success: "El pago se ha actualizado con éxito.",
            data: updatePago,
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
    { params: { pagoId } }: { params: { id: string; pagoId: string } }
    ) {
    try {
    const deletePago = await prisma.pago.delete({
        where: {
        id: Number(pagoId)
        }
    })
    if (deletePago) {
        return new NextResponse(JSON.stringify({
            success: "El pago se ha eliminado con éxito.",
            data: deletePago,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El pago o ID no existen. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}