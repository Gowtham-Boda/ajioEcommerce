import Cookies from 'js-cookie'
import {Redirect, Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => {
  const jwtToken = Cookies.get('jwt_token')
  if (jwtToken === undefined) {
    return <Redirect to="/login" />
  }

  return (
    <>
      <Header />
      <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">
            Welcome, Buddy continue your journey with us...
          </h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
            AJIO, a fashion and lifestyle brand, is Reliance Retails digital
            commerce initiative and is the ultimate fashion destination for
            styles that are handpicked, on trend and at prices that are the best
            you will find anywhere.AJIO provides you with the most trendy and
            the freshest fashion trends from international brands around the
            world to your wardrobe. If you want head turning and one of a kind
            styles then AJIO is there to help you in picking best outfits.
          </p>
          <Link to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </Link>
        </div>
        <img
          src="https://res.cloudinary.com/dltof1ccv/image/upload/v1673352170/-473Wx593H-469046189-black-MODEL_nqfmzg.jpg"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
    </>
  )
}

export default Home
