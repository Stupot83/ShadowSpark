const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");

const users = require("./routes/api/users");
const stories = require("./routes/api/stories");
const todos = require("./routes/api/todos");

const app = express();

// Setup the bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Get connection string for Database in Atlas Cloud from config
const shadowSparkDatabase = require("./config/connect").mongoURI;

// Connect to the MongoDB database
mongoose
  .connect(shadowSparkDatabase, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("Successful Connection to ShadowSpark Database!"))
  .catch(err => console.log(err));

//Setup Passport middleware
app.use(passport.initialize());

// Configure Passport
require("./config/passport")(passport);

// Setup Routes
app.use("/api/users", users);
app.use("/api/stories", stories);
app.use("/api/todos", todos);

// Serve static assets if in production
if(process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const port = process.env.PORT || 8000;

app.listen(port, () =>
  console.log(`ShadowSpark Server Active and Running on Port ${port} !`)
);
