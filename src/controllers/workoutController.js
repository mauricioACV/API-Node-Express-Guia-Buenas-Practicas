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
  const { body } = req;

  if (
    !body.name ||
    !body.mode ||
    !body.equipment ||
    !body.exercises ||
    !body.trainerTips
  ) {
    return;
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };

  const createdWorkout = workoutService.createNewWorkout(newWorkout);
  res.status(201).send({ status: "OK", data: createdWorkout });
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
