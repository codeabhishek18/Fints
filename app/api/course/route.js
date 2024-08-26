import dbConnect from "@/dbConfig/dbConnect";
import { Course } from "@/models/course.model";
import { NextResponse } from "next/server";

dbConnect()

export async function GET(params) 
{
    try
    {
        const courses = await Course.find({});
        if(!courses)
            throw new Error('Courses not found')
        return NextResponse.json({courses});
    }    
    catch(error)
    {
        return NextResponse.json({error})
    }
}