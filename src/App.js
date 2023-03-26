import { useEffect } from 'react';
import { getCandle } from './server/DataServer';
import './App.css';
import ApexChart from './Chart';

function App() {

  useEffect(() => {
     getCandle('BTCUSDT', '1m')
     .then(data => console.log(data))
     .catch(err => alert(err.response ? err.response.data : err.message))
  },[])
  return (
    <div className="App">
     <ApexChart />
    </div>
  );
}

export default App;
