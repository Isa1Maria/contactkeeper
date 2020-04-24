const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { check, validationResult } = require("express-validator/check");
const User = require("../models/Contact");

//@route  GET api/contacts
//@desc   Get all user contacts
//@access Private
router.get("/", auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

//@route  POST api/contacts
//@desc   Add new contact
//@access Private
router.post("/", (req, res) => {
  res.send("Add new contact");
});

//@route  PUT api/contacts
//@desc   Update contact
//@access Private
router.put("/", (req, res) => {
  res.send("Update contact");
});

//@route  DELETE api/contacts
//@desc   Delete contact
//@access Private
router.delete("/", (req, res) => {
  res.send("Delete user");
});

module.exports = router;
