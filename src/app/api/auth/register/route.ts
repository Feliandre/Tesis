import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "@/libs/prisma";
import {validarEmail, validarContraseña} from '@/utils/functions';

export async function POST(request: NextRequest) {
    try {

    const json = await request.json();
    const {nombre, apellido, email, password, confirm_password} = json

    // Validar contraseña
    const errores_password = await validarContraseña(password);
    const errores_email = await validarEmail(email);

    const errores = [];
    if (errores_password.length > 0) {
        errores.push(...errores_password); // Agrega los errores de contraseña
    }
    if (errores_email) {
        errores.push(...errores_email); // Agrega los errores de email
    }

    // Validar que las contraseñas sean iguales
    if (password !== confirm_password) {
        return NextResponse.json(
        { message: messages.error.passwordsNotMatch },
        { status: 400 }
        );
    }


    if (errores.length > 0) {
        return new NextResponse(JSON.stringify({ error: errores }), { status: 400 });
    }


    const userFind = await prisma.usuario.findUnique({
        where: {
            email,
        },
    });

    if (userFind) {
        return NextResponse.json(
        { message: messages.error.emailExist },
        { status: 200 }
        );
    }

    // Hashear la contraseña antes de crear el usuario
    const hashedPassword = await bcrypt.hashSync(password, 10);


    const newUsuario = await prisma.usuario.create({
        data: {
            nombre,
            apellido,
            email,
            password:hashedPassword,
            rol: {
                connect: {
                    id: 2, // Tambien se debe poner por default el rol y si no se especifica va el que es por defecto
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

    const token = jwt.sign({ data: newUsuario }, "secreto", {
        expiresIn: 86400,
    });

    const response = NextResponse.json({
        newUsuario,
        message: "Usuario creado con éxito",
    }, {
        status: 200,
    });

    response.cookies.set("auth_cookie", token, {
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 86400,
        path: "/",
    });

    return response;

    }catch (error) {
        return new NextResponse(
            JSON.stringify({ error: "Verifique todos los campos. Por favor, inténtelo de nuevo.", }),
            { status: 400 }
        );
    }

}