import { connectToMongoDB } from "@/lib/mongodb";
import Departement from "@/models/departement.model";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req: NextRequest) {
    
    try {
        const departements = await Departement.find();
        return NextResponse.json({ departements, message: "Tu viens de recevoir le CV d'un agent", error: false });
       
     
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}
