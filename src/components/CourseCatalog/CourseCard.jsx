
export const CourseCard = ({ course }) => {
    const { department_display, name, description, instructor_display } = course
    return (
        <div className="course-card">
            <p>{department_display}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{instructor_display}</p>
        </div>
    )
}
