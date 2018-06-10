import React, {Component} from 'react';
import review from './styles.css';

const Review = (props) => {

  // Do server request for user info on component did mount? Or retrieve it on a App level? 

  
  return (
    <div>
      <img className={review.avatar} src={/*props.userId.pic*/"https://a0.muscache.com/im/pictures/8810f287-340d-4681-aabf-e6e38bff7e73.jpg?aki_policy=profile_x_medium"} />
      <h4>{/*props.review.userId.name*/"Aranovski"}</h4>
      <h5>{props.review.dateCreated}</h5>
      <p>{props.review.body}</p>
    </div>
  )
}

export default Review;