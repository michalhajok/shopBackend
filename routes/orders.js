const express = require('express');
const Order = require('../models/Order')

const router = express.Router()

router.get('/', async (req,res) => {
    try {
        await Order.find({})
        .populate('payment')
        .populate('delivery')
        .populate('userId', ['email', 'name', 'lastname',])
        .exec((err, story) => {
                res.status(200).json(story)
            
        })
    } catch (error) {
        res.status(400).send(error)
    }
})

router.get('/:userId', async (req,res) => {
    try {
        const orders = await Order.find({userId: req.params.userId})

        res.json(orders)
    } catch (error) {
        res.status(400).send(error)
    }
})

const a = [
    'Scheduled',
    'Awaiting shipment',
    'Partially fulfilled',
    'Unfulfilled',
    'Fulfilled'
]

router.post('/', async (req, res) => {
    try {
        const { 
            userId,
            address,
            payment,
            delivery,
            items,
            prices,
            orderDate,
        } = req.body
        
        console.log(items);
        
        const newOrder =  new Order({
            userId,
            status: 'Scheduled',
            address,
            payment,
            delivery,
            items,
            prices,
            orderDate: Date(orderDate),
        })
        
        newOrder.save()
        res.status(201).send("Create new order")
        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router
