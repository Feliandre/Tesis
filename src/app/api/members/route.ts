import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET(request: NextRequest) {
    // Paginacion
    const skip = request.nextUrl.searchParams.get("skip");
    const take = request.nextUrl.searchParams.get("take");
    const members = await prisma.member.findMany({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json(members);
}

export async function POST(request: Request) {
    const json = await request.json();

    try {
    const newMember = await prisma.member.create({
        data: {
            ...json,
            plan: {
                connect: {
                    id: json.plan || 1, // Tambien se debe poner por default el plan y si no se especifica va el que es por defecto
                },
            },
        },
    });

    if (newMember) {
        return new NextResponse(JSON.stringify({
            success: "El miembro se ha creado con éxito.",
            data: newMember,
        }), { status: 201 });
    }



    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }

}
