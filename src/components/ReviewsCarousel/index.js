import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {review: 0}

  onClickLeftArrow = () => {
    const {review} = this.state
    const value = review === 0 ? 0 : review - 1
    this.setState({review: value})
  }

  onClickRightArrow = () => {
    const {review} = this.state
    const {reviewsList} = this.props
    const value = review === reviewsList.length - 1 ? review : review + 1
    this.setState({review: value})
  }

  render() {
    const {reviewsList} = this.props
    const {review} = this.state
    const reviewObj = reviewsList[review]
    const {imgUrl, username, companyName, description} = reviewObj
    return (
      <div className="reviews-app-bg-container">
        <h1 className="reviews-heading">Reviews</h1>
        <img src={imgUrl} alt={username} className="profile" />
        <div className="arrows-container">
          <button
            type="button"
            className="button"
            data-testid="leftArrow"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
            />
          </button>
          <p className="user-name">{username}</p>
          <button
            type="button"
            className="button"
            data-testid="rightArrow"
            onClick={this.onClickRightArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
            />
          </button>
        </div>
        <p className="company-name">{companyName}</p>
        <p className="description">{description}</p>
      </div>
    )
  }
}

export default ReviewsCarousel
