/* eslint-disable no-undef */
const Rating = props => {
  const {ratingDetails, clickOnRating} = props

  const {imageUrl, id} = ratingDetails

  ratingButton = () => {
    clickOnRating(id)
  }

  return (
    <li>
      <button className="ratingButton" type="button" onClick={ratingButton}>
        <img src={imageUrl} alt="rating" />
      </button>
    </li>
  )
}
export default Rating
