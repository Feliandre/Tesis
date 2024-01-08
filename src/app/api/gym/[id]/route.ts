import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const id = params.id
    const getGym = await prisma.gym.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    if (getGym) {
        return new NextResponse(JSON.stringify({
            success: "El gym se ha encontrado con éxito.",
            data: getGym,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "No se encontró el registro. Por favor, inténtelo de nuevo.", }),
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

    if (updateGym) {
        return new NextResponse(JSON.stringify({
            success: "El gym se ha actualizado con éxito.",
            data: updateGym,
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

    const updateGym = await prisma.gym.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    if (updateGym) {
        return new NextResponse(JSON.stringify({
            success: "El gym se ha actualizado con éxito.",
            data: updateGym,
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

    const deleteGym = await prisma.gym.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    if (deleteGym) {
        return new NextResponse(JSON.stringify({
            success: "El gym se ha eliminado con éxito.",
            data: deleteGym,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El gym o ID no existen. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}