const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getWorkoutById = (req, res) => {
  const workout = workoutService.getWorkoutById(req.params.workoutid);
  res.send(`Get workout by id: ${req.params.workoutid}`);
};

const createNewWorkout = (req, res) => {
  const createdWorkout = workoutService.getAllWorkouts(req.params.workoutid);
  res.send(`Create workout id: ${req.params.workoutid}`);
};

const updateWorkoutById = (req, res) => {
  const updatedWorkout = workoutService.updateWorkoutById(req.params.workoutid);
  res.send(`Update workout id: ${req.params.workoutid}`);
};

const deleteWorkoutById = (req, res) => {
  workoutService.deleteWorkoutById(req.params.workoutid);
  res.send(`Delete workout id: ${req.params.workoutid}`);
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
