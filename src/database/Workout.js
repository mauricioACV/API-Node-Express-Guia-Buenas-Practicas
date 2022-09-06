const DB = require("./db.json");
const { saveToDatabase } = require("./utils");

const getAllWorkouts = () => {
  return DB.workouts;
};

const getWorkoutById = (workoutId) => {
  const workout = DB.workouts.find((workout) => workout.id === workoutId);
  if (!workout) return;
  return workout;
};

const createNewWorkout = (newWorkout) => {
  const isAlreadyAdded =
    DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;

  if (isAlreadyAdded) {
    return;
  }

  DB.workouts.push(newWorkout);
  saveToDatabase(DB);
  return newWorkout;
};

const updateWorkoutById = (workoutId, changes) => {
  const indexToUpdate = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexToUpdate === -1) return;

  const updatedWorkout = {
    ...DB.workouts[indexToUpdate],
    ...changes,
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };

  DB.workouts[indexToUpdate] = updatedWorkout;
  return updatedWorkout;
};

const deleteWorkoutById = (workoutId) => {
  const indexToDelete = DB.workouts.findIndex(
    (workout) => workout.id === workoutId
  );

  if (indexToDelete === -1) return;

  DB.workouts.splice(indexToDelete, 1);
  saveToDatabase(DB);
};

module.exports = {
  getAllWorkouts,
  getWorkoutById,
  createNewWorkout,
  updateWorkoutById,
  deleteWorkoutById,
};
