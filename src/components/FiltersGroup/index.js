/* eslint-disable no-unused-vars */
import './index.css'

const FiltersGroup = props => {
  const {categoryDetails, filterItems} = props

  const {name, categoryId} = categoryDetails
  const clickOnCategory = () => {
    filterItems(categoryId)
  }

  return (
    <li className="filters-group-container">
      <div className="button-container">
        <button className="button" type="button" onClick={clickOnCategory}>
          {name}
        </button>
      </div>
    </li>
  )
}
export default FiltersGroup
