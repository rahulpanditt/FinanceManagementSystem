const express = require("express");
const {
  updateRequest,
  deleteRequest,
} = require("../controllers/request.controller");

const router = express.Router();
router.put("/updaterequest", updateRequest);
router.delete("/deleterequest", deleteRequest);

module.exports = router;
