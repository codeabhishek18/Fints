'use client'

import { useEffect, useState } from 'react';
import styles from './styles.module.css' 
import axios from "axios";
import { useParams, useRouter } from 'next/navigation';
import CourseDetail from '@/app/components/courseDetail/CourseDetail';
import Footer from '@/app/components/footer/Footer';
import fints from '@/assets/fints.png'
import Image from 'next/image';
import ShimmerCourseDetail from '@/app/components/shimmerCourseDetail/shimmerCourseDetail';
import { useScheme } from '@/contextapi/SchemeProvider';
import Switch from '@/app/components/switch/Switch';

const Course = () =>
{
    const [ courseData, setCourseData ] = useState(null);
    const { courseId } = useParams();
    const router = useRouter();
    const { scheme } = useScheme();
    
    useEffect(()=>
    {
        getCourses();
    },[]);

    const getCourses = async () =>
    {
        try
        {
            const url = `/api/course/${courseId}`
            const response = await axios.get(url);
            setCourseData(response.data.course);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    return(
        <div className={scheme === 'dark' ? styles.wrapper : `${styles.wrapper} ${styles.light}`}>
            <div className={styles.navbar}>
                <Image className={styles.fints} src={fints} alt='fints' onClick={()=> router.push('/')}/>
                <Switch/>
            </div>
            <div className={styles.container}>
                {courseData ?
                <CourseDetail course={courseData}/> :
                <ShimmerCourseDetail/>}
            </div>
            <Footer/>
        </div>
    )
    
}

export default Course