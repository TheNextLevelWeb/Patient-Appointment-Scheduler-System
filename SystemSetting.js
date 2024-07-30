// backend/models/SystemSetting.js
const mongoose = require('mongoose');

const systemSettingSchema = new mongoose.Schema({
  settingName: { type: String, required: true },
  value: { type: String, required: true }
});

module.exports = mongoose.model('SystemSetting', systemSettingSchema);
