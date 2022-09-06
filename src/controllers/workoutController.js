const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const allWorkouts = workoutService.getAllWorkouts();
  res.send({ status: "OK", data: allWorkouts });
};

const getWorkoutById = (req, res) => {
  const {
    params: { workoutid },
  } = req;

  if (!workoutid) return;
  
  const workout = workoutService.getWorkoutById(workoutid);
  res.send({ status: "OK", data: workout });
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
  const {
    body,
    params: { workoutid },
  } = req;
  
  if (!workoutid) return;

  const updatedWorkout = workoutService.updateWorkoutById(workoutid, body);
  res.send({ status: "OK", data: updatedWorkout });
};

const deleteWorkoutById = (req, res) => {
  const {
    params: { workoutid },
  } = req;

  if (!workoutid) return;

  workoutService.deleteWorkoutById(workoutid);
  res.status(204).send({ status: "OK" });
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
