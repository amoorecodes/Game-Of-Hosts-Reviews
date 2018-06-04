const express = require('express');
const mongoose = require('mongoose');

const { dbReviews } = require('./../../db')
const { Review } = require('./../../db/models/listingReviewsModel.js');

const reviewsCtrl = {
  fetch: (req, res) => {
    Review.find({listingId: 7}, (err, reviews) => {
      // console.log('reviews ', reviews);
      // let revs = reviews.splice(0, 6);
      res.status(200).send(reviews);
    });
  },

  findAverage: (req,res) => {
    Review.aggregate([
      {$match: {listingId: 7}},
      {$group: {_id: {"listingId": "$listingId"}, 
                averageCom: { $avg: "$communication"},
                averageLoc: { $avg: "$location"},
                averageCheck: { $avg: "$checkIn"},
                averageClean: { $avg: "$cleanliness"},
                averageValue: { $avg: "$value"},
                averageAcc: { $avg: "$accuracy"}
            }}], (err, results) => {
        if (err) console.log('error in aggregation', err);
        // console.log('aggregation res ', results);
        res.status(200).send(results);
      })
    // Review.find()
    //       .select({listingId: 7})
    //       .
  }
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