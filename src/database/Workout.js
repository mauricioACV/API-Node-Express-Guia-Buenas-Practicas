const DB = require("./df.json");

const getAllWorkouts = () => {
  return DB.workouts;
};

module.exports = { getAllWorkouts };
