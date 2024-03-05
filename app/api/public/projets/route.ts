import { connectToMongoDB } from "@/lib/mongodb"
import Projet from "@/models/projet.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

connectToMongoDB()

export async function GET() {
    try {
            const projects = await Projet.find()

            return NextResponse.json({ projects, message: "Data Uploaded successfully", error: false })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }

}