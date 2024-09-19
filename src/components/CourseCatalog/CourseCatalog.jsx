import { FilterContainer } from './FilterContainer.jsx'
import { CourseContainer } from './CourseContainer.jsx'
import { useState, useEffect } from 'react'
import { showCourses } from '../../services/student.js'

export const CourseCatalog = (query) => {
  const [courseResults, setCourseResults] = useState(null)

  useEffect(() => {
    const searchCourses = async (search) => {
      const allCourses = await showCourses()
      if (search) {
        const courses = allCourses.filter(
          course => course.name.toLowerCase().includes(search.toLowerCase()) || 
          course.department.toLowerCase().includes(search.toLowerCase()) || 
          course.instructor.toLowerCase().includes(search.toLowerCase()))
          setCourseResults(courses)
      } else setCourseResults(allCourses)
    }
    searchCourses(query)
  }, [])

  // const filterCourses = (filters) => {}

  return (
    <main className='course-catalog'>
      {/* <FilterContainer filters={filters} filterCourses={filterCourses} /> */}
      <CourseContainer courses={courseResults} />
    </main>
  )
}