import { SearchBar } from "./SearchBar.jsx"
import { CourseContainer } from "../../../components/CourseCatalog/CourseContainer.jsx"
import { useState, useEffect } from "react"
import { showCourses } from '../../../services/student.js'

export const SearchContainer = ({ addButton, enrollments }) => {
  const [courseResults, setCourseResults] = useState([])

  let button = courseResults ? addButton : null

  const filterNonEnrollments = (courses, enrollments) => {
    if (enrollments.length > 0) {
      return courses.filter((course) => {
        return !enrollments.some((enrollment) => enrollment.course.id === course.id)
      })
    } else return courses

  }
  const searchCourses = async (search) => {
    const allCourses = await showCourses()
    if (search) {
      const courses = allCourses.filter(
        (course) =>
          course.name.toLowerCase().includes(search.toLowerCase()) ||
          course.department_display.toLowerCase().includes(search.toLowerCase()) ||
          course.instructor_display.toLowerCase().includes(search.toLowerCase()))
      const nonEnrollments = filterNonEnrollments(courses, enrollments)
      setCourseResults(nonEnrollments)
    } else {
      const nonEnrollments = filterNonEnrollments(allCourses, enrollments)
      setCourseResults(nonEnrollments)
    }
  }

  return (
    <>
      <div className="student-search-container">
        <SearchBar
          handleSearch={searchCourses} />
        <CourseContainer
          className='student-search'
          courses={courseResults}
          text='Search for your desired course.'
          button={button} />
      </div>
    </>
  )
}
