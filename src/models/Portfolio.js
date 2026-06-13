const mongoose = require('mongoose')

const portfolioSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  price: Number,
  image: String,
  features: [String],
  createdAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('PortfolioItem', portfolioSchema)
