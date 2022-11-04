const express = require("express");
//const userSchema = require("../models/user");
const use = require("../controllers/user.controller.js");
const router = express.Router();

// create user
router.post("/users",use.post);

// get all users
router.get("/users", (req, res) => {
  userSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// get a user
router.get("/users/:id", use.get);

// delete a user
router.delete("/users/:id", use.delete);

// update a user
router.put("/users/:id", use.put);

module.exports = router;