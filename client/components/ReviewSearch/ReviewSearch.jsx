import React, {Component} from 'react';
import search from './search.css';

class ReviewSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
  };

  updateInput(e) {
    this.setState({
      query: e.target.value
    });
    console.log('our input', this.state.query)
  };

  render() {
    return(
      <div className={search.main}>
        <form onSubmit={(e) => {
          this.props.filter(e)
          console.log('what is e in search', e)}
          } >
          <i className={`fas fa-search ${search.icon}`} ></i>
          <input className={search.input} type="text" placeholder="Search reviews" onChange={this.updateInput.bind(this)} />
        </form>
      </div>
    )
  }
}

export default ReviewSearch;