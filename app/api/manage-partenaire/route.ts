import { NextResponse } from "next/server";
import Departement from "@/models/departement.model";
import { getServerSession } from "next-auth";
import { connectToMongoDB } from "@/lib/mongodb";
import Partenaire from "@/models/partenaire.model";


connectToMongoDB()

export async function GET() {
    try {
        const session = await getServerSession()
        if (session) {
            const partenaires = await Partenaire.find()

            return NextResponse.json({ partenaires, message: "Data Uploaded successfully", error: false })
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
        const partenaire = {
            ...body,
        };
        delete partenaire._id
        partenaire.isUpdated = true
        const newPartenaire = await new Partenaire(partenaire).save();

        return NextResponse.json({ partenaire: newPartenaire, message: "Tu viens de créer un nouveau partenaire", error: false });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}

export async function PUT(req: Request) {
    try {
        const session = await getServerSession();
        if (!session) {
            return NextResponse.json({ message: "Unauthorized", error: true });
        }

        const body = await req.json();
        const partenaire = {
            ...body,
        };

        const pId = partenaire._id

        delete partenaire._id

        const newPartenaire = await Partenaire.findOneAndUpdate(
            { _id: pId },
            {
               ...partenaire
            },
            { new: true, upsert: true }
        )

        return NextResponse.json({ newPartenaire, message: "Tu viens de modifié un departement avec success ", error: false });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}