const recordService = require("../services/recordService");

const getRecordByWorkoutId = (req, res) => {
  const {
    params: { workoutid },
  } = req;

  if (!workoutid) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "Parameter ':workoutid' can not be empty" },
    });
    return;
  }

  try {
    const record = recordService.getRecordByWorkoutId(workoutid);
    res.send({ status: "OK", data: record });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

module.exports = { getRecordByWorkoutId };
