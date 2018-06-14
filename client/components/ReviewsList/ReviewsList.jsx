import React, { Component } from 'react';
import Review from './../Review/Review.jsx'
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
        {/* {console.log('here;' , props.reviews)} */}
        {props.reviews.map((review, index) => {

          // {console.log('review', this.state.reviews)} 
          return <Review review={review} key={index} />
        })}
      </div>
    )
  // }
}

export default ReviewsList;