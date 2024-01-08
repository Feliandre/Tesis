import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";
import bcrypt from "bcrypt";
// funciones de validación
import {validarContraseña,validarEmail} from "@/utils/functions";

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
    try {
    const json = await request.json();

    // Validar contraseña
    const errores_password = await validarContraseña(json.password);
    const errores_email = await validarEmail(json.email);

    const errores = [];
    if (errores_password.length > 0) {
        errores.push(...errores_password); // Agrega los errores de contraseña
    }
    if (errores_email) {
        errores.push(...errores_email); // Agrega los errores de email
    }

    if (errores.length > 0) {
        return new NextResponse(JSON.stringify({ error: errores }), { status: 400 });
    }

    // Hashear la contraseña antes de crear el usuario
    const hashedPassword = await bcrypt.hashSync(json.password, 10);

    // Antes de enviar la contraseña a la base ponerla hasheada dentro del json
    json.password = hashedPassword;

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

    if (newUsuario) {
        return new NextResponse(JSON.stringify({
            success: "El usuario se ha creado con éxito.",
            data: newUsuario,
        }), { status: 201 });
    }

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }

}
