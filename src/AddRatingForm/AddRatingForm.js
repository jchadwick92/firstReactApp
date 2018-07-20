import React, { Component } from 'react';
import StarRating from '../StarRating/StarRating.js';

class AddRatingForm extends React.Component {

  updateStarRating = (newStarRating) => {
    this.props.onChange(newStarRating);
  }

  submit = async () => {
    const payload = {
      rating: this.state.starRating,
      text: this.state.review,
    };

    const response = await fetch('http://localhost:3000/hotels/double_tree_dublin/reviews', {
      method: 'post',
      body: JSON.stringify(payload),
      headers: {
        'content-type': 'application/json',
      }
    });
    const json = await response.json();
    console.log(json);

    this.setState({starRating: 0, review: ''});
  }

  render() {
    console.log(this.state);
    const starRating = this.props.value;

    return (
        <div>
          <StarRating value={starRating} onChange={this.updateStarRating} />
          <button onClick={this.submit}>Add Review</button>
        </div>
    )
  }
}

export default AddRatingForm