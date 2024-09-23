import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./landing-page.css"

export const LandingPage = ({ setQuery }) => {
  const [input, setInput] = useState("")
  const navigate = useNavigate();


  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = () => {
    setQuery(input)
    navigate("/courses");
  }


  // return (
  //   <div>
  //     <h1>
  //       <span>Search</span> EnrollMate
  //     </h1>
  //     <div>
  //       <input
  //         type="text"
  //         value={input}
  //         onChange={handleChange}
  //         placeholder="search by name, department, or instructor"
  //       />
  //       <button onClick={handleClick}>
  //         <span>🔍</span>
  //       </button>
  //     </div>
  //   </div>
  // );
 return (
   <div className="landing-page-container">
     <div className="landing-content">
       <h1 className="landing-title">
         <span className="search-text">Search</span> EnrollMate
       </h1>
       <div className="search-bar-container">
         <input
           type="text"
           className="search-input"
           value={input}
           onChange={handleChange}
           placeholder="Department, Course, Instructor"
         />
         <button className="search-button" onClick={handleClick}>
           <span className="search-icon">🔍</span>
         </button>
       </div>
     </div>
   </div>
 );
}


