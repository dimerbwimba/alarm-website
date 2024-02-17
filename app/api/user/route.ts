import { connectToMongoDB } from "@/lib/mongodb";
import User from "@/models/user.model";
import { NextResponse } from "next/server";

connectToMongoDB()

export async function POST(req:Request) {
    const data = await req.json();
      try {
       return  NextResponse.json(data)
      } catch (error) {
        console.error('Error creating user:', error);
        // res.status(500).json({ message: 'Failed to create user' });
      }
 
  }