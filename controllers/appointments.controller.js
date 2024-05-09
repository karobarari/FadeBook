const Appointment = require("../models/appointment.model");

exports.postAppointment = async (req, res, next) => {
  const appointment = new Appointment({
    user: {
      name: req.body.user.name,
      email:req.body.user.email,
      phoneNumber: req.body.user.email,
      bookings: req.body.user.bookings,
      admin: req.body.user.admin,
    },
    createdAt: req.body.createdAt,
    time: req.body.time,
    bookedFor: req.body.bookedFor,
  });
  try {
    const newAppointment = await appointment.save();

    res.status(201).send(newAppointment);
  } catch (err) {  
        res.status(400).json({ message: err.message });
    next();
  }
};
