const express = require('express')
const Order = require('../models/Order')

const router = express.Router()

// Create new order
router.post('/', async (req, res) => {
  try {
    const { clientName, email, phone, projectType, description, budget, deadline } = req.body

    if (!clientName || !email || !phone || !projectType) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const order = new Order({
      clientName,
      email,
      phone,
      projectType,
      description,
      budget,
      deadline
    })

    await order.save()
    res.status(201).json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get all orders (admin)
router.get('/', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 50
    const status = req.query.status

    let query = {}
    if (status) {
      query.status = status
    }

    const orders = await Order.find(query).limit(limit).sort({ createdAt: -1 })
    const total = await Order.countDocuments(query)

    res.json({
      total,
      orders
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get order by ID
router.get('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Update order status
router.put('/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)

    if (!order) {
      return res.status(404).json({ error: 'Order not found' })
    }

    if (req.body.status) {
      order.status = req.body.status
    }
    if (req.body.notes) {
      order.notes = req.body.notes
    }
    if (req.body.assignedTo) {
      order.assignedTo = req.body.assignedTo
    }

    order.updatedAt = new Date()
    await order.save()
    res.json(order)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get statistics
router.get('/stats/summary', async (req, res) => {
  try {
    const total = await Order.countDocuments()
    const statuses = {
      new: await Order.countDocuments({ status: 'new' }),
      in_progress: await Order.countDocuments({ status: 'in_progress' }),
      completed: await Order.countDocuments({ status: 'completed' }),
      cancelled: await Order.countDocuments({ status: 'cancelled' })
    }

    const orders = await Order.find()
    const totalBudget = orders.reduce((sum, o) => sum + (o.budget || 0), 0)

    res.json({
      total,
      statuses,
      totalBudget,
      averageBudget: total > 0 ? totalBudget / total : 0
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

module.exports = router

module.exports = router
