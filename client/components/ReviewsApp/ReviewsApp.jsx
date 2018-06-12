import React, { Component } from 'react';
import axios from 'axios';
import Rating from './../Rating/Rating.jsx' ;
import ReviewSearch from './../ReviewSearch/ReviewSearch.jsx';
import RatingsList from './../RatingsList/RatingsList.jsx';
import ReviewsList from './../ReviewsList/ReviewsList.jsx';
import app from './styles.css';

class ReviewsApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listingId: 7,
      reviews: [],
      communication: 1,
      location: 1,
      checkIn: 1,
      cleanliness: 1,
      value: 1,
      accuracy: 1,
      average: 1,
      user: {
        pic: "https://a0.muscache.com/im/pictures/8810f287-340d-4681-aabf-e6e38bff7e73.jpg?aki_policy=profile_x_medium",
        name: "aranovski"
      },
      searchedReviews: [],
      query: ''
    };
    this.fetchReviews = this.fetchReviews.bind(this);
    this.searchReviews = this.searchReviews.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
    // this.updateInput = this.updateInput.bind(this);
  };

  fetchReviews(listingId) {
    axios.get(`/api/reviews?listingId=${listingId}`)
    .then(((data) => {
      this.setState({
        reviews: data.data
        });
      }))
      .then(() => {
        axios.get(`/api/reviews/avg`)
          .then((data) => {
            const avg = data.data[0];
            const total = (avg.averageAcc + avg.averageCheck + avg.averageClean + avg.averageCom + avg.averageLoc + avg.averageValue)/6
            // console.log('inside avg axios', this.state)
            this.setState({
              communication: Math.round(avg.averageCom),
              location: Math.round(avg.averageLoc),
              checkIn: Math.round(avg.averageCheck),
              cleanliness: Math.round(avg.averageClean),
              value: Math.round(avg.averageValue),
              accuracy: Math.round(avg.averageAcc),
              average: Math.round(total)
            });
          })
          .then(() => {console.log('final state in fetch ', this.state)})
        })
      .catch(err => console.log('there was an error in fetching reviews ', err));
  };

  searchReviews(event) {
    event.preventDefault();
    // console.log('search input', event.target.value)
    let searchResults = this.state.reviews.filter(review => {
      return review.body.includes(event.target.value);
    });

    // console.log('query', this.state)

    this.setState({
      searchedReviews: searchResults
    });
  };

  clearSearch() {
    this.setState({
      searchedReviews: []
    });
  };

  componentDidMount(event) {
    (this.state.reviews.length === 0) && this.fetchReviews(7);
    // console.log('searched', this.state.searchedReviews);
  };

  // updateInput(e) {
  //   e.preventDefault();
  //   this.setState({
  //     query: e
  //   });
  //   console.log('our input', e,'and state', this.state)
  // };
  
  render() {
    return(
      <div className={app.app}>
        Hello. This is a review section. Take a snapshot, it would be funny in 2 weeks.
        Also, {this.state.reviews.length}
        <div className={app.header}>
        <Rating rating={4} count={this.state.reviews.length} className={app.total_reviews}/>
        <ReviewSearch className={app.search} filter={this.searchReviews} />
        </div>
        {
          (this.state.searchedReviews.length > 0) 
          ? 
          (<div>
            <div className={app.searchBar}>
              <span>{this.state.searchedReviews.length} guests have mentioned <b>"{this.state.query}"</b></span>
              <a href="" onClick={this.clearSearch} >Back to all reviews</a>
            </div>
            <ReviewsList reviews={this.state.searchedReviews} userId={this.state.user} />
          </div>) 
          : 
          (
            <div>
            <div className={app.ratings} >
            <RatingsList {...this.state} />
            </div>
            <ReviewsList reviews={this.state.reviews} userId={this.state.user} />
            </div>
          )
        }
      </div>
    )
  };
};

export default ReviewsApp;