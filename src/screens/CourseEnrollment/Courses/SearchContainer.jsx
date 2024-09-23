import { SearchBar } from "./SearchBar.jsx"
import { CourseContainer } from "../../../components/CourseCatalog/CourseContainer.jsx"
import { useState, useEffect } from "react"
import { showCourses } from '../../../services/student.js'

export const SearchContainer = ({ addButton }) => {
  const [courseResults, setCourseResults] = useState([])

  let button = courseResults ? addButton : null

  const searchCourses = async (search) => {
    const allCourses = await showCourses()
    if (search) {
      const courses = allCourses.filter(
        (course) =>
          course.name.toLowerCase().includes(search.toLowerCase()) ||
          course.department_display.toLowerCase().includes(search.toLowerCase()) ||
          course.instructor_display.toLowerCase().includes(search.toLowerCase()))
      setCourseResults(courses)
    } else setCourseResults(allCourses)
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
