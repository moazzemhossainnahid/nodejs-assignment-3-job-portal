const mongoose = require('mongoose');
const dotenv = require("dotenv").config();
const colors = require('colors');

// database connection
const dbConnect = () => {
    mongoose.connect(process.env.DATABASE_LOCAL, {
        dbName:"BDJobs"
    })
        .then(() => {
        console.log(`Database Connected Succesfully`.white.bgCyan.bold)
        }).catch((err) => {
        console.log(err.message);
    })
}

module.exports = dbConnect;
