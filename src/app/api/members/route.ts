import { NextResponse } from "next/server"
import {prisma} from '@/libs/prisma'

export async function GET () {

    try {
        const members = await prisma.member.findMany()
        return NextResponse.json(members)

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

    const newMember = await prisma.member.create({
        data: json
    })

    return new NextResponse(JSON.stringify(newMember), { status: 201 })
}

