const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require('colors');

// database connection
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_LOCAL, {
        dbName:"JobPortal"
    })
        .then(() => {
        console.log(`Database Connected Successfully`.white.bgRed.bold);
        }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = dbConnect;
