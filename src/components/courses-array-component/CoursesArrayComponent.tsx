import {ICourseModelArray} from "../../models/ICourseModelArray.ts";
import {FC} from "react";
import './CoursesArrayComponent.css'



type CourseListProps = {
    courses: ICourseModelArray[]
}

export const CoursesArrayComponent: FC<CourseListProps> = ({courses}) => {

    return (
        <div className="course-list">
            {
                courses.map((course, index) => (
                    <div key={index} className="course-card">
                        <h2>{course.title}</h2>
                        <p><strong>Duration (Months):</strong> {course.monthDuration}</p>
                        <p><strong>Duration (Hours):</strong> {course.hourDuration}</p>
                        <div className="modules">
                            <strong>Modules:</strong>
                            <ul>
                                {course.modules.map((module, index) => (
                                    <li key={index}>
                                        {module}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                ) )
            }
        </div>
    );
};