import React, { Component } from 'react';
import { render } from 'react-dom';
import axios from 'axios';

class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingID: 7
      reviews: []
    }
  };

  fetchReviews(listingID) {

  }

  componentDidMount() {

  }

  render() {
    return(
      <div>
        Hello. This is a review section. Take a snapshot, it would be funny in 2 weeks.
      </div>
    );
  };
};

export default ReviewsApp;