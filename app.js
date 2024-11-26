const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();
const serviceRoutes = require("./routes/service.routes");
const requestRoutes = require("./routes/request.routes");
const memberRoutes = require("./routes/member.routes");

const app = express();
app.use(bodyParser.json());
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Error:", err));
app.use("/api/services", serviceRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/members", memberRoutes);
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "An error occurred", error: err.message });
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
