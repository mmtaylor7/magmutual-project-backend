const express = require("express");
const app = express();
const mongoose = require("mongoose");

// Middleware

// ROUTES

app.get("/", (req, res) => {
  res.send("I'm here");
});

app.get("/posts", (req, res) => {
  res.send("I'm inside posts");
});

//connect the mongoDB to this node application
mongoose.connect(
  "mongodb+srv://mm43678:revolution9@magmugtualprojectinstan.vrjwm.mongodb.net/?retryWrites=true&w=majority",
  () => {
    //callback function to verify to yourself you're connected
    console.log("Database is Connected!");
  }
);
// Create a listening port
app.listen(3000);
