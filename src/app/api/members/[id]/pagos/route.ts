import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const getPagos = await prisma.pago.findMany({
    where: {
        miembroId: Number(params.id),
    },
    });
    if (getPagos) {
        return new NextResponse(JSON.stringify({
            success: "Los pagos se han encontrado con éxito.",
            data: getPagos,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Los pagos no se encuentran. Por favor, inténtelo de nuevo.", }),
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

    const newPago = await prisma.pago.create({
    data: {
        ...json,
        miembroId: Number(params.id),
    },
    });

    if (newPago) {
        return new NextResponse(JSON.stringify({
            success: "El pago se ha creado con éxito.",
            data: newPago,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}
