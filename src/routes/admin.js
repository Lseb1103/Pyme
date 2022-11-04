const express = require("express");
//const adminSchema = require("../models/admin");
const admin = require("../controllers/admin.controller.js");
const router = express.Router();

// create admin
router.post("/admin",admin.post);

// get all admin
router.get("/admin", admin.get);

// get a admin
router.get("/admin/:id", admin.getid);

// delete a admin
router.delete("/admin/:id", admin.delete);

// update a admin
router.put("/admin/:id", admin.put);

module.exports = router;