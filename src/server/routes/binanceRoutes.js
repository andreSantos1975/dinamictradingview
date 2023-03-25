const express = require('express');
const { klinesStick } = require('../controlers/binanceControlers')
const router = express.Router();

router.get('/klines', klinesStick);



module.exports = router;