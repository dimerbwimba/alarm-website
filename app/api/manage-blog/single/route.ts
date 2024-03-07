import { connectToMongoDB } from "@/lib/mongodb"
import Blog from "@/models/blog.model"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"

connectToMongoDB()
export async function GET(req:NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const _id = searchParams.get('_id');
    const session = await getServerSession()
    try {
        if (session) {
            const blog = await Blog.findOne({_id:_id})
            return NextResponse.json({ blog, message: "Tu vien de recevoi tout les blogs avec success", error: false })
        }
    
        return NextResponse.json({ message: "Anauthorized ", error: true })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true })
    }
}