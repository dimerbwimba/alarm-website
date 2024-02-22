import HeroImages from "@/models/hero_images"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"


export async function GET(req:Request){
    const session = await getServerSession()
    
    if (session) {
        const images = await HeroImages.find()
        return NextResponse.json({images, message:"Images found successfully", error:false})
    }

    return NextResponse.json({message:"You're not allow to see this page", error:true})

}

export async function POST(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const updatedSection = await HeroImages.create({...body})

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}

export async function DELETE(req:NextRequest){
    const session = await getServerSession()
    
    if (session) {
        const id = req.nextUrl.searchParams.get('Id') as string;  
        await HeroImages.deleteOne({_id:id})
        return NextResponse.json({message:" Image a ete effacé avec succe", error:false})
    }

    return NextResponse.json({message:"You're not allow to see this page", error:true})

}