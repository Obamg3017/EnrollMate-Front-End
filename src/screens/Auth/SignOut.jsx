import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SignOut = ({ setStudent, student }) => {

    const navigate = useNavigate()

    useEffect(() => {
        const signOut = () => {
            setStudent(null)
            localStorage.removeItem('token')
            localStorage.removeItem('student')
            navigate('/')
        }
        signOut()
    }, [])
    return (
        <>
        {student == null ? <p>Setting user to null...</p> : <p>Navigating to home...</p>}
        </>
    )
}
