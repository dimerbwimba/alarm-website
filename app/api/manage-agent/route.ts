import { connectToMongoDB } from "@/lib/mongodb"
import Agent from "@/models/agent.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

connectToMongoDB()


export async function GET(req:Request){
    const session = await getServerSession()
    if (session) {
        const agents = await Agent.find()
        return NextResponse.json({ agents, message: "Tu vien de recevoi tout les agents avec success", error: false })
    }

    return NextResponse.json({ message: "Anauthorized ", error: true })
}


export async function POST(req: Request) {
    const session = await getServerSession()
    if (session) {
        const body = await req.json()
        const agent = {
            ...body,
        }
        const newAgent = await Agent.create(agent)

        return NextResponse.json({ newAgent: newAgent, message: "Tu vien de crée une nouvel agent", error: false })
    }

    return NextResponse.json({ message: "Anauthorized", error: true })


}

export async function PUT(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const updatedSection = await Agent.findByIdAndUpdate({ _id: body._id }, { $set: { ...body} }, { new: true },).select("-_id")

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}