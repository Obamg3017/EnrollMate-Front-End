import { SearchContainer } from "./Courses/SearchContainer"
import { CourseContainer } from "../../components/CourseCatalog/CourseContainer"
import { StudentEnrollmentSchedule } from "./Calendar/StudentEnrollmentSchedule.jsx"
import { useState, useEffect } from "react"
import { showEnrollments, createEnrollment, deleteEnrollment } from "../../services/student.js"
import './course-enrollment.css'

export const CourseEnrollment = ({ student }) => {
  const [enrollments, setEnrollments] = useState([])
  const [showSearch, setShowSearch] = useState(true)
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

  const toggleView = () => {
    setShowSearch(!showSearch)
  }

  let view = "not"
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
        <StudentEnrollmentSchedule />
      </div>
    </main>
  )
}