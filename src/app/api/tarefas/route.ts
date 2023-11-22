import Tarefas from "@/app/(models)/Tarefas";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const tarefas = await Tarefas.find()
        return NextResponse.json({ tarefas }, { status: 200 })
    } catch(error) {
        return NextResponse.json({ message: 'ERROR', error }, { status: 500 })
    }
}