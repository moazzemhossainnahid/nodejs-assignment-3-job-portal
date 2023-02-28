const express = require("express");
const app = express();
const cors = require("cors");
const usersRoute = require('./v1/Routes/User.routes');



// middlewares
app.use(express.json());
app.use(cors());


// Routes
app.use("/api/v1/user", usersRoute);



app.get("/", (req, res) => {
    res.send("Route is working! YaY!");
});

module.exports = app;