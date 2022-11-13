const express = require('express');

const CustomerAddress = require('../models/CustomerAddress')

const router = express.Router()

router.get('/:userId', async (req,res) => {
    try {
        const customerAddress = await CustomerAddress.find({userId: req.params.userId})
        res.json(customerAddress)
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/', async (req,res) => {
    try {
        const { street, houseNumber, apartmentNumber, postcode, town, userId} = req.body
        
        const newAddress = new CustomerAddress({
            street, 
            houseNumber, 
            apartmentNumber, 
            postcode, 
            town, 
            userId
        })
        
        await newAddress.save()
        
        res.status(201).json({
            success: true,
            message: "Created"
        })
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
