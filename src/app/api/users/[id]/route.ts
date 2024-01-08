import { prisma } from "@/libs/prisma";
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt";

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
        nombre: json.nombre, //|| null,
        apellido: json.apellido, //|| null,
        email: json.email, //|| null,
        password: json.password//|| null,
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
    try {
    const id = params.id

    const deleteUsuario = await prisma.usuario.delete({
    where: {
        id: parseInt(id, 10)
    }
    })

    if (deleteUsuario) {
        return new NextResponse(
            JSON.stringify({
                success: "El usuario se eliminó correctamente",
                data: deleteUsuario,
            }),
            { status: 200 }
        );
    }

    } catch(error) {
        return new NextResponse(
            JSON.stringify({ error: "El usuario o ID no existe" }),
            { status: 404 }
        )
    }
}

export async function POST(request: Request) {
    const json = await request.json();

    // Extraer correo electrónico y contraseña del body
    const { email, password } = json;

    // Buscar usuario por correo electrónico
    const usuario = await prisma.usuario.findUnique({
        where: {
            email,
        },
    });

    // Verificar si el usuario existe
    if (!usuario) {
        return new NextResponse(JSON.stringify(
            {error: "Usuario o contraseña incorrectos" }),
            {status: 401,
        });
    }

    // Comparar contraseñas
    const esValida = await bcrypt.compare(password, usuario.password);

    // Verificar si la contraseña es válida
    if (!esValida) {
        return new NextResponse(JSON.stringify(
            {error: "Usuario o contraseña incorrectos" }),
            {status: 401,
        });
    }

    return new NextResponse(JSON.stringify(
        {success: "Inicio de sesión exitoso" }),
        {status: 200,
    });
}