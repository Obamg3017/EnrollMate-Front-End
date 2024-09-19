import { Filter } from "./Filter"
import { useEffect, useState } from "react"

export const FilterContainer = (filters, filterCourses) => {
    // these filters will be passed to filterCourses function
    // filters should be updated as a use selects a filter from the dropdown menus
    // the key will be the filtertype and the value will be the selected value
    const [filters, setFilters ] = useState({})
    return (
        <div className="filter-container">
            {filters.map((filter) => {
                return <Filter filter={filter}/>
            })}
        </div>
    )
}
