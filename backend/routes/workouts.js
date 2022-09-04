const express = require("express");

const router = express.Router();
const Workout = require("../models/Workout");

// GET all workouts
router.get("/", (req, res) => {
  res.json({
    message: "get all workouts",
  });
});

// GET a single workouts
router.get("/:id", (req, res) => {
  res.json({
    message: "get single workout",
  });
});

// POST a new workout
router.post("/", async (req, res) => {
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
});

// DELETE a workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE a workout" });
});

// update a workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE a workout" });
});

module.exports = router;
