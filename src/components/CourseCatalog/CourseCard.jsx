
export const CourseCard = ({ className, course, button, enrollmentId }) => {
    const { id, department_display, department, name, description, instructor_display } = course

    const handleClick = () => {
        if (enrollmentId) {
            button.function(enrollmentId)
        } else button.function(id)
    }

    return (
        <>
            {className === 'course-catalog' ?
                <div className={`${className}-course-card`}>
                    <p>{name}</p>
                    <p>{description}</p>
                    <p>{department_display}</p>
                    <p>{instructor_display}</p>
                </div> :
                <div className={`${className}-course-card`}>
                    <p>{department}</p>
                    <div>
                        <p>{name}</p>
                        <p>{instructor_display}</p>
                    </div>
                    {button ? <button onClick={handleClick}> {button.text} </button> : null}
                </div>
            }
        </>
    )
}
