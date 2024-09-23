import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { studentSignUp } from "../../../services/auth"
import { Link } from "react-router-dom"
import "./sign-up.css"

export const SignUp = ({ setStudent }) => {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: '',
        confirmPassword: ''
    })

    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
    }

    const handleSignUp = async (event) => {
        event.preventDefault()
        if (event.target.password.value !== event.target.confirmPassword.value) {
            alert('Passwords do not match')
            return
        }
        const student = await studentSignUp(formData)
        setStudent(student)
        navigate('/students/dashboard')
    }

    return (
      <div className="sign-up-container">
        <h2>Sign Up!</h2>
        <form className="sign-up-form" autoComplete="off" onSubmit={handleSignUp}>
          <div className="input-container">
            <label className="signup-label" htmlFor="name">
              Full Name:
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label className="signup-label" htmlFor="username">
              Username:
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label className="signup-label" htmlFor="password">
              Password:
            </label>
            <input
              id="password"
              name="password"
              type="text"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="confirmPassword" className="signup-label">
              Confirm Password:
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="text"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
          <span className="signup-span">
            Already have an account?{" "}
            <Link to="/users/login" className="already-sign-in">
              Sign In
            </Link>
          </span>
        </form>
      </div>
    );
}
