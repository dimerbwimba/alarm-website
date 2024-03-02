import { connectToMongoDB } from "@/lib/mongodb"
import Rapport from "@/models/rapport.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"

connectToMongoDB()

export async function GET(req:Request){
    const session = await getServerSession()
    try {
        if (session) {
            const rapports = await Rapport.find()
            return NextResponse.json({ rapports, message: "Tu vien de recevoi tout les rapports avec success", error: false })
        }
    
        return NextResponse.json({ message: "Anauthorized ", error: true })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true })
    }
}
