const Appointment = require("../models/appointment.model");

exports.postAppointment = async (req, res, next) => {
  const appointment = new Appointment({
    user: {
      name: req.body.user.name,
      email: req.body.user.email,
      phoneNumber: req.body.user.email,
      bookings: req.body.user.bookings,
      admin: req.body.user.admin,
    },
    createdAt: req.body.createdAt,
    time: req.body.time,
    bookedFor: req.body.bookedFor,
  });
  try {
    const existingAppointment = await Appointment.findOne({
      bookedFor: req.body.bookedFor,
    });
    if (existingAppointment) {
      return res
        .status(409)
        .json({ message: "The selected time slot is already booked." });
    }
    const newAppointment = await appointment.save();
    res.status(201).send(newAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
    next();
  }
};
exports.getAllAppointments = async (req, res, next) => {
  try {
    const appointments = await Appointment.find();
    res.status(200).send(appointments);
  } catch (err) {
    res.status(404).send({ message: "Aappointment not found" });
    next();
  }
};
exports.getAppointmentById = async (req, res, next) => {
  const mongoDbIdValidator = /^[a-fA-F0-9]{24}$/;

  if (!mongoDbIdValidator.test(req.params.id)) {
    return res.status(400).json({ message: "Invalid ObjectID format" });
  }

  try {
    const appointment = await Appointment.findById(req.params.id);

    if (!appointment) {
      return res.status(404).json({ message: "Appointment not found" });
    }

    res.status(200).json(appointment);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ message: "An error occurred while fetching the appointment" });
    next(err);
  }
};
exports.deleteAppointmentById = async (req, res, next) => {
  try {
    const deletedAppointment = await Appointment.findByIdAndDelete(
      req.params.id
    );
    res.status(200).send(deletedAppointment);
  } catch (err) {
    res.status(400).json({ message: err.message });
    next();
  } 
};
