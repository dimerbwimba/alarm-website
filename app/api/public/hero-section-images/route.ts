import { connectToMongoDB } from "@/lib/mongodb";
import HeroImages from "@/models/hero_images.model";
import { NextResponse } from "next/server";
connectToMongoDB()
export async function GET(req:Request){

    try {
        const hero_section_images = await HeroImages.find()
        return NextResponse.json({hero_section_images, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}