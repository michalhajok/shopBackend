const {Schema, model, Types: { ObjectId }} = require('mongoose');

const orderSchema = Schema({
    userId: {
        type: ObjectId,
        ref: 'Auth',
        require: true
    },
    status: {
        type: String,
        require: true
    },
    address: {
        type: Object,
        require: true
    },
    payment: {
        type: ObjectId,
        ref: 'Payment',
        require: true
    },
    delivery: {
        type: ObjectId,
        ref: 'Delivery',
        require: true
    },
    items: {
        type: Array
    },
    prices: {
        type: Object,
        require: true
    },
    orderDate: {
        type: Date,
        require: true
    },
    
})

module.exports = model('Order', orderSchema)
