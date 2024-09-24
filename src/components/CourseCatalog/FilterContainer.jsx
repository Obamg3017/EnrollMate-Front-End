import { Filter } from "./Filter"
import { useEffect, useState } from "react"

export const FilterContainer = ({ filtersDetails, filterCourses, clearFilters }) => {
    const [filterForm, setFilterForm] = useState({
        department: '',
        time: '',
    })
    const filterKeys = Object.keys(filtersDetails)

    const handleSubmit = (event) => {
        event.preventDefault()
        filterCourses(filterForm)
    }

    const handleSelect = (event) => {
        setFilterForm({ ...filterForm, [event.target.name]: event.target.value })
    }

    const handleClear = () => {
        clearFilters()
    }

    return (
        <div className="filter-container">
            <form onSubmit={handleSubmit}>
                {filterKeys.map((filterKey) => {
                    return <Filter
                        key={`${filterKey}-filter`}
                        filterKey={filterKey}
                        filterOptions={filtersDetails[filterKey]}
                        handleSelect={handleSelect}
                        filterForm={filterForm} />
                })}
                <button>Apply Filters</button>
            </form>
            <button onClick={handleClear}>Clear Filters</button>
        </div>
    )
}