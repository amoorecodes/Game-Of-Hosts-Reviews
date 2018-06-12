import React, {Component} from 'react';
import search from './search.css';

class ReviewSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  };

  updateInput(eve) {
    // e.preventDefault();
    this.setState({
      query: eve.target.value
    });
  };

  render() {
    return(
      <div className={search.main}>
        <form onSubmit={(event) => { this.props.filter(event)}} >
          <i className={`fas fa-search ${search.icon}`} ></i>
          <input className={search.input} type="text" placeholder="Search reviews" onChange={() => this.updateInput.bind(this)} />
        </form>
      </div>
    )
  }
}

export default ReviewSearch;

// <div className={search.main}>
// <form onSubmit={(e) => {
//   this.props.filter(this.state.query)}
//   } >
//   <i className={`fas fa-search ${search.icon}`} ></i>
//   <input className={search.input} type="text" placeholder="Search reviews" onChange={(e) => {
//     this.props.update(e.target.value)
//     console.log('our search state', this.state)}} />
// </form>
// </div>