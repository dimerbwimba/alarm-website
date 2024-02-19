import { connectToMongoDB } from "@/lib/mongodb"
import User from "@/models/user.model"
import { getServerSession } from "next-auth"
import { NextResponse } from "next/server"
import incrypt from "bcrypt"
connectToMongoDB()

export async function GET(req:Request){
    const session = await getServerSession()
    if (session) {
        const {searchParams} = new URL(req.url);
        const userId = searchParams.get("userId");
        const user = await User.findById({_id:userId}).select("-password")
        return NextResponse.json({user, message:"User found successfully", error:false})
    }

    return NextResponse.json({message:"You're not allow to see this page", error:true})

}
export async function PUT(req:Request){
     
     const session = await getServerSession()
     if (session) {
         const body = await req.json()
         const password = await incrypt.hash(body.password,10)
        const user = await User.findByIdAndUpdate({_id:body._id},{$set:{...body, password:password}},{ new: true },).select("-password")
        return NextResponse.json({user, message:"User updated successfully", error:false})
     }

     return NextResponse.json({message:"You're not allow perform this action", error:true})
}

export async function DELETE(req:Request){
    const session = await getServerSession()
    if (session) {
        const {searchParams} = new URL(req.url);
        const id = searchParams.get("id");
        await User.deleteOne({_id:id})
        return NextResponse.json({message:"User deleted successfully", error:false})
    }

    return NextResponse.json({message:"You're not allow perform this action", error:true})
}