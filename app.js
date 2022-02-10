const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();
require("./src/db/db");

const indexRouter = require("./src/routes/index");
const studentRouter = require("./src/routes/student");
const foodRouter = require("./src/routes/food");
const distributionRouter = require("./src/routes/distribution");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use("/", indexRouter);
app.use("/student", studentRouter);
app.use("/food", foodRouter);
app.use("/distribution", distributionRouter);

module.exports = app;
