const { default: axios } = require("axios");

const klinesStick = async (req, res) => {
    const { symbol, interval } = req.query;
    if (!symbol || !interval) return res.status(422).send('symbol and interval are required.')

    try {
      const response = await axios.get(`http://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=60`)
      res.json(response.data);
    } catch(err) {
      res.status(500).json(err.response ? err.response.data : err.message);
    }
}

module.exports = { klinesStick };