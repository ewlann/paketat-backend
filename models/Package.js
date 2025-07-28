const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  emri: { type: String, required: true },
  mbiemri: { type: String, required: true },
  adresa: { type: String, required: true },
  qyteti: { type: String, required: true },
  telefoni: { type: String, required: true },
  emailSender: { type: String, required: true },
  emailReceiver: { type: String, required: true },
  kg: { type: Number },
  cmimi: { type: Number },
  data: { type: Date },
  trackingId: { type: String },
  status: { type: String, default: 'e re' },
}, { timestamps: true });

module.exports = mongoose.model('Package', packageSchema);
