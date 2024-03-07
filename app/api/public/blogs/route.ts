import { connectToMongoDB } from "@/lib/mongodb";
import Blog from "@/models/blog.model";
import { NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req:Request){
    try {
        const blogs = await Blog.find()
        return NextResponse.json({blogs, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}