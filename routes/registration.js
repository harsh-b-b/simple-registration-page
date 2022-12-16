const express = require("express");

const router = express.Router();
const registration = require("../controllers/registration.js");

router.post("/", registration.addUser);
router.post("/profile", registration.loginUser);


module.exports = router;