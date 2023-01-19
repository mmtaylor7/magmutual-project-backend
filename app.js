const { Router } = require("express");
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const User = require("./model/User");

// Middleware
app.use(cors());

// ROUTES

// Get all the users
app.get("/users", async (req, res) => {
  try {
    //find() -> get all the data
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.json({ message: err });
  }
});

//get a specific user by last name
app.get("/getByLastName/:lastname", async (req, res) => {
  try {
    //find() -> get all the data
    const users = await User.find({ lastname: req.params.lastname });
    res.json(users);
  } catch (err) {
    console.log("error:", err);
    res.json({ message: err });
  }
});

//get all users with a specific profession
app.get("/getByProfession/:profession", async (req, res) => {
  try {
    //find() -> get all the data
    const users = await User.find({ profession: req.params.profession });
    console.log(req.params.profession);
    res.json(users);
  } catch (err) {
    console.log("error:", err);
    res.json({ message: err });
  }
});

//express helps us to make api calls faster in node- app.get req.params req, res is express syntax
// get request with 2 parameters; start and end date
// 2 ways to pass data into an api call; by putting in requestparameter in url and request body with no different url and you pass data (not in this project)
//colon in url tells us its a req param
//res is an object that has methods that help you send a response back to front end; res helps you send the response more easily
app.get("/getByDateRange/:startDate/:endDate", async (req, res) => {
  //   console.log("req.params.startDate", req.params.startDate);
  //   console.log("req.params.endDate", req.params.endDate);
  try {
    const users = await User.find({
      //query today up to tonight
      dateCreated: {
        // $gte: "2012-07-25", greater than or equal
        // $lt: "2025-07-25", less than
        //this is how I am able to search within a range of dates with the dates in the DB as strings instead of mongodb date types
        $gte: req.params.startDate,
        $lt: req.params.endDate,
      },
    });
    res.json(users);
  } catch (err) {
    console.log("error:", err);
    res.json({ message: err });
  }
});

app.get("/getByCountry/:country", async (req, res) => {
  try {
    //find() -> get all the data
    const users = await User.find({ country: req.params.country }); //User= tells MongoDB the collection to find from
    console.log(req.params.country);
    res.json(users);
  } catch (err) {
    console.log("error:", err);
    res.json({ message: err });
  }
});

//connect the mongoDB to this node application
mongoose.connect(
  "mongodb+srv://mm43678:revolution9@magmugtualprojectinstan.vrjwm.mongodb.net/magmutual-project-database?retryWrites=true&w=majority",
  () => {
    //callback function to verify to yourself you're connected
    console.log("Database is Connected!");
  }
);
// Create a listening port
app.listen(process.env.PORT || 3000);
