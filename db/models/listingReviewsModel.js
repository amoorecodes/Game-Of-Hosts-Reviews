const mongoose = require('mongoose');
// const { Review } = require('./reviewModel');

const reviewSchema = mongoose.Schema({
  body: String,
  dateCreated: Date,
  userId: Number,
  listingId: Number,
  communication: Number,
  location: Number,
  checkIn: Number,
  cleanliness: Number,
  value: Number,
  accuracy: Number,
  // rating: Number
});

const Review = mongoose.model('Review', reviewSchema);

const listingReviewsSchema = mongoose.Schema({ 
  listingId: Number,
  reviews: [reviewSchema]
});

const Reviews = mongoose.model('Reviews', listingReviewsSchema);

module.exports = {
  Reviews: Reviews,
  Review: Review
};

