import { SearchContainer } from "./Courses/SearchContainer"
import { CourseContainer } from "../../components/CourseCatalog/CourseContainer"
import { useState, useEffect } from "react"
import { Calendar } from './Calendar/Calendar.jsx'
import { showEnrollments, createEnrollment, deleteEnrollment } from "../../services/student.js"
import './course-enrollment.css'

export const CourseEnrollment = ({ user }) => {
  const [enrollments, setEnrollments] = useState([])
  const [showSearch, setShowSearch] = useState(true)
  const { student } = user

  useEffect(() => {
    const showAllEnrollments = async (id) => {
      const allEnrollments = await showEnrollments(id)
      setEnrollments(allEnrollments)
    }
    showAllEnrollments(student.student_id)
  }, [])

  const addCourseEnrollment = async (courseId) => {
    console.log(courseId)
    await createEnrollment(student.student_id, courseId)
    const allEnrollments = await showEnrollments(student.student_id)
    setEnrollments(allEnrollments)
  }

  const dropCourseEnrollment = async (enrollmentId) => {
    await deleteEnrollment(student.student_id, enrollmentId)
    const allEnrollments = await showEnrollments(student.student_id)
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

  const toggleView = () => {
    setShowSearch(!showSearch)
  }
  return (
    <main className="course-enrollment">
      <div className="enrollment-handler">
        <button className="toggle-button" onClick={toggleView}>
          {showSearch ? "Show My Enrollments" : "Search for Courses"}
        </button>
        {showSearch ?
          <SearchContainer addButton={addButton} /> :
          <CourseContainer
            className="enrollment"
            courses={enrollments}
            text='No courses added to your enrollment yet!'
            button={dropButton} />
        }
      </div>
      <div className="calendar-handler">
        <p>My Schedule</p>
        <Calendar />
      </div>
    </main>
  )
}