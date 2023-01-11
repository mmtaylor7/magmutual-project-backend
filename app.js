const { Router } = require("express");
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const User = require("./model/User");

// Middleware
// app.use("/user", () => {
//   console.log("This is middle ware");
// });

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

// get request with 2 parameters; start and end date
app.get("/getByDateRange/:startDate/:endDate", async (req, res) => {
  console.log(req.params.startDate);
  console.log(req.params.endDate);
  try {
    const users = await User.find({
      //query today up to tonight
      dateCreated: {
        // $gte: "2012-07-25",
        // $lt: "2025-07-25",
        $gte: startDate,
        $lt: endDate,
      },
    });
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
