// Require Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");

// Model dependency declarations
const Articles = require('./app/models/Articles');

// App initialization
const PORT = process.env.PORT || 3333;
const app = express();

// Routes
// require("./app/routes/api-routes.js")(app);

// Make public dir static
app.use(express.static("./app/public"));

// Configure morgan
app.use(logger("dev"));

// Configure BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Configure mongoose to utilize ES6 promises
mongoose.Promise = Promise;

// Configure mongoose db locally
mongoose.connect("mongodb://localhost/nytsearch_db");
// Configure mongoose db for heroku
// mongoose.connect('mongodb://heroku_98770c82:vmtnrq2f8kjg4bkd9c6itltltl@ds147711.mlab.com:47711/heroku_98770c82');
const db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

// Successful db login message
db.once("open", function() {
    console.log("Successful db connection.");
});

//------------------------------------------------------------------------------

// Start server listening
app.listen(PORT, function() {
    console.log(`App running on port ${PORT}!`);
});