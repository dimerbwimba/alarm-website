import HeroImages from "@/models/hero_images";
import HeroSection from "@/models/hero_section.model";
import { NextResponse } from "next/server";

export async function GET(req:Request){

    try {
        const hero_section_cards = await HeroSection.find()
        const hero_section_images = await HeroImages.find()
        return NextResponse.json({hero_section_cards,hero_section_images, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}