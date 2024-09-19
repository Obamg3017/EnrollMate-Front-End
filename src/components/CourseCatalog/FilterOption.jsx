
export const FilterOption = (optionWord) => {
    const optionHTMLText = optionWord.chartAt(0).toUpperCase() + optionWord.slice(1)
  return (
    <option value={optionWord}>{optionHTMLText}</option>
  )
}
