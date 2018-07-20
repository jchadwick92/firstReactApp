import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating.js';


class AddReviewForm extends Component {
      state = {
    review: '',
    starRating: 1,
    }

  updateReview = (event) => {
    const textarea = event.currentTarget;
    const newReview = textarea.value;
    this.setState({review: newReview});
  }

  render() {
      console.log(this.state)
    const review = this.state.review
    return (
      <div className="AddRatingForm">
        <div>
          <p>Review:</p>
          <textarea value={review} onChange={this.updateReview} />
        </div>
        <div>
          <p>Rating:</p>
          <StarRating />
        </div>
      </div>
    )
  }
}

export default AddReviewForm