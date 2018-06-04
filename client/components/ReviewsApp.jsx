import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';
import Rating from './Rating.jsx';
import ReviewSearch from './ReviewSearch.jsx';

class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 7,
      reviews: [],
      communication: 1,
      location: 1,
      checkIn: 1,
      cleanliness: 1,
      value: 1,
      accuracy: 1,
      average: 1
    }
    this.fetchReviews = this.fetchReviews.bind(this);
    // this.calcAverage = this.calcAverage.bind(this);
    // this.averageRating = this.averageRating.bind(this);
  };

  fetchReviews(listingId) {
    axios.get(`/api/reviews?listingId=${listingId}`)
    .then(((data) => {
      this.setState({
        reviews: data.data
        });
        // console.log('state inside fetch app', data.data);
      }))
      .then(() => {
        axios.get(`/api/reviews/avg`)
          .then((data) => {
            const avg = data.data[0];
            const total = (avg.averageAcc + avg.averageCheck + avg.averageClean + avg.averageCom + avg.averageLoc + avg.averageValue)/6
            // console.log('inside avg axios', this.state)
            this.setState({
              communication: Math.round(avg.averageCom),
              location: Math.round(avg.averageLoc),
              checkIn: Math.round(avg.averageCheck),
              cleanliness: Math.round(avg.averageClean),
              value: Math.round(avg.averageValue),
              accuracy: Math.round(avg.averageAcc),
              average: Math.round(total)
            });
          })
          .then(() => {console.log('final state in fetch ', this.state)})
        })
      .catch(err => console.log('there was an error in fetching reviews ', err));
  }
  // averageRating() {
  //   let total = Math.round(((this.state.communication + this.state.location + this.state.checkIn + this.state.cleanliness + this.state.value + this.state.accuracy) / 6));
  //   this.setState({
  //     average: total
  //   });
  // }

  componentDidMount() {
    this.fetchReviews(7);
  };

  render() {
    return(
      <div>
        Hello. This is a review section. Take a snapshot, it would be funny in 2 weeks.
        Also, {this.state.reviews.length}
        <Rating stars={4} count={this.state.reviews.length}/>
        <ReviewSearch />
      </div>
    )
  };
};

export default ReviewsApp;