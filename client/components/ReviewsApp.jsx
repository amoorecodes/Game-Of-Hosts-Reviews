import React, { Component } from 'react';
import { render } from 'react-dom';

class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      whatever: ""
    }
  };

  render() {
    return(
      <div>
        Hello. This is a review section. Take a snapshot, it would be funny in 2 weeks.
      </div>
    );
  };
};

export default ReviewsApp;