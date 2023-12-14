import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const getPlan = await prisma.plan.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    return NextResponse.json(getPlan)
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updatePlan = await prisma.plan.update({
    where: {
        id: parseInt(id, 10)
    },
    data: {
        nombre: json.nombre, //|| null,
        descripcion: json.descripcion, //|| null,
        valor: json.valor, //|| null,
        duracion: json.duracion // || null
    }
    })

    return NextResponse.json(updatePlan)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updatePlan = await prisma.plan.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    return NextResponse.json(updatePlan)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id

    const deletePlan = await prisma.plan.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    return NextResponse.json(deletePlan)
}