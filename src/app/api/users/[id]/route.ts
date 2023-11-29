import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const getUsuario = await prisma.usuario.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    return NextResponse.json(getUsuario)
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateUsuario = await prisma.usuario.update({
    where: {
        id: parseInt(id, 10)
    },
    data: {
        nombre: json.nombre || null,
        apellido: json.apellido || null,
        email: json.email || null,
        password: json.password || null,
        confirm_password: json.confirm_password || null
    }
    })

    return NextResponse.json(updateUsuario)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateUsuario = await prisma.usuario.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    return NextResponse.json(updateUsuario)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id

    const deleteUsuario = await prisma.usuario.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    return NextResponse.json(deleteUsuario)
}