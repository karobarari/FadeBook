const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  user: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    bookings: { type: Number, required: true },
    admin: { type: Boolean, required: true },
  },
  createdAt: { type: String, required: true },
  time: { type: String, required: true },
  bookedFor: { type: String, required: true }
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;
