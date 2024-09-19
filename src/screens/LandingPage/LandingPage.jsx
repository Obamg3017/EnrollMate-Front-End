import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./landing-page.css"


export const LandingPage = () => {
const [input, setInput] = useState("")
const navigate = useNavigate();


const handleChange = (event) => {
  setInput(event.target.value)
}

const handleClick = () =>{
  navigate("/courses");
}


  return (
    <div>
      <h1>
        <span>Search</span> EnrollMate
      </h1>
      <div>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="serach by name, department, or instructor"
        />
        <button onClick={handleClick}>
          <span>🔍</span>
        </button>
      </div>
    </div>
  );
}


