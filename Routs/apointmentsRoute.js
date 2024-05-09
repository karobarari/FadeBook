const express = require("express");
const router = express.Router();

const { postAppointment } = require("../controllers/appointments.controller");

router.post("/", postAppointment);



module.exports = router;
