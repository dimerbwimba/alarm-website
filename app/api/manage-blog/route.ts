import { connectToMongoDB } from "@/lib/mongodb";
import Blog from "@/models/blog.model"
import { getServerSession } from "next-auth"
import { NextRequest, NextResponse } from "next/server"
import slugify from "slugify";


connectToMongoDB()


export async function GET(req:Request){
    const session = await getServerSession()
    try {
        if (session) {
            const blogs = await Blog.find()
            return NextResponse.json({ blogs, message: "Tu vien de recevoi tout les blogs avec success", error: false })
        }
    
        return NextResponse.json({ message: "Anauthorized ", error: true })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true })
    }
}

export async function POST(req: Request) {
    const session = await getServerSession()
    if (session) {
        const body = await req.json()
        const slug =  slugify(body.title, { lower: true, strict: true });
        const agent = {
            slug:slug,
            ...body,
        }
        const blog = await Blog.create(agent)

        return NextResponse.json({ blog, message: "Tu vien de crée un blog", error: false })
    }

    return NextResponse.json({ message: "Anauthorized", error: true })


}

export async function DELETE(req:NextRequest){
    const searchParams = req.nextUrl.searchParams;
    const _id = searchParams.get('_id');
    const session = await getServerSession()
    try {
        if (session) {
            await Blog.deleteOne({_id:_id})
            return NextResponse.json({ message: "Blog efacer avec successe ", error: false })
        }
    
        return NextResponse.json({ message: "Anauthorized ", error: true })
        
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true })
    }
}

export async function PUT(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const slug =  slugify(body.title, { lower: true, strict: true });
        const updatedSection = await Blog.findByIdAndUpdate({ _id: body._id }, { $set: {slug:slug, ...body} }, { new: true },).select("-_id")

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}