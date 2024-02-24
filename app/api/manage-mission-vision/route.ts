import { connectToMongoDB } from "@/lib/mongodb"
import MissionVision from "@/models/mission_vission.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

connectToMongoDB()

export async function GET() {
    const session = await getServerSession()
    if (session) {
        const sections = await MissionVision.find()

        return NextResponse.json({ sections, message: "Data Uploaded successfully", error: false })
    }
    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}

export async function POST(req: Request) {
    const session = await getServerSession()
    if (session) {
        const body = await req.json()
        const mission_vission = {
            ...body,
        }
        const newVisionMission = await MissionVision.create(mission_vission)

        return NextResponse.json({ newVisionMission: newVisionMission, message: "Tu vien de crée une nouvel Vision & Section", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}

export async function PUT(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const updatedSection = await MissionVision.findByIdAndUpdate({ _id: body._id }, { $set: { ...body} }, { new: true },).select("-_id")

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}