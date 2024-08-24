import dbConnect from "@/dbConfig/dbConnect";
import { NextResponse } from "next/server";
import courseService from "@/services/course.service";
const courseInstance = new courseService();
import lectureService from "@/services/lecture.service";
const lectureInstance = new lectureService();

dbConnect()

export async function GET(req, {params}) 
{
    try
    {
        const { courseId } = params
        const course = await courseInstance.findById(courseId)
        return NextResponse.json({course, status: 200})
    }
    catch(error)
    {
        return NextResponse.json({error: error})
    }
} 

export async function PUT(req, {params}) 
{
    try
    {
        const { courseId } = params
        const { description, duration } = await req.json(); 
        
        const lectureId = await lectureInstance.create(description, duration)
        await courseInstance.addLecture(courseId, lectureId);
        return NextResponse.json({message: 'Lecture added'})
    }
    catch(error)
    {
        return NextResponse.json({error: error})
    }
} 
