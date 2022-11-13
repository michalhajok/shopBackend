const express = require('express');
const Payment = require('../models/Payment')

const router = express.Router()

router.get('/', async (req,res) => {
    try {
        const payments = await Payment.find({})
        res.json(payments)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { label, identification } = req.body
        const newPayment = new Payment({
            label, 
            identification
        })
        
        newPayment.save()
        
        res.status(201).json({
            success: true,
            message: "Created"
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
