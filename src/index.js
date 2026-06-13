const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const orderRoutes = require('./routes/orders')
const portfolioRoutes = require('./routes/portfolio')
const testimonialRoutes = require('./routes/testimonials')

const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/website-order-service'

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000'
}))
app.use(express.json())

// MongoDB Connection
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ MongoDB connection error:', err))

// Routes
app.use('/api/orders', orderRoutes)
app.use('/api/portfolio', portfolioRoutes)
app.use('/api/testimonials', testimonialRoutes)

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Backend running at http://localhost:${PORT}`)
})
