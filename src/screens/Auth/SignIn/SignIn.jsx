import { useState } from "react";
import { useNavigate } from "react-router";
import { studentSignIn } from "../../../services/auth"
import { Link } from "react-router-dom";
import "./sign-in.css"

export const SignIn = ({ setStudent }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSignIn = async (event) => {
    event.preventDefault();
    const student = await studentSignIn(formData);
    setStudent(student);
    navigate("/students/dashboard");
  };

  return (
    <div className="sign-up-container-two">
      <h2>Sign In!</h2>
      <form className="sign-up-form" autoComplete="off" onSubmit={handleSignIn}>
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
        <button className="submit-button" type="submit">
          Sign In
        </button>
        <span className="signup-span">
          Don't have an account?
          <Link to="/students/register" className="already-sign-in">
            Sign Up
          </Link>
        </span>
      </form>
    </div>
  );
};
