const dotenv = require("dotenv");
const mongoose = require("mongoose");
//configuring env
dotenv.config({});

const express = require("express");
const workoutRoutes = require("./routes/workouts");

//create app
const app = express();

//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/workouts", workoutRoutes);

//connect to mongoose
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log(`connected to db and listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
