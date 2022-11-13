const express = require('express');
const Delivery = require('../models/Delivery')

const router = express.Router()

router.get('/', async (req,res) => {
    try {
        const delivery = await Delivery.find({})
        res.json(delivery)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req, res) => {
    try {
        const { label, identification } = req.body
        const newDelivery = new Delivery({
            label, 
            identification
        })
        
        newDelivery.save()
        
        res.status(201).json({
            success: true,
            message: "Created"
        })
    } catch (error) {
        res.status(400).send(error)
    }
})


module.exports = router
