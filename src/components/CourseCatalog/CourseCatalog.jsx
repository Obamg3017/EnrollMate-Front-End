import { FilterContainer } from './FilterContainer.jsx'
import { CourseContainer } from './CourseContainer.jsx'
import { useState, useEffect } from 'react'
import './course-catalog.css'

export const CourseCatalog = ({ query, allCourses }) => {
  const [courseResults, setCourseResults] = useState(null)

  const filtersDetails = {
    department: ['Computer Science', 'Biology', 'Chemistry', 'English', 'Mathematics', 'Physics', 'Economics', 'Political Science', 'History', 'Education'],
    instructor: ['Dr. Alan Turing', 'Prof. Emmy Noether', 'Dr. Albert Einstein', 'Dr. Marie Curie', 'Prof. Howard Zinn', "Dr. Sarah Johnson", "Prof. Michael Lee", "Dr. Emily Davis", "Prof. Robert Brown", "Dr. Jessica Martinez", "Prof. William Smith", "Dr. Jennifer Wilson", "Prof. David Anderson", "Dr. Angela Thomas", "Prof. Christopher Harris"]
  }

  const searchCourses = (courses, searchTerm) => {
    if (searchTerm) {
      const searchResults = courses.filter(
        (course) =>
          course.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.department_display.toLowerCase().includes(searchTerm.toLowerCase()) ||
          course.instructor_display.toLowerCase().includes(searchTerm.toLowerCase())
      )
      return searchResults
    } else return courses
  }

  const clearFilters = () => {
    const courses = searchCourses(allCourses, query)
    setCourseResults(courses)
  }

  useEffect(() => {
    clearFilters()
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
        filterCourses={filterCourses}
        clearFilters={clearFilters} />
      <CourseContainer
        className="course-catalog"
        courses={courseResults}
        text='Search or filter your search.'
        button={null} />
    </main>
  )
}