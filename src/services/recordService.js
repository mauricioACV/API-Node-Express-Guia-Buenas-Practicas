const Record = require("../database/Record");

const getRecordByWorkoutId = (workoutId) => {
  try {
    const record = Record.getRecordByWorkoutId(workoutId);
    return record;
  } catch (error) {
    throw error;
  }
};

module.exports = { getRecordByWorkoutId };
