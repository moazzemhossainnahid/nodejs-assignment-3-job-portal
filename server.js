const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const colors = require("colors");

const app = require("./app");
const dbConnect = require("./Utilities/dbConnect");

// Connect Database
dbConnect();

// server
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`App is Running on Port ${port}`.yellow.bold);
});