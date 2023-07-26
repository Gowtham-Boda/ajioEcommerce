// Write your code here
/* eslint-disable react/no-unknown-property */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsPlusSquare, BsDashSquare} from 'react-icons/bs'
import {Link} from 'react-router-dom'
import Header from '../Header'
import SimilarProductItem from '../SimilarProductItem'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class ProductItemDetails extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    productDetails: {},
    similarProducts: [],
    count: 1,
  }

  componentDidMount() {
    this.getProductDetails()
  }

  getProductDetails = async () => {
    this.setState({
      apiStatus: apiStatusConstants.inProgress,
    })

    const {match} = this.props
    const {params} = match
    const {id} = params

    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/products/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok) {
      const productDetails = {
        id: data.id,
        imageUrl: data.image_url,
        title: data.title,
        style: data.style,
        price: data.price,
        description: data.description,
        brand: data.brand,
        totalReviews: data.total_reviews,
        rating: data.rating,
        availability: data.availability,
      }

      const similarProductsList = data.similar_products.map(eachProduct => ({
        id: eachProduct.id,
        imageUrl: eachProduct.image_url,
        title: eachProduct.title,
        style: eachProduct.style,
        price: eachProduct.price,
        description: eachProduct.description,
        brand: eachProduct.brand,
        totalReviews: eachProduct.total_reviews,
        rating: eachProduct.rating,
        availability: eachProduct.availability,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        productDetails,
        similarProducts: similarProductsList,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  decrementCount = () => {
    this.setState(prevState => {
      const prevCount = prevState.count

      if (prevCount <= 1) {
        const newValue = 1
        this.setState({
          count: newValue,
        })
      } else {
        const newValue = prevCount - 1
        this.setState({
          count: newValue,
        })
      }
    })
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  renderLoadingView = () => (
    <div testid="loader" className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderDetailedProductView = () => {
    const {productDetails, count, similarProducts} = this.state
    const {
      imageUrl,
      title,
      price,
      description,
      brand,
      totalReviews,
      rating,
      availability,
    } = productDetails

    return (
      <>
        <div className="detailed-view-container">
          <img src={imageUrl} alt="product" className="product-image" />
          <div className="product-text-container">
            <h1>{title}</h1>
            <p>Rs {price}/-</p>
            <div className="horizontal">
              <p className="rating-container">
                {rating}
                <img
                  className="rating-star"
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                />
              </p>
              <p>{totalReviews} Reviews</p>
            </div>
            <p>{description}</p>
            <p>Available: {availability}</p>
            <p>Brand: {brand}</p>
            <hr />
            <div className="horizontal">
              <button
                type="button"
                testid="minus"
                onClick={this.decrementCount}
              >
                <BsDashSquare />
              </button>

              <p className="count">{count}</p>
              <button type="button" testid="plus" onClick={this.incrementCount}>
                <BsPlusSquare />
              </button>
            </div>
            <button type="button" className="add-to-cart">
              ADD TO CART
            </button>
          </div>
        </div>
        <div className="similar-products-container">
          <h1>Similar Products</h1>
          <div className="horizontal">
            {similarProducts.map(eachProduct => (
              <SimilarProductItem key={eachProduct.id} details={eachProduct} />
            ))}
          </div>
        </div>
      </>
    )
  }

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
      />
      <h1>Product Not Found</h1>
      <Link to="/products">
        <button type="button">Continue Shopping</button>
      </Link>
    </>
  )

  renderAllProducts = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderDetailedProductView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <>
        <Header />
        {this.renderAllProducts()}
      </>
    )
  }
}

export default ProductItemDetails
