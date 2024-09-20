import { CourseCard } from "./CourseCard"

export const CourseContainer = ({ className, courses, text, button }) => {
  return (
    <div className={`${className}-course-container`}>
      {courses ?
        <>
          {courses.map((course) => {
            return <CourseCard
              key={course.name + course.instructor}
              className={className}
              course={course}
              button={button} />
          }
          )}
        </>
        :
        <p>{text}</p>
      }
    </div>
  )
}

