const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");


//Load validation for registration input
const registrationValidation = require("../../validation/registrationValidation");

// Load Devs schema
const Devs = require("../../schemas/dev");

// POST api/devs/register - Registering a Dev Team Member
router.post("/register", (req, res) => {
    // Validating the registration form input
  const { errors, isValid } = registrationValidation(req.body);
  // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  // Check the MongoDB Database to see if Dev already exists 
  Dev.findOne({ email: req.body.email }).then(dev => {
      if (dev) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const newDev = new Dev({
          name: req.body.name,
          email: req.body.email,
          password: req.body.password
        });
  // Hash the Password before saving to the MongoDB database
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newDev.password = hash;
            newDev
              .save()
              .then(dev => res.json(dev))
              .catch(err => console.log(err));
          });
        });
      }
    });
  });