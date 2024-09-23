const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

const handleResponse = async (response) => {
    const json = await response.json()
    if (!response.ok) {
        throw new Error(json.error)
    }
    return json
}

export const showCourses = async () => {
    try {
        const response = await fetch(`${BASE_URL}/students/courses`)
        const allCourses = await handleResponse(response)
        return allCourses
    } catch (error) {
        console.error('Error getting all courses: ', error)
        throw error
    }
}

export const showEnrollments = async (studentId) => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/students/${studentId}/enrollments`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
        const allEnrollments = await handleResponse(response)
        return allEnrollments
    } catch (error) {
        console.error('Error getting all enrollments: ', error)
    }
}

export const createEnrollment = async (studentId, courseId) => {
    try {
        console.log(studentId, courseId)
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/students/${studentId}/enrollments`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            },
            body: JSON.stringify({ "course_id": courseId }),
        })
        if (!response.ok) {
            const errorDetails = await response.json()
            console.error(errorDetails)
        }
    } catch (error) {
        console.error('Error creating this enrollment: ', error)
    }
}

export const deleteEnrollment = async (studentId, enrollmentId) => {
    try {
        const token = localStorage.getItem("token")
        const response = await fetch(`${BASE_URL}/students/${studentId}/enrollments/${enrollmentId}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }
        })
    } catch (error) {
        console.error('Error creating this enrollment: ', error)
    }
}