const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const connect = require("../../config/connect");


//Load validation for login input
const loginValidation = require("../../validation/loginValidation");

// Load Devs schema
const Devs = require("../../schemas/dev");

