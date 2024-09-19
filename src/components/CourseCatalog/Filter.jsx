import { FilterOption } from "./FilterOption"

export const Filter = ({ filterType, filterOptions }) => {
    plural = filterType + 's'
    filterOptions = []
    return (
        <div className={filterType + '-filter'}>
            <label for={filterType + '-select'}>Choose a {filterType}:</label>
            <select name={plural} id={filterType + '-select'}>
                <option value=''>--Select a {filterType} option--</option>
                {filterOptions.map((option) => {
                    return <FilterOption optionWord={option} />
                })}
            </select>
        </div>
    )
}
