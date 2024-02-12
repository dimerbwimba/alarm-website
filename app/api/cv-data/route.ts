import { NextRequest, NextResponse } from "next/server";

interface DataObject {
    [key: string]: any;
}

const Data: DataObject = require("@/data/data.json");

export async function GET(req:NextRequest){
    const name = req.nextUrl.searchParams.get('name') as string;    
    return NextResponse.json({data : Data[`${name}`] as any})
}