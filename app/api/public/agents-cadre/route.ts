import { connectToMongoDB } from "@/lib/mongodb";
import Agent from "@/models/agent.model";
import MissionVision from "@/models/mission_vission.model";
import { NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req:Request){

    try {
        const agents = await Agent.find({type_agent:"agent-cadre"})
        return NextResponse.json({agents, error:false})
    } catch (error:any) {
        return NextResponse.json({message:error.message, error:true})
    }
}