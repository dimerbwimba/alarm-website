import { NextResponse } from "next/server";
import Departement from "@/models/departement.model";
import { getServerSession } from "next-auth";
import { connectToMongoDB } from "@/lib/mongodb";


connectToMongoDB()

export async function GET() {
    try {
        const session = await getServerSession()
        if (session) {
            const departements = await Departement.find()

            return NextResponse.json({ departements, message: "Data Uploaded successfully", error: false })
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
        const departement = {
            ...body,
        };

        const newDepartement = await new Departement(departement).save();

        return NextResponse.json({ departement: newDepartement, message: "Tu viens de créer une nouvelle section", error: false });
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
        const departement = {
            ...body,
        };

        const newDepartement = await Departement.findOneAndUpdate(
            { _id: departement._id },
            {
                name: departement.name,
                roles: departement.roles
            },
            { new: true, upsert: true }
        )

        return NextResponse.json({ departement: newDepartement, message: "Tu viens de créer une nouvelle section", error: false });
    } catch (error: any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}