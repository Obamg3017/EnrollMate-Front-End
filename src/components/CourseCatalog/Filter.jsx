export const Filter = ({ filterKey, filterOptions, handleSelect, filterForm }) => {
    const capitalized = filterKey.charAt(0).toUpperCase() + filterKey.slice(1)
    return (
        <div className={`${filterKey}-filter`}>
            <label htmlFor={`${filterKey}-select`}>Choose a {filterKey}:</label>
            <select
                name={filterKey}
                id={`${filterKey}-select`}
                onChange={handleSelect}
                value={filterForm[filterKey]}>
                <option value=''>----{capitalized + 's'}----</option>
                {filterOptions.map((option, index) => {
                    return <option key={index} value={option}>{option}</option>
                })}
            </select>
        </div>
    )
}