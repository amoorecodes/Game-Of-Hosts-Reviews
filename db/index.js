const mongoose = require('mongoose');
const { populateReviews, randomizer } = require('./sample_data/generateReviews.js');

mongoose.connect('mongodb://devtest7:terminal7@ds029824.mlab.com:29824/airbnb-reviews');

const dbReviews = mongoose.connection;
dbReviews.on('error', () => {
  console.log('connection to database failed');
});

//==============> populate reviews in db <=====================

// let pop = []
// for (let i = 1; i < 101; i++) {
//   pop.push(i)
// }
// pop.forEach(number => populateReviews(number));

// dbReviews.once('open', () => {
//   console.log('we have successfully connected to database');
// });

//=============================================================



module.exports = {
  dbReviews: dbReviews
};
