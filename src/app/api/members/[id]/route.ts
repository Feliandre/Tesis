import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const getMember = await prisma.member.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    return NextResponse.json(getMember)
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateMember = await prisma.member.update({
    where: {
        id: parseInt(id, 10)
    },
    data: {
        cedula: json.cedula, //|| null,
        nombre: json.nombre, //|| null,
        apellido: json.apellido, //|| null,
        email: json.email, //|| null,
        telefono: json.telefono, //|| null,
        telefonoEmergencia: json.telefonoEmergencia, //|| null,
        fechaNacimiento: json.fechaNacimiento, //|| null,
        sexo: json.sexo, //|| null,
        direccion: json.direccion, //|| null,
        nacionalidad: json.nacionalidad //|| null
    }
    })

    return NextResponse.json(updateMember)
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    const json = await request.json()

    const updateMember = await prisma.member.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    return NextResponse.json(updateMember)
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id

    const deleteMember = await prisma.member.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    return NextResponse.json(deleteMember)
}