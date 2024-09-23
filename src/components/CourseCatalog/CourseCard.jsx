
export const CourseCard = ({ className, course, button }) => {
    const { id, department_display, name, description, instructor_display } = course
    const handleClick = () => {
        button.function(id)
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
