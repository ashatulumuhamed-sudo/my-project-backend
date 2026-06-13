const express = require('express')
const Testimonial = require('../models/Testimonial')

const router = express.Router()

// Get all testimonials
router.get('/', async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
    res.json({
      total: testimonials.length,
      testimonials
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
