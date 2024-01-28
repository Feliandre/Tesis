import { NextRequest, NextResponse } from "next/server";
import { messages } from "@/utils/messages";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { prisma } from "@/libs/prisma";

export async function POST(request: NextRequest) {
  try {

    const json = await request.json();
    // Extraer correo electrónico y contraseña del body
    const { email, password } = json;

    // Validamos que se envien todos los campos
    if (!email || !password) {
      return NextResponse.json(
        { message: messages.error.needProps },
        { status: 400 }
      );
    }

    // Buscar usuario por correo electrónico
    const userFind = await prisma.usuario.findUnique({
      where: {
          email,
      },
  });

    // Validamos que exista el usuario por el correo
    if (!userFind) {
      return NextResponse.json(
        { message: messages.error.userNotFound },
        { status: 400 }
      );
    }

    const isCorrect: boolean = await bcrypt.compare(
      password,
      userFind.password
    );

    // Validamos que la contraseña sea la correcta
    if (!isCorrect) {
      return NextResponse.json(
        { message: messages.error.incorrectPassword },
        { status: 400 }
      );
    }

    const { password: userPass, ...rest } = userFind; // Accede a todas las propiedades

    const token = jwt.sign({ data: rest }, "secreto", {
      expiresIn: 86400,
    });

    const response = NextResponse.json(
      { userLogged: rest, message: messages.success.userLogged },
      { status: 200 }
    );

    response.cookies.set("auth_cookie", token, {
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 86400,
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { message: messages.error.default, error },
      { status: 500 }
    );
  }
}