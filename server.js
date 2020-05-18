const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();

// Setup the bodyparser middleware
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(bodyParser.json());

// Get connection string for Database in Atlas Cloud from config
const shadowSparkDatabase = require("./config/connect").mongoURI;

// Connect to the MongoDB database
mongoose
    .connect(shadowSparkDatabase, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Successful Connection to ShadowSpark Database!"))
    .catch((err) => console.log(err));

const port = process.env.PORT || 8000;

app.listen(port, () =>
    console.log(`ShadowSpark Server Active and Running on Port ${port} !`)
);
