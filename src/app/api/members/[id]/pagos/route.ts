import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const getPagos = await prisma.pago.findMany({
    where: {
        miembroId: Number(params.id),
    },
    });
    return NextResponse.json(getPagos);
}

export async function POST(
    request: Request,
    { params }: { params: { id: string } }
) {
    const json = await request.json();

    const newPago = await prisma.pago.create({
    data: {
        ...json,
        miembroId: Number(params.id),
    },
    });

    return new NextResponse(JSON.stringify(newPago), { status: 201 });
}
