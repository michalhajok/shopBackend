const {Schema, model, Types: { ObjectId } } = require('mongoose');

const customerAddressSchema = Schema({
    street: {
        type: String,
        require: true
    },
    houseNumber: {
        type: String,
        require: true
    },
    apartmentNumber: {
        type: String,
    },
    postcode: {
        type: String,
        require: true
    },
    town: {
        type: String,
        require: true
    },
    userId: {
        type: ObjectId,
        require: true
    },
})

module.exports = model('CustomerAddress', customerAddressSchema)
