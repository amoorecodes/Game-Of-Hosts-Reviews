const express = require('express');
const mongoose = require('mongoose');

const { dbReviews } = require('./../../db')
const { Reviews } = require('./../../db/models/listingReviewsModel');

const ReviewsCtrl = {
  fetch()
}

module.exports = {
  ReviewsCtrl: ReviewsCtrl
};