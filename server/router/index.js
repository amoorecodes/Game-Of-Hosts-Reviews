const express = require('express')
const router = express.Router()
const { reviewsCtrl } = require('./../controllers/listingCtrl.js')
const { photoController } = require('../controllers/photoCtrl.js')

router
  .route('/photos')
  .get(photoController.GET)
  .post(photoController.POST)

router.route('/reviews').get(reviewsCtrl.fetch)

router.route('/reviews/avg').get(reviewsCtrl.findAverage)

module.exports = {
  router: router
}
