import React, {Component} from 'react';
import {render} from 'react-dom';

class ReviewSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  };

  render() {
    return(
      <div>
        This is a Search.
        <form>
          <img src="" />
          <input type="text" placeholder="Search reviews" />
        </form>
      </div>
    )
  }
}

export default ReviewSearch;