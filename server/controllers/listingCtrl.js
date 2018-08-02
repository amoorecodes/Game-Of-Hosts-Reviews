const express = require('express');
const mongoose = require('mongoose');

const { dbReviews } = require('./../../db')
const { Review } = require('./../../db/models/listingReviewsModel.js');

const reviewsCtrl = {
  fetch: (req, res) => {
    // Review.find({listing_id: parseInt(req.query.listing_id)}, (err, reviews) => {
    Review.find({listing_id: 1}, (err, reviews) => {
      res.status(200).send(reviews);
    });
  },

  findAverage: (req, res) => {

    Review.aggregate([
      {$match: {listing_id: 1}},
      {$group: {_id: {"listing_id": "$listing_id"}, 
                averageCom: { $avg: "$communication"},
                averageLoc: { $avg: "$location"},
                averageCheck: { $avg: "$checkIn"},
                averageClean: { $avg: "$cleanliness"},
                averageValue: { $avg: "$value"},
                averageAcc: { $avg: "$accuracy"}
            }}], (err, results) => {
        if (err) console.log('error in aggregation', err);
        res.status(200).send(results);
      })
    // Review.find()
    //       .select({listing_id: 7})
  }
  // populate: (req, res) => {
  //   Reviews.insertMany({listing_id: [req.query.listing_id], reviews: req.query.reviews}, (err) => {
  //     if (err) {console.log('There was an error inserting bunch of reviews ');}
  //     else { console.log('we have succesfully populated the database '); };
  //   });
  // }
}

module.exports = {
  reviewsCtrl: reviewsCtrl
};