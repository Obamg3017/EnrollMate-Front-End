import { SearchBar } from "./SearchBar.jsx"
import { CourseContainer } from "../../../components/CourseCatalog/CourseContainer.jsx"
import { useState, useEffect } from "react"

export const SearchContainer = ({addButton}) => {
  const [courseResults, setCourseResults] = useState(null)

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
      setButtonState(true)
    } else setCourseResults(allCourses)
  }

  return (
    <div className="search-container">
      <SearchBar
        handleSearch={searchCourses} />
      <CourseContainer
        className='student-search'
        courses={courseResults}
        text='Search for your desired course.'
        button={button} />
    </div>
  )
}
