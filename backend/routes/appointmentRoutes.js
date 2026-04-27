const express = require("express");
const router = express.Router();
const Appointment = require("../models/Appointment");

// Book
router.post("/book", async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.send("Appointment booked");
});

// Get
router.get("/", async (req, res) => {
  const data = await Appointment.find();
  res.json(data);
});

// Cancel
router.delete("/:id", async (req, res) => {
  await Appointment.findByIdAndDelete(req.params.id);
  res.send("Appointment cancelled");
});

module.exports = router;