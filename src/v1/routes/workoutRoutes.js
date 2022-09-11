const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

router
  .get("/", workoutController.getAllWorkouts)
  .get("/:workoutid", workoutController.getWorkoutById)
  .get("/:workoutid/records", recordController.getRecordByWorkoutId)
  .post("/", workoutController.createNewWorkout)
  .patch("/:workoutid", workoutController.updateWorkoutById)
  .delete("/:workoutid", workoutController.deleteWorkoutById);

module.exports = router;
