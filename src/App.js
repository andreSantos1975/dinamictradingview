import React, { useEffect, useState } from 'react';
import { getCandle } from './server/DataServer';
import './App.css';

import Chart from './Chart';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('1m');
  const [update, setUpdate] = useState(0); // novo estado para forçar atualização

  useEffect(() => {
    getCandle(symbol, interval)
      .then(data => {
        setData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setIsLoading(false);
        alert(err.response ? err.response.data : err.message);
      });
  }, [symbol, interval, update]);

  function onSymbolChange(event) {
    setSymbol(event.target.value);
    setUpdate(!update); // atualiza 'update' para forçar atualização
  }

  function onIntervalChange(event) {
    setInterval(event.target.value);
    setUpdate(!update); // adicionado para forçar atualização
  }

  return (
    <div className="App">
      <select onChange={onSymbolChange} value={symbol}>
        <option value="BTCUSDT">BTCUSDT</option>
        <option value="ETHUSDT">ETHUSDT</option>
        <option value="ADAUSDT">ADAUSDT</option>
      </select>

      <select onChange={onIntervalChange} value={interval}>
        <option value="1m">1m</option>
        <option value="1d">1d</option>
        <option value="1w">1w</option>
      </select>

      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <Chart
          symbol={`${symbol}USD`}
          interval={interval}
          autosize
        />
      )}


    </div>
  );
}

export default App;

