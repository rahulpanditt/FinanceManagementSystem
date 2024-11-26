const express = require("express");
const {
  getAllServices,
  getServiceByType,
  submitServiceForm,
  calculateEMI,
} = require("../controllers/service.controller");

const router = express.Router();

router.get("/allservices", getAllServices);
router.get("/service/:type", getServiceByType);
router.post("/service/:type/form", submitServiceForm);
router.post("/service/:type/calculate", calculateEMI);

module.exports = router;
