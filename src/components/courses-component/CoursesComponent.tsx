import {coursesAndDurationArray} from "../../data/data.ts";
import { CourseComponent } from "../course-component/CourseComponent.tsx";
import {ICourseModel} from "../../models/ICourseModel.ts";

export const CoursesComponent = () => {
    return (
        <div className='grid grid-flow-col grid-rows-3 gap-4'>
            {
                coursesAndDurationArray.map((course: ICourseModel, index) => {
                    return <CourseComponent course={course} key={index} />;
                })
            }
        </div>
    );
};