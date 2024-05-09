const express = require("express");
const apiEndPoints = require("./Routs/apiEndPoints");
const usersRoute = require("./Routs/usersrRoute");
const appointmentsRoute = require("./Routs/apointmentsRoute")
const mongoose = require("mongoose");
require("dotenv").config({
  path: `${__dirname}/.env.main`,
});
mongoose.connect(process.env.DBCONNECTION);
const db = mongoose.connection;
db.on("error", (error) => {
  console.error(error);
  db.once("open", () => {
    console.log("Connected");
  });
});
const app = express();






app.use(express.json());
app.use("/api", apiEndPoints);
app.use("/api/users", usersRoute);
app.use("/api/appointments", appointmentsRoute);




app.listen(3000, () => {
  console.log(`Listening on 3000`);
});
module.exports = app;
