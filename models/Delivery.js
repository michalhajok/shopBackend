const {Schema, model } = require('mongoose');

const deliverySchema = Schema({
    label: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },

    
})

module.exports = model('Delivery', deliverySchema)
