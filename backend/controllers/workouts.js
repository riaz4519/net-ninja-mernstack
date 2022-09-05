const Workout = require("../models/Workout");
const mongoose = require("mongoose");

// get all workouts
const getAllWorkouts = async (req, res, next) => {
  const workouts = await Workout.find({}).sort({ createdAt: "-1" });

  res.status(200).json(workouts);
};

// get a single workouts

const getWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

// create a new workout
const createWorkout = async (req, res, next) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({
      title,
      reps,
      load,
    });

    res.status(200).json(workout);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// delete a workout

const deleteWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

// update a workout
const updateWorkout = async (req, res, next) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such workout" });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    },
    {
      new: true,
    }
  );

  if (!workout) {
    return res.status(404).json({ error: "no such workout" });
  }

  res.status(200).json(workout);
};

module.exports = {
  createWorkout,
  getAllWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
};
