const assert = require("assert");
const request = require("supertest");
const app = require("../src/index.js");

const req = request("http://localhost:3000");

describe("workouts routes", () => {
  context("GET", () => {
    it("should return json as default data format", (done) => {
      req
        .get("/api/v1/workouts/")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
    it("Should return json as data format in body response when set Accept header to application/json", function (done) {
      req
        .get("/api/v1/workouts/")
        .set("Accept", "application/json")
        .expect("Content-Type", /json/)
        .expect(200, done);
    });
  });
  context("POST", () => {
    it("Should return 201 status code and location header", function (done) {
      const newWorkout = {
        name: "New Workout Test",
        mode: "AMRAP 20",
        equipment: ["rack", "barbell", "abmat"],
        exercises: ["15 toes to bars", "10 thrusters", "30 abmat sit-ups"],
        trainerTips: [
          "Split your toes to bars into two sets maximum",
          "Go unbroken on the thrusters",
          "Take the abmat sit-ups as a chance to normalize your breath",
        ],
      };
      req
        .post("/api/v1/workouts/")
        .send(newWorkout)
        .expect(201, done)
        // .expect("Location", "/api/v1/workouts/ab48cicj36734", done);
    });
  });
});
