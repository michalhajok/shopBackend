const router = require('express').Router()

const authRouter = require("./auth");
const productsRouter = require("./products");
const categoriesRouter = require("./categories");
const ordersRouter = require('./orders')
const deliveryRouter = require('./delivery');
const paymentsRouter = require('./payments')
const customerAddressRouter = require('./customerAddress')

router.use("/user", authRouter)
router.use("/products", productsRouter)
router.use("/categories", categoriesRouter)
router.use('/orders', ordersRouter)
router.use('/payments', paymentsRouter)
router.use('/delivery', deliveryRouter)
router.use('/customerAddress', customerAddressRouter)

module.exports = router
