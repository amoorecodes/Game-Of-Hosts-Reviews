const express = require('express');
const mongoose = require('mongoose');

const { dbReviews } = require('./../../db')
const { Reviews } = require('./../../db/models/listingReviewsModel.js');

const reviewsCtrl = {
  fetch: (req, res) => {
    Reviews.find({listingId: 7}, (err, reviews) => {
      // console.log('reviews ', reviews);
      let revs = reviews.splice(0, 6);
      res.status(200).send(revs);
    });
  },

  // populate: (req, res) => {
  //   Reviews.insertMany({listingId: [req.query.listingId], reviews: req.query.reviews}, (err) => {
  //     if (err) {console.log('There was an error inserting bunch of reviews ');}
  //     else { console.log('we have succesfully populated the database '); };
  //   });
  // }
}

module.exports = {
  reviewsCtrl: reviewsCtrl
};