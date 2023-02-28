const express = require("express");
const { signup } = require("../Controllers/User.controller");
// const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


router.post("/signup", signup);

// router.post("/signin", );

// router.get("/me", verifyToken, userController.getMe);


module.exports = router;