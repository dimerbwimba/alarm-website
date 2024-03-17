import { connectToMongoDB } from "@/lib/mongodb";
import Projet from "@/models/projet.model";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB();

export async function GET(req: NextRequest) {
    const session = await getServerSession();
    const _id = await req.nextUrl.searchParams.get('_id') as string;
    const id = new mongoose.Types.ObjectId(_id);
    try {
        if (session) {
            const project = await Projet.findById(id);
            return NextResponse.json({ project, message: "Data found successfully", error: false });
        }
        return NextResponse.json({ message: "Unauthorized", error: true });
    } catch (error:any) {
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
            const project = {
                ...body,
            };
            const _id = project._id

            delete project._id
            
            const newproject = await Projet.findOneAndUpdate(
                { _id: _id },
                {
                   ...project
                },
                { new: true, upsert: true }
            )
    
            return NextResponse.json({ project: newproject, message: "Tu viens de modifié un project avec success ", error: false });
        } catch (error: any) {
            return NextResponse.json({ message: error.message, error: true });
        }
    
}
