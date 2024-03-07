import { connectToMongoDB } from "@/lib/mongodb";
import Blog from "@/models/blog.model";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req:NextRequest){
    try {
        const searchParams = await req.nextUrl.searchParams;
        const _id = searchParams.get('_id');

        const blog = await Blog.findOne({_id:_id})
        return NextResponse.json({blog, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}