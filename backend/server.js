const dotenv = require("dotenv");
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
//listen for request
app.listen(process.env.PORT, () => {
  console.log(`listening on port ${process.env.PORT}`);
});
