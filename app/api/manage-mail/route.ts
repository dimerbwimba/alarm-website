import { connectToMongoDB } from "@/lib/mongodb";
import Mail from "@/models/mail.model";
import { getServerSession } from "next-auth";


connectToMongoDB()

export async function GET(){
    try {
        const session = await getServerSession()
        if (session) {
            const data = await Mail.find().sort({createdAt:-1})
            return Response.json(data)
        }
        return Response.json({message:"Unauthorized"})
    } catch (error) {
        return Response.json(error)
    }
}

export async function PUT(req:Request){
    try {
        const body:any = await req.json()
        const mail = {
            ...body,
        };

        const pId = mail._id
        const session = await getServerSession()
        if (session) {
            const data = await Mail.findOneAndUpdate({_id:pId},{read:true})
            return Response.json(data)
        }
        return Response.json({message:"Unauthorized"})
    } catch (error) {
        
    }
}