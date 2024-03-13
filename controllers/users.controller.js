const User = require("../models/user.model");

exports.postUser = async (req, res, next) => {
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    bookings: req.body.bookings,
    admin: req.body.admin,
  });
  try {
    const newUser = await user.save();
    res.status(201).send(newUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
    next();
  }
};
exports.getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
    next();
  }
};
