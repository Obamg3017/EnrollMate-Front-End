
export const CourseCard = (course) => {
    const { department, name, description, instructor } = course
    return (
        <div className="course-card">
            <p>{department}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{instructor}</p>
        </div>
    )
}
