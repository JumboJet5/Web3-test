import { useEffect, useState} from 'react';
import { getDataFromIndexes } from './ethereumAPI';
import { IndexesGroup } from './components/IndexesGroup/IndexesGroup';
import './App.css';

function App() {
  const [ethData, setEthData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await getDataFromIndexes().then(res => res);
      setEthData(data);
    }

    fetchData();
  }, []);

  console.log(ethData);

  return (
    <div className="App">
      <div className="container">
        <div className="heading">
          <a className="logotype">Logotype</a>
          <button type="button" className="connect-wallet-btn">Connect wallet</button>
        </div>
        {ethData.length > 0 && <IndexesGroup indexes={ethData} />}
      </div>
    </div>
  );
}

export default App;
