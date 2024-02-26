import Cv from "@/models/cv.model";
import mongoose from "mongoose";
import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const session = await getServerSession();
  if (session) {
    const id = req.nextUrl.searchParams.get('id') as string;
    const objId = new mongoose.Types.ObjectId(id);
    const cv = await Cv.findOne({agent:objId}).populate('agent');
    if (cv) {
      return NextResponse.json({ cv, message: "Tu viens de recevoir le CV d'un agent", error: false });
    } else {
      return NextResponse.json({ message: "CV not found", error: true });
    }
  }

  return NextResponse.json({ message: "Unauthorized", error: true });
}

export async function PUT(req: Request) {
    const session = await getServerSession()


    if (session) {
        const body = await req.json()
        const updatedSection = await Cv.findByIdAndUpdate({ _id: body._id }, { $set: { ...body} }, { new: true },).select("-_id")

        return NextResponse.json({updatedSection, message: "Votre modification a été enregistré avec succès", error: false })
    }

    return NextResponse.json({ message: "Something went wrong on the server", error: true })


}