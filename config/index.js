const bodyParser = require("body-parser");
const cors = require("cors");

const dbConnect = require('./database')

module.exports = app => {
    app.use(cors());
    app.use(bodyParser.json());
    dbConnect()
}