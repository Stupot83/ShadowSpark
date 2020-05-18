const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");

//Load validation for registration and login input
const registrationValidation = require("../../validation/registrationValidation");
const loginValidation = require("../../validation/loginValidation");

// Load Devs schema
const Dev = require("../../schemas/Dev");

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
          bcrypt.hash(newDev.password, salt, (err, hash) => {
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

// POST api/devs/login - Logging in a Dev Team Member and return JWT token
router.post("/login", (req, res) => {
    // Validating the login form input
  
    const { errors, isValid } = loginValidation(req.body);
  
    // Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
  
    const email = req.body.email;
    const password = req.body.password;
  
    // Check the MongoDB Database to find the Dev
    Dev.findOne({ email }).then(dev => {
      // Check the MongoDB Database to see if Dev already exists
      if (!dev) {
        return res.status(404).json({ emailnotfound: "Email not found" });
      }
  
      // Check the password
      bcrypt.compare(password, dev.password).then(isMatch => {
        if (isMatch) {
          // Dev matches
          // Create JWT Payload
          const payload = {
            id: dev.id,
            name: dev.name,
            email: dev.email
          };
  
          // Sign the token
          jwt.sign(
            payload,
            connect.secretOrKey,
            {
              expiresIn: 1800 // 30 minutes in seconds
            },
            (err, token) => {
              res.json({
                success: true,
                token: "Bearer " + token
              });
            }
          );
        } else {
          return res
            .status(400)
            .json({ passwordincorrect: "Password incorrect" });
        }
      });
    });
  });

module.exports = router;