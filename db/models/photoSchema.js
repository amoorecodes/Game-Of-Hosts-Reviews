const mongoose = require('mongoose')
const Schema = mongoose.Schema

// const photoSchema = new Schema ({
//   description: String,
//   url: String
// })
// const Photo = mongoose.model('Photo', photoSchema);

const listingSchema = new Schema({
  listing_id: Number,
  photos: [Schema.Types.Mixed]
})
const Listing = mongoose.model('Listing', listingSchema)

module.exports.Listing = Listing
// module.exports.Photo = Photo;
