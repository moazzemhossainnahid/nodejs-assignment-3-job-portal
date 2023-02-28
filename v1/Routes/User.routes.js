const express = require("express");
const { signup, signin, getMe } = require("../Controllers/User.controller");
const verifyToken = require("../Middlewares/verifyToken");
const router = express.Router();


router.post("/signup", signup);

router.post("/signin", signin);

router.get("/me", verifyToken, getMe);


module.exports = router;