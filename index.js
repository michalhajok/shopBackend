const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser')
require("dotenv").config();

const BuiltTime = require('./built-time');

const routes = require('./routes')
const config = require('./config')

const app = express();

app.use(cors())

config(app)

app.use(bodyParser.json())

app.use('/', routes)

app.get("/", async (req, res) => {
    try {
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
        res.send("Hello world");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(process.env.PORT || 80);

module.exports = (req, res) => {
    res.setHeader('content-type', 'application/json');
    res.send(`
      This Serverless Function was built at ${new Date(BuiltTime)}.
      The current time is ${new Date()}
    `);
  };
