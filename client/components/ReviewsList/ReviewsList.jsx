import React, { Component } from 'react';
import Review from './../Review/Review.jsx';
import feed from './styles.css';

const ReviewsList = (props) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     reviews: this.props.reviews
  //   };
  // };

  // render() {
    return(
      <div>
        {props.reviews.map((review, index) => {

          // {console.log('review', this.state.reviews)} 
          // for every 7 listings it should create a button with page number
          // for every next 7 page it should create a new page. 
          // check the current page from state. If current page is 1, then dispaly form 0 to 6
          // else render 7 reviews from index (page-1)*7

          return <Review review={review} key={index} />
        })}
      </div>
    )
  // }
}

export default ReviewsList;