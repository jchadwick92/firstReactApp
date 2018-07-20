import React from 'react';

class StarRating extends React.Component {
  // state = {
  //   starCount: 3,
  // }

  addStar = () => {
    const oldStarCount = this.props.value;
    let newStarCount = oldStarCount + 1
    if (newStarCount > 5) { newStarCount = 5}
    this.props.onChange(newStarCount);
  }
  
  removeStar = () => {
    const oldStarCount = this.props.value;
    let newStarCount = oldStarCount - 1
    if (newStarCount < 0) { newStarCount = 0 }
    this.props.onChange(newStarCount);
  }

  render() {
    const starCount = this.props.value;

    let stars = '';
    for (let i = 0; i < starCount; i++) {
      stars += '⭐️ ';
    }
    return (
      <div className="StarRating">
        <button onClick={this.removeStar}>-</button>
        { stars }
        <button onClick={this.addStar}>+</button>
      </div>
    )
  }
}

export default StarRating;