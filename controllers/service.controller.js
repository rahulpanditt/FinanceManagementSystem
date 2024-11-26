const Service = require("../models/service.model");
const Request = require("../models/request.model");

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ message: "Error fetching services", error });
  }
};

exports.getServiceByType = async (req, res) => {
  const { type } = req.params;
  try {
    const service = await Service.findOne({ type });
    if (!service) {
      return res.status(404).json({ message: "Service not found" });
    }
    res.status(200).json(service);
  } catch (error) {
    res.status(500).json({ message: "Error fetching service", error });
  }
};

exports.submitServiceForm = async (req, res) => {
  const { mobile, email, amt, type, msg, code } = req.body;
  try {
    const request = new Request({ mobile, email, amt, type, msg, code });
    await request.save();
    res
      .status(201)
      .json({ message: "Request submitted successfully", request });
  } catch (error) {
    res.status(500).json({ message: "Error submitting request", error });
  }
};
exports.calculateEMI = (req, res) => {
  const { amt, tenure, type } = req.body;

  if (!amt || !tenure || !type) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const interestRate = 10;
  const monthlyRate = interestRate / (12 * 100);
  const emi =
    (amt * monthlyRate * Math.pow(1 + monthlyRate, tenure)) /
    (Math.pow(1 + monthlyRate, tenure) - 1);

  res.status(200).json({ emi: emi.toFixed(2) });
};
