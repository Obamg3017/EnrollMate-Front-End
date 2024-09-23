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
        <div className="search-bar">
            <input
                type="text"
                value={input}
                onChange={handleChange}
            />
            <button onClick={handleClick}> Search 🔎 </button>
        </div>
    )
}
