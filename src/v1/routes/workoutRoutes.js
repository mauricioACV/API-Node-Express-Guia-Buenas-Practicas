const express = require("express");
const apicache = require("apicache");
const workoutController = require("../../controllers/workoutController");
const recordController = require("../../controllers/recordController");

const router = express.Router();
const cache = apicache.middleware;


router
  // .get("/", cache("3 minutes"), workoutController.getAllWorkouts) //ruta cacheada(prueba con solo una ruta)
  .get("/", workoutController.getAllWorkouts)
  .get("/:workoutid", workoutController.getWorkoutById)
  .get("/:workoutid/records", recordController.getRecordByWorkoutId)
  .post("/", workoutController.createNewWorkout)
  .patch("/:workoutid", workoutController.updateWorkoutById)
  .delete("/:workoutid", workoutController.deleteWorkoutById);

module.exports = router;
