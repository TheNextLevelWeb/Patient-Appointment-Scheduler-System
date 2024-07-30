// backend/models/Schedule.js
const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  days: { type: [String], required: true },
  times: { type: [String], required: true }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
