import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export const SignOut = ({ setStudent, user }) => {

    const navigate = useNavigate()

    useEffect(() => {
        const signOut = () => {
            setStudent(null)
            localStorage.removeItem('token')
            navigate('/')
        }
        signOut()
    }, [])
    return (
        <>
        {user ? <p>Setting user to null...</p> : <p>Navigating to home...</p>}
        </>
    )
}
