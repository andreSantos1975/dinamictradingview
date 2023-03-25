const express = require('express');
const { klinesStick } = require('../controlers/binanceControlers')
const router = express.Router();

router.post('/klines', klinesStick);


module.exports = router;