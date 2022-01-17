import { useEffect, useState } from 'react';
import { getDataFromIndexes } from './ethereumAPI';
import { IndexesGroup } from './components/IndexesGroup/IndexesGroup';
import './App.css';

function App() {
  const [ethData, setEthData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getDataFromIndexes().then(res => res);
        setEthData(data);
        setError(false);
      } catch {
        setError(true);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <a href="/" className="logotype">Logotype</a>
          <button type="button" className="connect-wallet-btn">Connect wallet</button>
        </div>
        {error
          ? 'Can not load data from the server'
          : ethData.length > 0 && <IndexesGroup indexes={ethData}
          />}
      </div>
    </div>
  );
}

export default App;
