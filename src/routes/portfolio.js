const express = require('express')
const PortfolioItem = require('../models/Portfolio')

const router = express.Router()

// Get all portfolio items
router.get('/', async (req, res) => {
  try {
    const items = await PortfolioItem.find()
    res.json({
      total: items.length,
      items
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get portfolio item by ID
router.get('/:id', async (req, res) => {
  try {
    const item = await PortfolioItem.findById(req.params.id)

    if (!item) {
      return res.status(404).json({ error: 'Portfolio item not found' })
    }

    res.json(item)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router
