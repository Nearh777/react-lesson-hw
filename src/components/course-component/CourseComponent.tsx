import { ICourseModel } from "../../models/ICourseModel";
import {FC} from "react";


type PropsType = {
    course: ICourseModel;
}

export const CourseComponent: FC<PropsType> = ({course}) => {
    return (
        <li className='text-center text-white  bg-indigo-600 rounded-full ... hover:bg-sky-700 ... w-45 h-15'>
            {course.title} {course.monthDuration}
        </li>
    );
};