import { Button } from "../../screens/sandbox/Button"

export const CourseCard = ({ className, course, button }) => {
    const { department_display, name, description, instructor_display } = course
    return (
        <div className={`${className}-course-card`}>
            <p>{department_display}</p>
            <p>{name}</p>
            <p>{description}</p>
            <p>{instructor_display}</p>
            {button ? <Button onClick={button.function} text={button.text} /> : null}
        </div>
    )
}
