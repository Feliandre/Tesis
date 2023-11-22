import { NextResponse } from "next/server"
import {prisma} from '@/libs/prisma'

export async function GET () {

    try {
        const usuarios = await prisma.usuario.findMany()
        return NextResponse.json(usuarios)

    } catch (error) {
        if (error instanceof Error) {
        return NextResponse.json({
            message: error.message
        },{
            status:500,
        });
        }
    }
}


export async function POST(request: Request) {
    const json = await request.json()

    const newUsuario = await prisma.usuario.create({
        data: json
    })

    return new NextResponse(JSON.stringify(newUsuario), { status: 201 })
}

