import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";

export async function GET(request: NextRequest) {
    // Paginacion
    const skip = request.nextUrl.searchParams.get("skip");
    const take = request.nextUrl.searchParams.get("take");
    const usuarios = await prisma.usuario.findMany({
        skip: skip ? parseInt(skip, 10) : undefined,
        take: take ? parseInt(take, 10) : undefined,
    });
    return NextResponse.json(usuarios);
}

export async function POST(request: Request) {
    const json = await request.json();

    // Hashear la contraseña despues de crear el usuario
    const hashedPassword = await bcrypt.hashSync(json.password, 10);
    const hashedConfirmPassword = await bcrypt.hashSync(json.confirm_password, 10);


    // Verifica que password y confirm_password no sean diferentes
    if (json.password !== json.confirm_password) {
        return new NextResponse(JSON.stringify(
            { error: "Las contraseñas no coinciden" }),
            { status: 400 });
    }

    // Antes de enviar la contraseña a la base ponerla hasheada dentro del json
    json.password = hashedPassword;
    json.confirm_password = hashedConfirmPassword;

    const newUsuario = await prisma.usuario.create({
        data: {
            ...json,
            rol: {
                connect: {
                    id: json.rol || 2, // Tambien se debe poner por default el rol y si no se especifica va el que es por defecto
                },
            },
        },
    });

    return new NextResponse(JSON.stringify(newUsuario), { status: 201 });
}
