import { connectToMongoDB } from "@/lib/mongodb";
import User from "@/models/user.model";
import incrypt from "bcrypt"
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
connectToMongoDB()

export async function GET(req:Request){
    const session = await getServerSession()
    
    if (session) {
        const users = await User.find().select("-password")
        return NextResponse.json({users, message:"User found successfully", error:false})
    }

    return NextResponse.json({message:"You're not allow to see this page", error:true})

}

export async function POST(req:Request){
    const session = await getServerSession()
    
    if (session) {
        const body = await req.json()
        const user = {
            ...body,
            password: await incrypt.hash(body.password,10)
        }

        const newUser = await User.create(user)
        return NextResponse.json({newUser:newUser, message:"Vous avez ajouter un utilisateur avec succès", error:false})
    }

    return NextResponse.json({message:"You're not allow to create a user", error:true})

}