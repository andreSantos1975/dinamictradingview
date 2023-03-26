import axios from "axios";
import Candle from "../Candle";

export async function getCandle(symbol, interval) {
  try {
    const response = await axios.get(`http://localhost:5000/binance/klines?symbol=${symbol.toUpperCase()}&interval=${interval}`);
    const candle = response.data.map(k => {
      return new Candle(k[0], k[1], k[2], k[3], k[4]);
    });
   // console.log("getCandle success:", candle); // adicionado log de sucesso
    return candle;
  } catch (error) {
    console.log("getCandle error:", error); // adicionado log de erro
    throw error;
  }
}
