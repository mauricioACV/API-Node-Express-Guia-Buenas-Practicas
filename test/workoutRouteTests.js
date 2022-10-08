const assert = require("assert");
const request = require("supertest");
const app = require("../src/index.js");

const req = request("http://localhost:3000");

describe("workouts", () => {
  context("GET", () => {
    it("should return json as default data format", (done) => {
      req
        .get("/api/v1/workouts/")
        .expect("Content-Type", "application/json; charset=utf-8")
        .expect(200, done);
    });
  });
});
