const mongoose = require('mongoose');
const { Review } = require('./reviewModel');

const listingReviewsSchema = new mongoose.Schema({ 
  listingID: Number,
  reviews: [Review]
});

const Reviews = new mongoose.Model('Reviews', listingReviewsSchema);

module.exports = {
  Reviews: Reviews
};

