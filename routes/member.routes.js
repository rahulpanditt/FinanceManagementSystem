const express = require("express");
const {
  registerMember,
  updatePassword,
  cancelMembership,
} = require("../controllers/member.controller");

const router = express.Router();
router.post("/member", registerMember);
router.put("/updatepassword", updatePassword);
router.delete("/cancelmember", cancelMembership);

module.exports = router;
