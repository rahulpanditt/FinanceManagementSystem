const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  type: { type: String, required: true },
  code: { type: String, required: true },
  description: { type: String },
  imgUrl: { type: String },
  detail: { type: Array },
});

module.exports = mongoose.model("Service", serviceSchema);
