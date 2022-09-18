const workoutService = require("../services/workoutService");

const getAllWorkouts = (req, res) => {
  const {mode} = req.query;
  try {
    const allWorkouts = workoutService.getAllWorkouts({ mode });
    res.send({ status: "OK", data: allWorkouts });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getWorkoutById = (req, res) => {
  const {
    params: { workoutid },
  } = req;

  if (!workoutid) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutId' can not be empty" },
    });
  }

  try {
    const workout = workoutService.getWorkoutById(workoutid);
    res.send({ status: "OK", data: workout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
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
    res.status(400).send({
      status: "FAILED",
      data: {
        error:
          "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
      },
    });
  }

  const newWorkout = {
    name: body.name,
    mode: body.mode,
    equipment: body.equipment,
    exercises: body.exercises,
    trainerTips: body.trainerTips,
  };
  try {
    const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({ status: "OK", data: createdWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILDED", data: { error: error?.message || error } });
  }
};

const updateWorkoutById = (req, res) => {
  const {
    body,
    params: { workoutid },
  } = req;

  if (!workoutid) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutid' can not be empty" },
    });
  }
  try {
    const updatedWorkout = workoutService.updateWorkoutById(workoutid, body);
    res.send({ status: "OK", data: updatedWorkout });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteWorkoutById = (req, res) => {
  const {
    params: { workoutid },
  } = req;

  if (!workoutid) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutid' can not be empty" },
    });
  };

  try {
    workoutService.deleteWorkoutById(workoutid);
    res.status(204).send({ status: "OK" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
