import { useEffect, useState } from 'react';
import { getCandle } from './server/DataServer';
import './App.css';
import ApexChart from './Chart';
function App() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
     getCandle('ETHUSDT', '1m')
     .then(data => {
        setData(data);
        setIsLoading(false);
     })
     .catch(err => {
        setIsLoading(false);
        alert(err.response ? err.response.data : err.message);
     })
  }, []);

  return (
    <div className="App">
      {!isLoading && <ApexChart data={data} />}
      {isLoading && <p>Loading...</p>}
    </div>
  );
}


export default App;
