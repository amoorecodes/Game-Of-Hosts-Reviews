import React from 'react';
import rating from './styles.css';

const Rating = (props) => {
    // let stars = Array.apply("hello", 5);
    let stars = [1,2,3,4,5]
    return (
      
      <div className={rating.outer}>
      {props.count && props.count + " Reviews "}
      {props.category}
        <div className={rating.main} >
        {stars.map((star, index) => {
          // console.log('props',props, 'index', index, 'test', (index<props.stars))
        return index < props.rating ? <span className={rating.filled_star} ><i key={index} class="fas fa-star"></i></span> : <span className={rating.empty_star} ><i key={index} class="fas fa-star"></i></span>
        })}
        </div>
      </div>
    )
}

export default Rating; 


{/*

*/}
 {/*<div className={rating.star} key={index}>☆</div>*/} 