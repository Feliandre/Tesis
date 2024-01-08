import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server'

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
    const id = params.id
    const getPlan = await prisma.plan.findUnique({
    where: {
        id: parseInt(id, 10)
    }
    })
    if (getPlan) {
        return new NextResponse(JSON.stringify({
            success: "El plan se ha encontrado con éxito.",
            data: getPlan,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El plan o ID no se encuentran. Por favor, inténtelo de nuevo.", }),
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

    if (updatePlan) {
        return new NextResponse(JSON.stringify({
            success: "El plan se ha actualizado con éxito.",
            data: updatePlan,
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

    const updatePlan = await prisma.plan.update({
    where: {
        id: parseInt(id, 10)
    },
    data: json
    })

    if (updatePlan) {
        return new NextResponse(JSON.stringify({
            success: "El plan se ha actualizado con éxito.",
            data: updatePlan,
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

    const deletePlan = await prisma.plan.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    if (deletePlan) {
        return new NextResponse(JSON.stringify({
            success: "El plan se ha eliminado con éxito.",
            data: deletePlan,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "El plan o ID no existen. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }
}