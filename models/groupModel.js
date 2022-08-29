const mongoose = require('mongoose');

const groupSchema = mongoose.Schema(
  {
    hens: { type: Number, min: 0 },
    roosters: { type: Number, min: 0 },
    dateStartedLaying: Date,
    dateEnded: Date,
    totalEggs: { type: Number, min: 0 },
    eggsIncubated: { type: Number, min: 0 },
    eggsHatched: { type: Number, min: 0 },
    notes: [{ body: String, date: Date }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Group', groupSchema);
