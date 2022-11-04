const express = require("express");
//const loginSchema = require("../models/admin");
const login = require("../controllers/login.controller.js");
const router = express.Router();
 

// LOGIN
router.post('/login',login.post )


module.exports = router