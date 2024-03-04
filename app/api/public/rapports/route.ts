import { connectToMongoDB } from "@/lib/mongodb"
import Rapport from "@/models/rapport.model"
import { NextResponse } from "next/server"

connectToMongoDB()

export async function GET(req:Request){
    try {
            const rapports = await Rapport.find()
            return NextResponse.json({ rapports, message: "Tu vien de recevoi tout les rapports avec success", error: false })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true })
    }
}
