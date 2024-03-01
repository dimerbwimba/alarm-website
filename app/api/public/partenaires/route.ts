import { connectToMongoDB } from "@/lib/mongodb";
import Departement from "@/models/departement.model";
import Partenaire from "@/models/partenaire.model";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req: NextRequest) {
    
    try {
        const partenaires = await Partenaire.find();
        return NextResponse.json({ partenaires, message: "Tu viens de recevoir les partenaire", error: false });
       
     
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}
