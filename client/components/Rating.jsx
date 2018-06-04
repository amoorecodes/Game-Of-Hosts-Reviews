import React from 'react';

const Rating = (props) => {
    // let stars = Array.apply("hello", 5);
    let stars = [1,2,3,4,5]
    return (
      <div>
      {props.count} Reviews
        <div>
        {stars.map((star, index) => {
          // console.log('props',props, 'index', index, 'test', (index<props.stars))
          return index < props.stars ? <div key={index}>★</div> : <div key={index}>☆</div>
        })}
        </div>
      </div>
    )
}

export default Rating;