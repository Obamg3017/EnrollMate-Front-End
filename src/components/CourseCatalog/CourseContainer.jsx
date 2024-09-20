import { CourseCard } from "./CourseCard"

export const CourseContainer = ({courses}) => {
  return (
    <div className="course-container">
        {courses.map((course) => {
            return <CourseCard key={course.name + course.instructor} course={course} />
        }
        )}
    </div>
  )
}
