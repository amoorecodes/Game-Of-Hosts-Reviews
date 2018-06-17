const mongoose = require('mongoose');
// const { Review } = require('./reviewModel');

const reviewSchema = mongoose.Schema({
  body: String,
  dateCreated: String,
  userId: Number,
  listing_id: Number,
  communication: Number,
  location: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  accuracy: Number,
});

const Review = mongoose.model('Review', reviewSchema);

// const listingReviewsSchema = mongoose.Schema({ 
//   listing_id: Number,
//   reviews: [reviewSchema]
// });

// const Reviews = mongoose.model('Reviews', listingReviewsSchema);

module.exports = {
  // Reviews: Reviews,
  Review: Review
};

