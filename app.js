const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./model/User");

// Middleware
app.use("/user", () => {
  console.log("This is middle ware");
});

// get request with 2 parameters
// app.get("/:email/:password", function(req, res){
//     console.log(req.params.email)
//     console.log(req.params.password)
// })

// ROUTES

// Get all the users
app.get("/user", (req, res) => {
  res.send("I'm inside the users");
});

//save a post
app.get("/", (req, res) => {
  res.send;
});

// Create a user

//connect the mongoDB to this node application
mongoose.connect(
  "mongodb+srv://mm43678:revolution9@magmugtualprojectinstan.vrjwm.mongodb.net/?retryWrites=true&w=majority",
  () => {
    //callback function to verify to yourself you're connected
    console.log("Database is Connected!");
  }
);
// Create a listening port
app.listen(process.env.PORT || 3000);
