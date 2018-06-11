import React, { Component } from 'react';
import Rating from './../Rating/Rating.jsx';
import list from './styles.css';

const RatingsList = (props) => {
  return(
    <div className={list.outer} >
      <span className={list.left} >
      <Rating rating={props.accuracy} category="Accuracy" />
      <Rating rating={props.communication} category="Communication" />
      <Rating rating={props.cleanliness} category="Cleanliness" />
      </span>
      <span className={list.right} > 
      <Rating rating={props.location} category="Location" />
      <Rating rating={props.checkIn} category="CheckIn" />
      <Rating rating={props.value} category="Value" />
      </span>
    </div>
  )
}

export default RatingsList;