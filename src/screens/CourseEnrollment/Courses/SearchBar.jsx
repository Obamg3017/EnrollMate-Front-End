import { useState } from "react"
import { Button } from "../../sandbox/Button"

export const SearchBar = ({ handleSearch }) => {
    const [input, setInput] = useState('')

    const handleChange = (event) => {
        setInput(event.target.value)
    }

    const handleClick = () => {
        handleSearch(input)
    }

    return (
        <div className="student-search-bar">
            <input
                type="text"
                value={input}
                onChange={handleChange}
                className="student-search-input"
            />
            <button className="student-search-button" onClick={handleClick}> Search 🔎 </button>
        </div>
    )
}
