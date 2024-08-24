import dbConnect from "@/dbConfig/dbConnect";
import { NextResponse } from "next/server";
import courseService from "@/services/course.service";
const courseInstance = new courseService();
import { v2 as cloudinary } from 'cloudinary';

dbConnect()

export async function POST(req) 
{
    try
    {
        const { title, description, price, offerPrice, imageURL, level }  = await req.json();
        const id = title.toLowerCase().split(' ').join('-')

            cloudinary.config({ 
            cloud_name: 'dzuaagm1a', 
            api_key: '571988555226261', 
            api_secret: 'AwXer8ckGTMRpRMOB2sjE0NN5Tw'
        });
    
        const uploadResult = await cloudinary.uploader
        .upload(imageURL, 
            {
               public_id: id,
            }
        )
        .catch((error) => 
        {
           console.log(error);
        });

        await courseInstance.create(id, title, description, price, offerPrice, uploadResult.url, level);
        return NextResponse.json({message: 'Course added'})
    }
    catch(error)
    {
        return NextResponse.json({error: error})
    }
} 

export async function GET(params) 
{
    try
    {
        const courses = await courseInstance.findAll();
        return NextResponse.json({courses, sttau: 200});
    }    
    catch(error)
    {
        return NextResponse.json({error})
    }
}