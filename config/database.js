const mongoose = require("mongoose");

const uri = process.env.DATABASE_URI

const dbConnect = () =>  mongoose
    .connect( uri, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
        console.log(`DB Connection Error: ${err.message}`);
    });
    
module.exports = dbConnect
    