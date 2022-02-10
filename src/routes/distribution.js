const express = require("express");
const {
	CreateOrUpdateDistribution,
	GetDistribution,
} = require("../distribution/distribution.controller");
const router = express.Router();

router.post("/create-or-update", CreateOrUpdateDistribution);
router.get("/get/:studentId", GetDistribution);

module.exports = router;
