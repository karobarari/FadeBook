const express = require("express");
const apiEndPoints = require('./Routs/apiEndPoints')
const app = express();
app.use(express.json());
app.use('/api', apiEndPoints)
// app.use("api/users", usersRoute);
// app.use("api/appointments", appointmentsRoute);

module.exports = app;
