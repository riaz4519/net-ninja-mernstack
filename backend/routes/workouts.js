const express = require("express");

const router = express.Router();

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
router.post("/", (req, res) => {
  res.json({ message: "POST a new workout" });
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
