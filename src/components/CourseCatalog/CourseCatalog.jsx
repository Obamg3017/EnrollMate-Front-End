import { FilterContainer } from './FilterContainer.jsx'
import { CourseContainer } from './CourseContainer.jsx'
import { useState, useEffect } from 'react'
import { showCourses } from '../../services/student.js'
import './course-catalog.css'

export const CourseCatalog = ({ query }) => {
  const [courseResults, setCourseResults] = useState([])

  const filtersDetails = {
    department: ['Computer Science', 'Biology', 'Chemistry', 'English', 'Mathematics', 'Physics', 'Economics', 'Political Science', 'History', 'Education']
  }

  useEffect(() => {
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
    searchCourses(query)
  }, [query])

  const filterCourses = (filterForm) => {
    const filteredCourses = courseResults.filter((course) => {
      for (let key in filterForm) {
        if (filterForm[key] && filterForm[key] !== course[key + '_display']) {
          return false
        }
      }
      return true
    })
    setCourseResults(filteredCourses)
  }

  return (
    <main className='course-catalog'>
      <FilterContainer
        filtersDetails={filtersDetails}
        filterCourses={filterCourses} />
      <CourseContainer
        className="course-catalog"
        courses={courseResults}
        text='Search or filter your search.'
        button={null} />
    </main>
  )
}