const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");
const passport = require("passport");

//Load validation for registration and login input
const registrationValidation = require("../../validation/registrationValidation");
const loginValidation = require("../../validation/loginValidation");

// Load User schema
const User = require("../../models/User");

// Registering a User
router.post("/register", (req, res) => {
  // Validating the registration form input

  const { errors, isValid } = registrationValidation(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  // Check the MongoDB Database to see if User already exists
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });

      // Hash the Password before saving to the MongoDB database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// Logging in a User and returning JWT token
router.post("/login", (req, res) => {
  // Validating the login form input

  const { errors, isValid } = loginValidation(req.body);

  // Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  // Check the MongoDB Database to find the User
  User.findOne({ email }).then(user => {
    // Check if User already exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }

    // Check the password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matches
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          email: user.email
        };

        // Sign the token
        jwt.sign(
          payload,
          connect.secretOrKey,
          {
            expiresIn: 18000 // 5 hours in seconds
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