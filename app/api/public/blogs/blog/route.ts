import { connectToMongoDB } from "@/lib/mongodb";
import Blog from "@/models/blog.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";
import { object } from "zod";

connectToMongoDB()

export async function GET(req:NextRequest){
    const { searchParams } = new URL(req.url)
    const slug = searchParams.get('slug')
    
    try {    
        const blog = await Blog.findOne({slug:slug})
        return NextResponse.json({blog, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}