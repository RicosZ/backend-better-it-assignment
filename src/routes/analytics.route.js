const express = require("express");
// const session = require('express-session')
const AnalyticsController = require("../controllers/analytics.controller");
const router = express.Router();

router.post('/add',AnalyticsController.addInformation);
router.get('/get',AnalyticsController.getInformation);

module.exports = router;