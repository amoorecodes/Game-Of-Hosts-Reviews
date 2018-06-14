import React, { Component } from 'react';
import Rating from './../Rating/Rating.jsx';
import list from './styles.css';

const RatingsList = (props) => {
  return(
    <div className={list.outer} >
      <div className={list.left} >
        <div className={list.left_cat}>
          <div>Accuracy</div>
          <div>Communication</div>
          <div>Cleanliness</div>
        </div>
        <div className={list.left_rating}>
          <Rating rating={props.accuracy} />
          <Rating rating={props.communication} />
          <Rating rating={props.cleanliness} />
        </div>
      </div>
      <div className={list.right} > 
        <div className={list.right_cat}>
          <div>Location</div>
          <div>Check-In</div>
          <div>Value</div>
        </div>
        <div className={list.right_rating}>
          <Rating rating={props.location} />
          <Rating rating={props.checkIn} />
          <Rating rating={props.value} />
        </div>
      </div>
    </div>
  )
}

export default RatingsList;