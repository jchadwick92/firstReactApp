import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header.js'
import StarRating from './StarRating/StarRating.js'
import ListHotels from './ListHotels/ListHotels.js'
import AddReviewForm from './AddReviewForm/AddReviewForm.js'
import AddRatingForm from './AddRatingForm/AddRatingForm.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <ListHotels />
        <AddReviewForm />
      </div>
    );
  }
}

export default App;
