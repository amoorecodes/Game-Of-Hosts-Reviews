import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 7,
      reviews: [],
      communication: null,
      location: null,
      checkIn: null,
      cleanliness: null,
      value: null,
      accurace: null,
      average: null
    }
    this.fetchReviews = this.fetchReviews.bind(this);
    this.calcAverage = this.calcAverage.bind(this);
    this.averageRating = this.averageRating.bind(this);
  };

  fetchReviews(listingId) {
    axios.get(`/api/reviews?listingId=${listingId}`)
    .then(((data) => {
      // console.log('data', data)
      this.setState({
        reviews: data.data
        });
        console.log('state', this.state);
      }))
      .then(() => this.calcAverage("communication"))
      .then(() => console.log('state in axios', this.state))
      .catch(err => console.log('there was an error in fetching reviews ', err));
  }

  calcAverage(category) {
    let result = this.state.reviews;
    console.log('results', result)
    result.map(rev => {
      rev = rev[category]
    }).reduce((a,b) => ((a+b)/2));
    result = Math.round(result);

    this.setState({
      [category]: result
    });
  }

  averageRating() {
    let total = Math.round(((this.state.communication + this.state.location + this.state.checkIn + this.state.cleanliness + this.state.value + this.state.accuracy) / 6));
    this.setState({
      average: total
    });

  }

  componentDidMount() {
    this.fetchReviews(7);
    // this.calcAverage("communication");
    // this.calcAverage("location");
    // this.calcAverage("checkIn");
    // this.calcAverage("cleanliness");
    // this.calcAverage("value");
    // this.calcAverage("accuracy");
    // this.averageRating();
    console.log('state', this.state)

  }

  render() {
    return(
      <div>
        Hello. This is a review section. Take a snapshot, it would be funny in 2 weeks.
        Also, {this.state.reviews.length}
      </div>
    );
  };
};

export default ReviewsApp;