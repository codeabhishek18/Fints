import { Course } from "@/models/course.model.js";
import { Lecture } from "@/models/lecture.model";

class courseService
{
    async create(id, title, description, price, offerPrice, imageURL, level)
    {
        try
        {
            console.log(id, title, description, price, offerPrice, imageURL, level)
            const newCourse = await Course.create({id, title,description, price, offerPrice, imageURL, level})
            return await newCourse.save();
        }
        catch(error)
        {
            throw error
        }
    }

    async findAll()
    {
        try
        {
            const courses = await Course.find({});
            return courses
        }
        catch(error)
        {
            throw error
        }
    }

    async findById(id)
    {
        try
        {
            const course = await Course.findOne({id}).populate({path: 'lectures', model: Lecture})
            return course
        }
        catch(error)
        {
            throw error
        }
    }

    async addLecture(courseId, lectureId)
    {
        try
        {
            return await Course.findByIdAndUpdate(courseId, {$push: {lectures: lectureId}})
        }
        catch(error)
        {
            throw error
        }
    }
}

export default courseService