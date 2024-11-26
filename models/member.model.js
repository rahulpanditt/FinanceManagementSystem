const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
  mobile: { type: Number, required: true },
  email: { type: String, required: true },
  occupation: { type: String },
  createpassword: { type: String, required: true },
});

module.exports = mongoose.model("Member", memberSchema);
