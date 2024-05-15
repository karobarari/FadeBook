const express = require("express");
const router = express.Router();

const { postAppointment, getAllAppointments } = require("../controllers/appointments.controller");

router.post("/", postAppointment);
router.get("/", getAllAppointments);


module.exports = router;
