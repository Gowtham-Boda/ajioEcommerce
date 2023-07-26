// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {details} = props
  const {title, imageUrl, brand, price, rating} = details

  return (
    <div className="similar-product-container">
      <img
        src={imageUrl}
        alt="similar product"
        className="similar-product-image"
      />
      <p>{title}</p>
      <p>by {brand}</p>
      <div className="price-rating-container">
        <p>Rs {price}/-</p>
        <p className="rating-container">
          {rating}
          <img
            className="rating-star"
            src="https://assets.ccbp.in/frontend/react-js/star-img.png"
            alt="star"
          />
        </p>
      </div>
    </div>
  )
}

export default SimilarProductItem
