import { getServerSession } from "next-auth";
import HeroSection from "@/models/hero_section.model";
import { NextResponse } from "next/server";
import { connectToMongoDB } from "@/lib/mongodb";

connectToMongoDB()

export async function GET() {
    const session = await getServerSession()
    if (session) {
        const sections = await HeroSection.find()

        return NextResponse.json({ sections, message: "Data Uploaded successfully", error: false })
    }
    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}

export async function POST(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const heroSection = {
            ...body,
        }
        const newSection = await HeroSection.create(heroSection)

        return NextResponse.json({ newHeroSection: newSection, message: "Tu vien de crée une nouvel hero section", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}

export async function PUT(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const updatedSection = await HeroSection.findByIdAndUpdate({ _id: body._id }, { $set: { ...body} }, { new: true },).select("-_id")

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}