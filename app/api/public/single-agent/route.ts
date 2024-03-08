import { connectToMongoDB } from "@/lib/mongodb";
import Cv from "@/models/cv.model";
import mongoose from "mongoose";
import { NextRequest, NextResponse } from "next/server";

connectToMongoDB()

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const id = searchParams.get('id') as string
  
  try {
      const objId = new mongoose.Types.ObjectId(id);
        const cv = await Cv.findOne({agent:objId});
        if (cv) {
          return NextResponse.json({ cv, message: "Tu viens de recevoir le CV d'un agent", error: false });
        } else {
          return NextResponse.json({ message: "CV not found", error: true });
        }
     
    } catch (error:any) {
        return NextResponse.json({ message: error.message, error: true });
    }
}
