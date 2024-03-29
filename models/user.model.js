const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  bookings: { type: Number, required: true },
  admin: { type: Boolean, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
