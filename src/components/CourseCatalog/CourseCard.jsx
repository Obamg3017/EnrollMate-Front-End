
export const CourseCard = ({ className, course, button, enrollmentId }) => {
    const { id, department_display, name, description, instructor_display } = course
    const handleClick = () => {
        if (enrollmentId) {
            button.function(enrollmentId)
        } else button.function(id)
    }

    return (
        <div className={`${className}-course-card`}>
            <p>{department_display}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{instructor_display}</p>
            {button ? <button onClick={handleClick}> {button.text} </button> : null}
        </div>
    )
}
