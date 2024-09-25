import { CourseCard } from "./CourseCard"

export const CourseContainer = ({ className, courses, text, button }) => {
  return (
    <div className={`${className}-course-container`}>
      {courses && courses.length > 0 ?
        courses[0].student ?
          <>
            {courses.map((course) => {
              return <CourseCard
                key={course.course.name + course.course.instructor}
                className={className}
                course={course.course}
                button={button}
                enrollmentId={course.id} />
            })}
          </> :
          <>
            {courses.map((course) => {
              return <CourseCard
                key={course.name + course.instructor}
                className={className}
                course={course}
                button={button} />
            }
            )}
          </> :
        <p>{text}</p>
      }
    </div>
  )
}

