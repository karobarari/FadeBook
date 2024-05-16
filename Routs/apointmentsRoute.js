const express = require("express");
const router = express.Router();

const {
  postAppointment,
  getAllAppointments,
  getAppointmentById,
  deleteAppointmentById
} = require("../controllers/appointments.controller");

router.post("/", postAppointment);
router.get("/", getAllAppointments);
router.get("/:id", getAppointmentById);
router.delete("/:id", deleteAppointmentById);


module.exports = router;
