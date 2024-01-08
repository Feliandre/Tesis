import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const id = params.id
    const getMember = await prisma.member.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })

    if (getMember) {
        return new NextResponse(JSON.stringify({
            success: "El miembro se ha encontrado con éxito.",
            data: getMember,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El miembro o ID no se encuentran. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}

export async function PUT(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
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

    if (updateMember) {
        return new NextResponse(JSON.stringify({
            success: "El miembro se ha actualizado con éxito.",
            data: updateMember,
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
    { params }: { params: { id: string } }
) {
    try {
    const id = params.id
    const json = await request.json()

    const updateMember = await prisma.member.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    if (updateMember) {
        return new NextResponse(JSON.stringify({
            success: "El miembro se ha actualizado con éxito.",
            data: updateMember,
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
    { params }: { params: { id: string } }
) {
    try {
    const id = params.id

    const deleteMember = await prisma.member.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    if (deleteMember) {
        return new NextResponse(JSON.stringify({
            success: "El gym se ha eliminado con éxito.",
            data: deleteMember,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El miembro o ID no existen. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}