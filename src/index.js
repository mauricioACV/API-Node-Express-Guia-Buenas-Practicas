const express = require("express");
const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: v1SwaggerDocs } = require("./v1/swagger");

const app = express();
const PORT = process.env.PORT || 3000;
const cache = apicache.middleware;

app.use(express.json());
app.use(cache("3 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
  v1SwaggerDocs(app, PORT);
});
