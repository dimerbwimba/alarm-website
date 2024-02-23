import { connectToMongoDB } from "@/lib/mongodb";
import MissionVision from "@/models/mission_vission.model";
import { NextResponse } from "next/server";
connectToMongoDB()
export async function GET(req:Request){

    try {
        const mission_vision = await MissionVision.find()
        return NextResponse.json({mission_vision:mission_vision[0], error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}