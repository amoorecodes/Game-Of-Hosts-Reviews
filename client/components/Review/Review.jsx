import React, {Component} from 'react';
import review from './styles.css';

const Review = (props) => {

  // Do server request for user info on component did mount? Or retrieve it on a App level? 
  
  return (
    <div className={review.main}>
      <img className={review.avatar} src={/*props.userId.pic*/"https://a0.muscache.com/im/pictures/8810f287-340d-4681-aabf-e6e38bff7e73.jpg?aki_policy=profile_x_medium"} />
      <div className={review.username}>{/*props.review.userId.name*/"Aranovski"}</div>
      <span className={review.date}>{props.review.dateCreated}</span>
      <div className={review.body} >{props.review.body}</div>
    </div>
  )
}

export default Review;