import { connectToMongoDB } from "@/lib/mongodb"
import Projet from "@/models/projet.model"
import Rapport from "@/models/rapport.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

connectToMongoDB()

export async function GET() {
    try {
        const session = await getServerSession()
        if (session) {
            const projects = await Projet.find()

            return NextResponse.json({ projects, message: "Data Uploaded successfully", error: false })
        }
        return NextResponse.json({ message: "Unauthorized", error: true })
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }

}

export async function POST(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: "Unauthorized", error: true });
        }

        const body = await req.json();
        const rapport = {
            ...body,
        };
        console.log(rapport)
        const newRapport = await new Projet(rapport).save();

        return NextResponse.json({ rapport: newRapport, message: "Tu viens de créer un nouveau partenaire", error: false });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}