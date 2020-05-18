const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");

//Load validation for login input
const loginValidation = require("../../validation/loginValidation");

// Load Devs schema
const Dev = require("../../schemas/dev");

// POST api/users/login - Logging in a Dev Team Member and return JWT token
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
    Dev.findOne({ email }).then((dev) => {
        // Check the MongoDB Database to see if Dev already exists
        if (!dev) {
            return res.status(404).json({ emailnotfound: "Email not found" });
        }
        // Check the password
        bcrypt.compare(password, dev.password).then((isMatch) => {
            if (isMatch) {
                // Dev matches
                // Create JWT Payload
                const payload = {
                    id: dev.id,
                    name: dev.name,
                };
                // Sign the token
                jwt.sign(
                    payload,
                    connect.secretOrKey,
                    {
                        expiresIn: 1800, // 30 minutes in seconds
                    },
                    (err, token) => {
                        res.json({
                            success: true,
                            token: "Bearer " + token,
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
