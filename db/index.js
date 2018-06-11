const mongoose = require('mongoose');
const { populateReviews } = require('./sample_data/generateReviews.js');


mongoose.connect('mongodb://devtest7:terminal7@ds029824.mlab.com:29824/airbnb-reviews');

const dbReviews = mongoose.connection;
dbReviews.on('error', () => {
  console.log('connection to database failed');
});
dbReviews.once('open', () => {
  // populateReviews(7);
  console.log('we have successfully connected to database');
});



module.exports = {
  dbReviews: dbReviews
};
