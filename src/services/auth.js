const BASE_URL = import.meta.env.VITE_ENVIRONMENT === 'production' ? import.meta.env.VITE_PRODUCTION : import.meta.env.VITE_DEVELOPMENT

const handleResponse = async (response) => {
    const json = await response.json()
    if (!response.ok) {
        throw new Error(json.error)
    }
    return json
}

const storeTokenAndGetUser = async (token, student) => {
    localStorage.setItem('token', token)
    const thisStudent = { student }
    return thisStudent
}

// export const getUser = () => {
//     const token = localStorage.getItem("token")
//     if (!token) return null
//     const user = JSON.parse(atob(token.split('.')[1]))
//     return user
// }

export const studentSignUp = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/students/register`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        )
        const data = await handleResponse(response)
        const user = await storeTokenAndGetUser(data.access, data.student)
        console.log(user)
        return user
    } catch (error) {
        console.error('Student Sign Up Error:', error)
        throw error
    }
}

export const studentSignIn = async (formData) => {
    try {
        const response = await fetch(`${BASE_URL}/users/login`,
            {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            }
        )
        const data = await handleResponse(response)
        const user = await storeTokenAndGetUser(data.access)
        return user
    } catch (error) {
        console.error('Student Sign In Error:', error)
        throw error
    }
}