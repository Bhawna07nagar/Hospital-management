const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patientId: String,
  doctorId: String,
  date: String,
  status: {
    type: String,
    default: "booked"
  }
});

module.exports = mongoose.model("Appointment", appointmentSchema);