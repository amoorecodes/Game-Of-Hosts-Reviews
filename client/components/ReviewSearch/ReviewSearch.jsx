import React, {Component} from 'react';
import search from './search.css';

class ReviewSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  };

  render() {
    return(
      <div className={search.main}>
        <form>
          <i className={`fas fa-search ${search.icon}`}></i>
          <input type="text" placeholder="Search reviews" />
        </form>
      </div>
    )
  }
}

export default ReviewSearch;