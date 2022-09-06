const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:workoutid", workoutController.getWorkoutById)
  .post("/:workoutid", workoutController.createNewWorkout)
  .patch("/:workoutid", workoutController.updateWorkoutById)
  .delete("/:workoutid", workoutController.deleteWorkoutById);

module.exports = router;
