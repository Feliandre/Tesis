import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const getGym = await prisma.gym.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    return NextResponse.json(getGym)
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateGym = await prisma.gym.update({
    where: {
        id: parseInt(id, 10)
    },
    data: {
        ruc: json.ruc, //|| null,
        nombre: json.nombre, //|| null,
        direccion: json.direccion, //|| null,
        telefono: json.telefono, // || null
        email: json.email //|| null
    }
    })

    return NextResponse.json(updateGym)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateGym = await prisma.gym.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    return NextResponse.json(updateGym)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id

    const deleteGym = await prisma.gym.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    return NextResponse.json(deleteGym)
}