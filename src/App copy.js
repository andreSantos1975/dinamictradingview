import { useEffect, useState } from 'react';
import { getCandle } from './server/DataServer';
import './App.css';
import ApexChart from './Chart';

function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [symbol, setSymbol] = useState('BTCUSDT');
  const [interval, setInterval] = useState('1m');
  const [update, setUpdate] = useState(false); // novo estado para forçar atualização

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
  }, [symbol, interval]);
  

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
      <select onChange={onSymbolChange}>
        <option>BTCUSDT</option>
        <option>ETHUSDT</option>
        <option>ADAUSDT</option>
      </select>
      <select onChange={onIntervalChange}>
        <option>1m</option>
        <option>1d</option>
        <option>1w</option>
      </select>
      {!isLoading && <ApexChart data={data} />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}

export default App;
