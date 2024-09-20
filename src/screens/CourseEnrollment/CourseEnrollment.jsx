import { SearchContainer } from "./Courses/SearchContainer"
import { CourseContainer } from "../../components/CourseCatalog/CourseContainer"
import { useState } from "react"
import {Calendar} from './Calendar/Calendar.jsx'

export const CourseEnrollment = () => {
  const [enrollments, setEnrollments] = useState(null)

  const dropCourse = () => {

  }

  let dropButton = enrollments ? {
    function: dropCourse,
    text: 'Drop Course'
  } : null

  // consider -->  courseResults && courseResults.length ?
  const addCourse = async (courseId) => {

  }

  let addButton = {
    function: addCourse,
    text: 'Add Course'
  }

  return (
    <main className="course-enrollment">
      <div className="enrollment-handler">
        <SearchContainer addButton={addButton} />
        <CourseContainer
          className="enrollment"
          courses={enrollments}
          text='No courses added to your enrollment yet!'
          button={dropButton} />
      </div>
      {/* <Calendar /> */}
    </main>
  )
}