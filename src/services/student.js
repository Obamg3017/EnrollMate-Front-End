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