const express = require("express");
//const adminSchema = require("../models/admin");
const noti = require("../controllers/notificacion.controller.js");
const router = express.Router();

// create admin
router.get("/admin",noti.noti);


module.exports = router;