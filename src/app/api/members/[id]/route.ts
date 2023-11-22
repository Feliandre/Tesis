import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export async function GET () {
    const members = await prisma.member.findMany()
    return NextResponse.json(members)
}


export function PUT () {
    return
}

export function DELETE () {
    return
}