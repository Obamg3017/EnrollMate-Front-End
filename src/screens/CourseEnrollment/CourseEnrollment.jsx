import { SearchContainer } from "./Courses/SearchContainer"
import { CourseContainer } from "../../components/CourseCatalog/CourseContainer"
import { useState, useEffect } from "react"
import { Calendar } from './Calendar/Calendar.jsx'
import { showEnrollments, createEnrollment, deleteEnrollment } from "../../services/student.js"
import './course-enrollment.css'

export const CourseEnrollment = ({ student }) => {
  const [enrollments, setEnrollments] = useState([])
  const { student_id } = student

  useEffect(() => {
    const showAllEnrollments = async (id) => {
      const allEnrollments = await showEnrollments(id)
      setEnrollments(allEnrollments)
    }
    showAllEnrollments(student_id)
  }, [])

  const addCourseEnrollment = async (courseId) => {
    await createEnrollment(student_id, courseId)
    const allEnrollments = await showEnrollments(student_id)
    setEnrollments(allEnrollments)
  }

  const dropCourseEnrollment = async (enrollmentId) => {
    await deleteEnrollment(student_id, enrollmentId)
    const allEnrollments = await showEnrollments(student_id)
    setEnrollments(allEnrollments)
  }

  let addButton = {
    function: addCourseEnrollment,
    text: 'Add Course'
  }

  let dropButton = enrollments ? {
    function: dropCourseEnrollment,
    text: 'Drop Course'
  } : null

  return (
    <main className="course-enrollment">
      {/* <div className="enrollment-handler"> */}
      <SearchContainer addButton={addButton} />
      <CourseContainer
        className="enrollment"
        courses={enrollments}
        text='No courses added to your enrollment yet!'
        button={dropButton} />
      {/* </div> */}
      {/* <Calendar /> */}
    </main>
  )
}