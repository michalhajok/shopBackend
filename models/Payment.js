const {Schema, model } = require('mongoose');

const paymentSchema = Schema({
    label: {
        type: String,
        require: true
    },
    identification: {
        type: String,
        require: true
    },

    
})

module.exports = model('Payment', paymentSchema)
