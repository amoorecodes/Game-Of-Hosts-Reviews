const { Listing } = require('../../db/models/photoSchema.js')

const photoController = {
  GET: (req, res) => {
    Listing.findOne({ listing_id: req.query.listing_id }, (err, data) => {
      console.log('Data retrieved from DB')
      res.send(data).status(200)
    })
  },
  POST: (req, res) => {
    console.log('POST body:', req.body)

    res.send().status(201)
  }
}

module.exports.photoController = photoController
